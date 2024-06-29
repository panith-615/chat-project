import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BreakoutRoomTitle } from "../breakoutRoom/BreakoutRoomTitle";

export const RoomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
