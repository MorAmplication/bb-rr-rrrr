import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  roles?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
};
