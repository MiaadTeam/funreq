type RequestInfo = Request | string;

type HeadersInit = Headers | string[][] | Record<string, string>;

export interface FunReq extends RequestInit {
  url: RequestInfo;
}

export interface FunQLResponse<T> {
  success: boolean;
  code?: number;
  body: string | T;
}

type RequestSchema = {
  schema: {
    contents: {
      [key: string]: {
        models: {
          [key: string]: {
            doits: {
              [key: string]: {
                details: { get?: unknown; set?: unknown } | never;
              };
            };
          };
        };
      };
    };
  };
};
type ResponseSchema = {
  schema: {
    contents: {
      [key: string]: {
        models: {
          [key: string]: {
            doits: {
              [key: string]: {
                details: { response: unknown };
              };
            };
          };
        };
      };
    };
  };
};

export const throwErr = (msg: string) => {
  throw new Error(msg);
};

export const funreq = <
  Req extends RequestSchema,
  Res extends ResponseSchema
>() => {
  let setting: FunReq = {
    url: "http://localhost:3000/funql",
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // ...data.headers,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // return response.json();
  };

  const setup = (data: FunReq) => {
    setting = {
      ...setting,
      ...data,
    };
  };

  const api = async <
    SCHEMA extends Req & Res,
    CONTENTS extends SCHEMA["schema"]["contents"],
    CONTENTSK extends keyof CONTENTS,
    MODEL extends CONTENTS[CONTENTSK]["models"],
    MODELK extends keyof MODEL,
    DOIT extends MODEL[MODELK]["doits"],
    DOITK extends keyof DOIT,
    RESPONSE extends DOIT[DOITK]["details"]["response"]
  >(
    body: DOIT[DOITK] extends { details: never }
      ? {
          contents: CONTENTSK;
          wants: {
            model: MODELK;
            doit: DOITK;
          };
        }
      : {
          contents: CONTENTSK;
          wants: {
            model: MODELK;
            doit: DOITK;
          };
          details: {
            set: DOIT[DOITK]["details"]["set"];
            get: DOIT[DOITK]["details"]["get"];
          };
        },
    headers?: HeadersInit
  ) => {
    try {
      const response = await fetch(setting.url, {
        ...setting,
        headers: {
          ...setting.headers,
          ...headers,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      // may error if there is no body
      const parsedBody: FunQLResponse<RESPONSE> = await response.json();

      if (parsedBody.success === false) {
        throw new Error(parsedBody.body as string);
      }

      return parsedBody;
    } catch (ex) {
      const msg = ex.messages ? ex.messages : "we have problem to fetch";
      throwErr(msg);
    }
  };

  return {
    setup,
    api,
  };
};

//One example of how to use it

// const newApi = funreq<FunQLRequest, FunQLResponseWithDetails>();
// newApi.setup({ url: "http://localhost:8000/funql" });

// export const getData = async () => {
//   const data = await newApi.api({
//     contents: "dynamic",
//     wants: {
//       model: "BlogCategory",
//       doit: "createBlogCategory",
//     },
//     details: {
//       set: {
//         name: "kjsdh",
//         enName: "ksdjhf",
//         icon: "sdkjfh",
//         description: "skdjfh",
//       },
//       get: {},
//     },
//   });
//   return data;
// };
