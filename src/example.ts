//this file is not include to index and do not effect on running index.ts
import { funreq } from ".";
import { FunQLResponseWithDetails } from "./declarations/response/schema";
import { FunQLRequest } from "./declarations/request/schema";

const newApi = funreq<FunQLRequest, FunQLResponseWithDetails>();
newApi.setup({ url: "http://localhost:8000/funql" });

export const getData = async () => {
  const data = await newApi.api({
    contents: "static",
    wants: {
      model: "StoreHomePage",
      doit: "getStoreHomePage",
    },
    details: { set: {} },
  });
  const b = data.body.promotionWares[0];
};
