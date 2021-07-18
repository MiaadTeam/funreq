declare type RequestInfo = Request | string;
declare type HeadersInit = Headers | string[][] | Record<string, string>;
export interface FunReq extends RequestInit {
    url: RequestInfo;
}
export interface FunQLResponse<T> {
    success: boolean;
    code?: number;
    body: string | T;
}
declare type RequestSchema = {
    schema: {
        contents: {
            [key: string]: {
                models: {
                    [key: string]: {
                        doits: {
                            [key: string]: {
                                details: {
                                    get?: unknown;
                                    set?: unknown;
                                } | never;
                            };
                        };
                    };
                };
            };
        };
    };
};
declare type ResponseSchema = {
    schema: {
        contents: {
            [key: string]: {
                models: {
                    [key: string]: {
                        doits: {
                            [key: string]: {
                                details: {
                                    response: unknown;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const throwErr: (msg: string) => never;
export declare const funreq: <Req extends RequestSchema, Res extends ResponseSchema>() => {
    setup: (data: FunReq) => void;
    api: <SCHEMA extends Req & Res, CONTENTS extends SCHEMA["schema"]["contents"], CONTENTSK extends keyof CONTENTS, MODEL extends CONTENTS[CONTENTSK]["models"], MODELK extends keyof MODEL, DOIT extends MODEL[MODELK]["doits"], DOITK extends keyof DOIT, RESPONSE extends DOIT[DOITK]["details"]["response"]>(body: DOIT[DOITK] extends {
        details: never;
    } ? {
        contents: CONTENTSK;
        wants: {
            model: MODELK;
            doit: DOITK;
        };
    } : {
        contents: CONTENTSK;
        wants: {
            model: MODELK;
            doit: DOITK;
        };
        details: {
            set: DOIT[DOITK]["details"]["set"];
            get: DOIT[DOITK]["details"]["get"];
        };
    }, headers?: HeadersInit | undefined) => Promise<FunQLResponse<RESPONSE> | undefined>;
};
export {};
