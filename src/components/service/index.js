import { phoneApi } from "./phone";
import { compApi } from "./computer";
import { registerApi } from "./user-register";
import { LoginApi } from "./user-login";

export default [phoneApi, compApi, registerApi, LoginApi];

export const serviceReducer = {
  [LoginApi.reducerPath]: LoginApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [compApi.reducerPath]: compApi.reducer,
  [phoneApi.reducerPath]: phoneApi.reducer,
};
