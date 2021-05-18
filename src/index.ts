type RequestInfo = Request | string;

type HeadersInit = Headers | string[][] | Record<string, string>;

interface FunReq extends RequestInit {
  url: RequestInfo;
}

type Schema = {
  schema: {
    models: {
      [key: string]: {
        doits: {
          [key: string]: { details: { get?: unknown; set?: unknown } | never };
        };
      };
    };
  };
};

export const funreq = <T extends Schema>() => {
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
    SCHEMA extends T,
    MODEL extends SCHEMA["schema"]["models"],
    MODELK extends keyof MODEL,
    DOIT extends MODEL[MODELK]["doits"],
    DOITK extends keyof DOIT
  >(
    body: DOIT[DOITK] extends { details: never }
      ? {
          wants: {
            model: MODELK;
            doit: DOITK;
          };
        }
      : {
          wants: {
            model: MODELK;
            doit: DOITK;
          };
          details: DOIT[DOITK]["details"];
        },
    headers?: HeadersInit
  ) =>
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
