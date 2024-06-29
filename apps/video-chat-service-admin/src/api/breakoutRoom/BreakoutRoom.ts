import { Room } from "../room/Room";

export type BreakoutRoom = {
  active: boolean | null;
  createdAt: Date;
  creator: string | null;
  id: string;
  name: string | null;
  room?: Room | null;
  updatedAt: Date;
};
