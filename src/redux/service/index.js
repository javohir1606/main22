import { phoneApi } from "./phone";
import { compApi } from "./computer";

export default [phoneApi, compApi];

export const serviceReducer = {
  [compApi.reducerPath]: compApi.reducer,
  [phoneApi.reducerPath]: phoneApi.reducer,
};
