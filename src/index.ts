type RequestInfo = Request | string;

type HeadersInit = Headers | string[][] | Record<string, string>;

export interface FunReq extends RequestInit {
  url: RequestInfo;
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

  // type NonNullablePropertyKeys<T> = {
  //   [P in keyof T]: null extends T[P] ? never : P
  // }[keyof T];
  //
  // interface Body<T> {
  // wants : {
  //     model: keyof T["schema"]["models"]
  //         }
  //     }

  const api = async <
    SCHEMA extends Req & Res,
    CONTENTS extends SCHEMA["schema"]["contents"],
    CONTENTSK extends keyof CONTENTS,
    MODEL extends CONTENTS[CONTENTSK]["models"],
    MODELK extends keyof MODEL,
    DOIT extends MODEL[MODELK]["doits"],
    DOITK extends keyof DOIT
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
  ): Promise<DOIT[DOITK]["details"]["response"]> =>
    await fetch(setting.url, {
      ...setting,
      headers: {
        ...setting.headers,
        ...headers,
      },
      body: JSON.stringify(body),
    });

  return {
    setup,
    api,
  };
};
