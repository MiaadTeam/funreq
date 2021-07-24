import { funreq } from ".";
import { FunQLResponseWithDetails } from "./declarations/response/schema";
import { FunQLRequest } from "./declarations/request/schema";

const newApi = funreq<FunQLRequest, FunQLResponseWithDetails>();
newApi.setup({ url: "http://localhost:8000/funql" });

export const getData = async () => {
  const data = await newApi.api({
    contents: "dynamic",
    wants: {
      model: "User",
      doit: "getUsers",
    },
    details: {
      set: {},
      get: {
        _id: 1,
        addresses: { city: { enName: 0, name: 0 } },
        birthDate: 0,
        email: 1,
        isActive: 1,
      },
    },
  });
  const b = data!.body[0].birthDate;
};
