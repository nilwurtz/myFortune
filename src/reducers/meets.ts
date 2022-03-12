import { EventDate, GreetParts } from "@/lib/events";
import { addOneElectedGreet, isSameEventDate, subOneElectedGreet } from "@/lib/meets";

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

export type Action =
  | {
      type: "add";
      date: EventDate;
      part: GreetParts;
    }
  | {
      type: "sub";
      date: EventDate;
      part: GreetParts;
    }
  | {
      type: "init";
      dates: EventDate[];
    };

export const initialMeetsState: MeetsState = {
  meets: [],
};

export const meetsReducer = (state: MeetsState, action: Action): MeetsState => {
  switch (action.type) {
    case "add": {
      const targetMeet = state.meets.find((meet) => isSameEventDate(meet.date, action.date));
      if (targetMeet === undefined) return state;

      return {
        meets: state.meets.map((meet) => {
          if (isSameEventDate(meet.date, action.date)) return addOneElectedGreet(meet, action.part);
          return meet;
        }),
      };
    }

    case "sub": {
      return {
        meets: state.meets.map((meet) => {
          if (isSameEventDate(meet.date, action.date)) return subOneElectedGreet(meet, action.part);
          return meet;
        }),
      };
    }

    case "init": {
      return {
        meets: action.dates.map((eventDate) => {
          return {
            date: eventDate,
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          };
        }),
      };
    }
    default:
      return state;
  }
};
