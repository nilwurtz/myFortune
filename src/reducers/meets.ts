import { EventDate, GreetParts } from "@/lib/events";
import { addOneElectedGreet, isSameEventDate } from "@/lib/meets";

export type GreetState = {
  elected: number;
};

export type GreetsState = {
  part: GreetParts;
  greet: GreetState;
}[];

export type MeetState = {
  date: EventDate;
  greets: GreetsState;
};

export type MeetsState = {
  meets: MeetState[];
};

export type Action = {
  type: "add";
  date: EventDate;
  part: GreetParts;
};

export const initialState: MeetsState = {
  meets: [],
};

export const meetsReducer = (state: MeetsState, action: Action): MeetsState => {
  switch (action.type) {
    case "add": {
      const targetMeet = state.meets.find((meet) => isSameEventDate(meet.date, action.date));
      if (targetMeet === undefined) return state;

      const targetGreet = targetMeet.greets.find((greet) => greet.part === action.part);
      if (targetGreet === undefined) return state;

      return {
        meets: state.meets.map((meet) => {
          if (isSameEventDate(meet.date, action.date)) return addOneElectedGreet(meet, action.part);
          return meet;
        }),
      };
    }
    default:
      return state;
  }
};
