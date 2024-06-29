import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  creator?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  roomId?: SortOrder;
  updatedAt?: SortOrder;
};
