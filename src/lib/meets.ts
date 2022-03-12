import { MeetState } from "@/reducers/meets";
import { EventDate, GreetParts } from "@/lib/events";

export const addOneElectedGreet = (meet: MeetState, part: GreetParts): MeetState => {
  const targetGreet = meet.greets.find((greet) => greet.part === part);
  if (targetGreet === undefined) return meet;
  return {
    ...meet,
    greets: meet.greets.map((greet) => {
      if (greet.part === part) return { ...greet, greet: { elected: greet.greet.elected + 1 } };
      return greet;
    }),
  };
};

export const subOneElectedGreet = (meet: MeetState, part: GreetParts): MeetState => {
  const targetGreet = meet.greets.find((greet) => greet.part === part);
  if (targetGreet === undefined) return meet;
  return {
    ...meet,
    greets: meet.greets.map((greet) => {
      if (greet.part === part)
        return {
          ...greet,
          greet: { elected: greet.greet.elected !== 0 ? greet.greet.elected - 1 : 0 },
        };
      return greet;
    }),
  };
};

export const isSameEventDate = (date1: EventDate, date2: EventDate): boolean => {
  return date1.month === date2.month && date1.month === date2.month && date1.date === date2.date;
};
