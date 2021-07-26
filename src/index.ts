import {
  FunQLResponse,
  FunQLResponseSuccuss,
  FunReq,
  GetType,
  RequestSchema,
  ResponseSchema,
  SelectProjection,
} from "./types";
import { isRequestSuccess, throwError } from "./utils";

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
    Get extends GetType<Doit[DoitKey]["details"]["get"]>,
    SelectedResponse extends Doit[DoitKey]["details"]["get"] extends
      | never
      | undefined
      ? Response
      : SelectProjection<Response, Get>
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
            get?: Get;
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
      const parsedBody: FunQLResponse<SelectedResponse> = await response.json();

      //it return response if response is success or throw error if response is invalid
      return isRequestSuccess(parsedBody)
        ? parsedBody
        : throwError(String(response.body));
    } catch (ex) {
      const msg = ex.messages ? ex.messages : "we have problem to fetch";
      return throwError(msg);
    }
  };

  return {
    setup,
    api,
  };
};

type StrictProjection<T> = T extends 0 ? 0 : 1;
