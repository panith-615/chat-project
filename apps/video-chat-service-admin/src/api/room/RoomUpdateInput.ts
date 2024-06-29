import { BreakoutRoomUpdateManyWithoutRoomsInput } from "./BreakoutRoomUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  active?: boolean | null;
  breakoutRooms?: BreakoutRoomUpdateManyWithoutRoomsInput;
  createdBy?: string | null;
  creator?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  roomId?: string | null;
};
