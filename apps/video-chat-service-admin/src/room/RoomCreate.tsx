import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BreakoutRoomTitle } from "../breakoutRoom/BreakoutRoomTitle";

export const RoomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <ReferenceArrayInput
          source="breakoutRooms"
          reference="BreakoutRoom"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BreakoutRoomTitle} />
        </ReferenceArrayInput>
        <TextInput label="createdBy" source="createdBy" />
        <TextInput label="creator" source="creator" />
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="name" source="name" />
        <TextInput label="roomId" source="roomId" />
      </SimpleForm>
    </Create>
  );
};
