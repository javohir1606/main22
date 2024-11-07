import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const LoginApi = createApi({
  reducerPath: "login_api",
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getLoginUsers: build.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/login`,
          body: data,
        };
      },
    }),
  }),
});

export const { useGetLoginUsersMutation } = LoginApi;
