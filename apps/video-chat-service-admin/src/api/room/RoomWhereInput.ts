import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BreakoutRoomListRelationFilter } from "../breakoutRoom/BreakoutRoomListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RoomWhereInput = {
  active?: BooleanNullableFilter;
  breakoutRooms?: BreakoutRoomListRelationFilter;
  createdBy?: StringNullableFilter;
  creator?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  roomId?: StringNullableFilter;
};
