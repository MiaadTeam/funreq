declare type RequestInfo = Request | string;
declare type HeadersInit = Headers | string[][] | Record<string, string>;
export interface FunReq extends RequestInit {
    url: RequestInfo;
}
declare type Schema = {
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
export declare const funreq: <T extends Schema>() => {
    setup: (data: FunReq) => void;
    api: <SCHEMA extends T, CONTENTS extends SCHEMA["schema"]["contents"], CONTENTSK extends keyof CONTENTS, MODEL extends CONTENTS[CONTENTSK]["models"], MODELK extends keyof MODEL, DOIT extends MODEL[MODELK]["doits"], DOITK extends keyof DOIT>(body: DOIT[DOITK] extends {
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
        details: DOIT[DOITK]["details"];
    }, headers?: HeadersInit | undefined) => Promise<Response>;
};
export {};
