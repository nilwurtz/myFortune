type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type DateNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25
  | 26
  | 27
  | 28
  | 29
  | 30
  | 31;
type DayOfWeek = "月" | "火" | "水" | "木" | "金" | "土" | "日";

export type EventDate = {
  year: number;
  month: Month;
  date: DateNumber;
  day: DayOfWeek;
};

export type Greet = {
  elected: number;
  applied: number;
};

export type GreetParts = 1 | 2 | 3 | 4 | 5 | 6;

export const emptyGreet: Greet = { elected: 0, applied: 0 };
export const emptyGreets: [Greet, Greet, Greet, Greet, Greet, Greet] = [
  emptyGreet,
  emptyGreet,
  emptyGreet,
  emptyGreet,
  emptyGreet,
  emptyGreet,
];

type SingleEvents = "4th";

type Events = {
  // eslint-disable-next-line no-unused-vars
  [k in SingleEvents]: {
    nonParticipateMemberIds: number[];
    dates: EventDate[];
  };
};

export const EVENTS: Events = {
  "4th": {
    nonParticipateMemberIds: [9, 10],
    dates: [
      {
        year: 2022,
        month: 4,
        date: 10,
        day: "日",
      },
      {
        year: 2022,
        month: 4,
        date: 16,
        day: "土",
      },
      {
        year: 2022,
        month: 4,
        date: 17,
        day: "日",
      },
      {
        year: 2022,
        month: 4,
        date: 29,
        day: "金",
      },
      {
        year: 2022,
        month: 5,
        date: 7,
        day: "土",
      },
      {
        year: 2022,
        month: 5,
        date: 8,
        day: "日",
      },
    ],
  },
};
