import { Poll as TPoll } from "../api/poll/Poll";

export const POLL_TITLE_FIELD = "id";

export const PollTitle = (record: TPoll): string => {
  return record.id?.toString() || String(record.id);
};
