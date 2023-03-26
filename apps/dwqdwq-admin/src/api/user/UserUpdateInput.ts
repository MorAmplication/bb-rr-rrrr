import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  roles?: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
};
