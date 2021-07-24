import { funreq } from ".";
import { FunQLResponseWithDetails } from "./declarations/response/schema";
import { FunQLRequest } from "./declarations/request/schema";

const newApi = funreq<FunQLRequest, FunQLResponseWithDetails>();
newApi.setup({ url: "http://localhost:8000/funql" });

export const getData = async () => {
  const data = await newApi.api({
    contents: "dynamic",
    wants: {
      model: "BlogCategory",
      doit: "createBlogCategory",
    },
    details: {
      set: {
        name: "kjsdh",
        enName: "ksdjhf",
        icon: "sdkjfh",
        description: "skdjfh",
      },
      get: { updateAt: 1, blogPosts: { title: 1, summary: 1 } },
    },
  });
  const b = data!.body.blogPosts[0];
  b.map();
};
