import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
        <TextField label="sss]" source="sss" />
        <TextField label="fnepw" source="fnepw" />
        <TextField label="nklwenew" source="nklwenew" />
        <TextField label="nlwnwe" source="nlwnwe" />
        <TextField label="fljewnfew" source="fljewnfew" />
        <TextField label=" flewn" source="flewn" />
        <TextField label=" kfew kefw|" source="kfewKefw" />
        <TextField label="n fweljn flew" source="nFweljnFlew" />
        <TextField label="n lfewn lfe" source="nLfewnLfe" />
        <TextField label=" nflwe fle" source="nflweFle" />
        <TextField label=" fkew fke" source="fkewFke" />
        <TextField label=" m fkfe k" source="mFkfeK" />
        <TextField label="hfowehnfoewhnefow'" source="hfowehnfoewhnefow" />
        <TextField label="bfebfoebfelo" source="bfebfoebfelo" />
        <TextField label="nfenbf " source="nfenbf" />
        <TextField label="jfcpijcndspjcsndp" source="jfcpijcndspjcsndp" />
        <TextField label="houhohoho" source="houhohoho" />
      </Datagrid>
    </List>
  );
};
