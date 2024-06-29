import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BreakoutRoomCreateInput = {
  active?: boolean | null;
  creator?: string | null;
  name?: string | null;
  room?: RoomWhereUniqueInput | null;
};
