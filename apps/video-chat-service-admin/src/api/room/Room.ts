import { BreakoutRoom } from "../breakoutRoom/BreakoutRoom";

export type Room = {
  active: boolean | null;
  breakoutRooms?: Array<BreakoutRoom>;
  createdAt: Date;
  createdBy: string | null;
  creator: string | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
  roomId: string | null;
  updatedAt: Date;
};
