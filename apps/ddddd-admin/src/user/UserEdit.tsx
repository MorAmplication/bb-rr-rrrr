import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="sss]" source="sss" />
        <TextInput label="fnepw" source="fnepw" />
        <TextInput label="nklwenew" source="nklwenew" />
        <TextInput label="nlwnwe" source="nlwnwe" />
        <TextInput label="fljewnfew" source="fljewnfew" />
        <TextInput label=" flewn" source="flewn" />
        <TextInput label=" kfew kefw|" source="kfewKefw" />
        <TextInput label="n fweljn flew" source="nFweljnFlew" />
        <TextInput label="n lfewn lfe" source="nLfewnLfe" />
        <TextInput label=" nflwe fle" source="nflweFle" />
        <TextInput label=" fkew fke" source="fkewFke" />
        <TextInput label=" m fkfe k" source="mFkfeK" />
        <TextInput label="hfowehnfoewhnefow'" source="hfowehnfoewhnefow" />
        <TextInput label="bfebfoebfelo" source="bfebfoebfelo" />
        <TextInput label="nfenbf " source="nfenbf" />
        <TextInput label="jfcpijcndspjcsndp" source="jfcpijcndspjcsndp" />
        <TextInput label="houhohoho" source="houhohoho" />
      </SimpleForm>
    </Edit>
  );
};
