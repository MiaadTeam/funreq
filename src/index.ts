import { GetType, SelectProjection2 } from "./type copy";

type RequestInfo = Request | string;

type HeadersInit = Headers | string[][] | Record<string, string>;

export interface FunReq extends RequestInit {
  url: RequestInfo;
}

export interface FunQLResponse<T> {
  success: boolean;
  code?: number;
  body: T;
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
    Schema extends Req & Res,
    Content extends Schema["schema"]["contents"],
    ContentKey extends keyof Content,
    Model extends Content[ContentKey]["models"],
    ModelKey extends keyof Model,
    Doit extends Model[ModelKey]["doits"],
    DoitKey extends keyof Doit,
    Response extends Doit[DoitKey]["details"]["response"],
    Set extends Doit[DoitKey]["details"]["set"],
    Get extends GetType<Doit[DoitKey]["details"]["get"]>
  >(
    body: Doit[DoitKey] extends { details: never }
      ? {
          contents: ContentKey;
          wants: {
            model: ModelKey;
            doit: DoitKey;
          };
        }
      : {
          contents: ContentKey;
          wants: {
            model: ModelKey;
            doit: DoitKey;
          };
          details: {
            set: Set;
            get: Get;
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
      const parsedBody: FunQLResponse<
        SelectProjection2<Response, NonNullable<Get>>
      > = await response.json();

      if (parsedBody.success === false) {
        throw new Error(String(parsedBody.body));
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
