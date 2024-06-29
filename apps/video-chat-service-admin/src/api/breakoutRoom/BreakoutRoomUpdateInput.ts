import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BreakoutRoomUpdateInput = {
  active?: boolean | null;
  creator?: string | null;
  name?: string | null;
  room?: RoomWhereUniqueInput | null;
};
