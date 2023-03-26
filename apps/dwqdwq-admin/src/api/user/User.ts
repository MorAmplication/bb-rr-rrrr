import { JsonValue } from "type-fest";

export type User = {
  roles: JsonValue;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
};
