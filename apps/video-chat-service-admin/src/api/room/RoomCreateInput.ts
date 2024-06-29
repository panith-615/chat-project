import { BreakoutRoomCreateNestedManyWithoutRoomsInput } from "./BreakoutRoomCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  active?: boolean | null;
  breakoutRooms?: BreakoutRoomCreateNestedManyWithoutRoomsInput;
  createdBy?: string | null;
  creator?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  roomId?: string | null;
};
