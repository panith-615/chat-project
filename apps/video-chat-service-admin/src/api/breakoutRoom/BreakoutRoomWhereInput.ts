import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BreakoutRoomWhereInput = {
  active?: BooleanNullableFilter;
  creator?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  room?: RoomWhereUniqueInput;
};
