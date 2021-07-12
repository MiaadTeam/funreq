import { FunQL } from "../schema";

type RequestInfo = Request | string;

type HeadersInit = Headers | string[][] | Record<string, string>;

export interface FunReq extends RequestInit {
  url: RequestInfo;
}

interface HttpResponse<H> extends Response {
  parsedBody?: H;
}

type Schema = {
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

  type SCHEMA = T;
  type CONTENTS = SCHEMA["schema"]["contents"];
  type CONTENTSK = keyof CONTENTS;
  type MODEL = CONTENTS[CONTENTSK]["models"];
  type MODELK = keyof MODEL;
  type DOIT = MODEL[MODELK]["doits"];
  type DOITK = keyof DOIT;

  type BODY = {
    contents: CONTENTSK;
    wants: {
      model: MODELK;
      doit: DOITK;
    };
    details: DOIT[DOITK]["details"];
  };

  // type BODY = DOIT[DOITK] extends { details: never }
  //   ? {
  //       contents: CONTENTSK;
  //       wants: {
  //         model: MODELK;
  //         doit: DOITK;
  //       };
  //     }
  //   : {
  //       contents: CONTENTSK;
  //       wants: {
  //         model: MODELK;
  //         doit: DOITK;
  //       };
  //       details: DOIT[DOITK]["details"];
  //     };

  // type API = <D>(body: BODY, headers?: HeadersInit) => Promise<HttpResponse<D>>

  const api = async <D>(body: BODY, headers?: HeadersInit) => {
    const response: HttpResponse<D> = await fetch(setting.url, {
      ...setting,
      headers: {
        ...setting.headers,
        ...headers,
      },
      body: JSON.stringify(body),
    });

    try {
      // may error if there is no body
      response.parsedBody = await response.json();
    } catch (ex) {}

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  };

  return {
    setup,
    api,
  };
};

const newApi = funreq<FunQL>();
newApi.setup({ url: "http://localhost:8000/funql" });

newApi.api({
  contents: "static",
  wants: {
    model: "",
  },
});
