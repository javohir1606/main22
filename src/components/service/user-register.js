import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const registerApi = createApi({
  reducerPath: "register_api",
  baseQuery: createBaseQuery(),
  endpoints: (build) => ({
    getUsers: build.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/register`,
          body: data,
        };
      },
    }),
  }),
});

export const { useGetUsersMutation } = registerApi;
