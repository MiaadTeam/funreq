//this file is not include to index and do not effect on running index.ts
import { funreq } from ".";
import { FunQLResponseWithDetails } from "./declarations/response/schema";
import { FunQLRequest } from "./declarations/request/schema";

const newApi = funreq<FunQLRequest, FunQLResponseWithDetails, false>();
newApi.setup({ url: "http://localhost:8000/funql" });

export const getData = async () => {
  const data = await newApi.api({
    contents: "dynamic",
    wants: {
      model: "BlogCategory",
      doit: "createBlogCategory",
    },
    details: {
      set: { name: "", enName: "", description: "" },
      get: { _id: 1, updateAt: 1, enName: 0 },
    },
  });
  const b = data.body.enName;
};
