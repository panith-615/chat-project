import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ROOM_TITLE_FIELD } from "./RoomTitle";

export const RoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="creator" source="creator" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="name" source="name" />
        <TextField label="roomId" source="roomId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BreakoutRoom"
          target="roomId"
          label="BreakoutRooms"
        >
          <Datagrid rowClick="show">
            <BooleanField label="active" source="active" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="creator" source="creator" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField label="room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
