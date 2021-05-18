declare type RequestInfo = Request | string;
declare type HeadersInit = Headers | string[][] | Record<string, string>;
interface FunReq extends RequestInit {
    url: RequestInfo;
}
declare type Schema = {
    schema: {
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
export declare const funreq: <T extends Schema>() => {
    setup: (data: FunReq) => void;
    api: <SCHEMA extends T, MODEL extends SCHEMA["schema"]["models"], MODELK extends keyof MODEL, DOIT extends MODEL[MODELK]["doits"], DOITK extends keyof DOIT>(body: DOIT[DOITK] extends {
        details: never;
    } ? {
        wants: {
            model: MODELK;
            doit: DOITK;
        };
    } : {
        wants: {
            model: MODELK;
            doit: DOITK;
        };
        details: DOIT[DOITK]["details"];
    }, headers?: HeadersInit | undefined) => Promise<Response>;
};
export {};
