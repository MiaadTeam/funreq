import { funreq } from ".";
import { FunQLResponseWithDetails } from "./declarations/response/schema";
import { FunQLRequest } from "./declarations/request/schema";
import { FQl_dynamic_city_ICity } from "./declarations/schema/schema";

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
      set: { lastName: "" },
      get: {
        name: 0,
        _id: 1,
        lastName: 0,
        isActive: 0,
        phone: 0,
        postalCode: 0,
        gender: 0
      },
    },
  });
  const b = data!.body[0].
};
