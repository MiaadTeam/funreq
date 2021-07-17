type RequestInfo = Request | string;

type HeadersInit = Headers | string[][] | Record<string, string>;

export interface FunReq extends RequestInit {
  url: RequestInfo;
}

export interface HttpResponse<H> extends Response {
  parsedBody?: H;
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

  const api = () => async <
    SCHEMA extends RequestSchema & ResponseSchema,
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
  ) => {
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
    } catch (ex) {
      const msg = ex.messages ? ex.messages : "we have problem to fetch";
      throw new Error(msg);
    }

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.parsedBody;
  };

  return {
    setup,
    api,
  };
};

/* One example of how yo use it

const newApi = funreq<FunQL>();
newApi.setup({ url: "http://localhost:8000/funql" });

interface BlogPosts {
  _id: string,
  name: string
}

const blogPosts = newApi.api<BlogPosts>()({
  contents: "dynamic",
  wants: {
    model: "BlogPost",
    doit: "getBlogPosts"
  },
  details: {
    set: {
      pagination: {
        page: 1,
        limit: 10
      }
    },
    get: {
      _id: 0
    }
  }
});

*/
