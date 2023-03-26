import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  roles: InputJsonValue;
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
};
