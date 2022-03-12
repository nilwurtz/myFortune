import { GreetsState, MeetState } from "@/reducers/meets";
import { EventDate } from "@/lib/events";
import { addOneElectedGreet, isSameEventDate, subOneElectedGreet } from "@/lib/meets";

describe("#addOneElectedGreet", () => {
  const emptyGreets: GreetsState = [
    { part: 1, greet: { elected: 0 } },
    { part: 2, greet: { elected: 0 } },
    { part: 3, greet: { elected: 0 } },
    { part: 4, greet: { elected: 0 } },
    { part: 5, greet: { elected: 0 } },
    { part: 6, greet: { elected: 0 } },
  ];
  it("Add one to the part", () => {
    const meet: MeetState = {
      date: {} as EventDate,
      greets: emptyGreets,
    };

    const actual = addOneElectedGreet(meet, 1);

    const expected: MeetState = {
      date: {} as EventDate,
      greets: [
        { part: 1, greet: { elected: 1 } },
        { part: 2, greet: { elected: 0 } },
        { part: 3, greet: { elected: 0 } },
        { part: 4, greet: { elected: 0 } },
        { part: 5, greet: { elected: 0 } },
        { part: 6, greet: { elected: 0 } },
      ],
    };

    expect(actual).toEqual(expected);
  });

  it("Add one to don't exists part", () => {
    const meet: MeetState = {
      date: {} as EventDate,
      greets: [
        { part: 1, greet: { elected: 0 } },
        { part: 2, greet: { elected: 0 } },
        { part: 4, greet: { elected: 0 } },
        { part: 5, greet: { elected: 0 } },
        { part: 6, greet: { elected: 0 } },
      ],
    };

    const actual = addOneElectedGreet(meet, 3);

    const expected: MeetState = {
      date: {} as EventDate,
      greets: [
        { part: 1, greet: { elected: 0 } },
        { part: 2, greet: { elected: 0 } },
        { part: 4, greet: { elected: 0 } },
        { part: 5, greet: { elected: 0 } },
        { part: 6, greet: { elected: 0 } },
      ],
    };

    expect(actual).toEqual(expected);
  });

  it("add One to greet that has elected value", () => {
    const meet: MeetState = {
      date: {} as EventDate,
      greets: [
        { part: 1, greet: { elected: 0 } },
        { part: 2, greet: { elected: 0 } },
        { part: 3, greet: { elected: 2 } },
        { part: 4, greet: { elected: 0 } },
        { part: 5, greet: { elected: 0 } },
        { part: 6, greet: { elected: 0 } },
      ],
    };

    const actual = addOneElectedGreet(meet, 3);

    const expected: MeetState = {
      date: {} as EventDate,
      greets: [
        { part: 1, greet: { elected: 0 } },
        { part: 2, greet: { elected: 0 } },
        { part: 3, greet: { elected: 3 } },
        { part: 4, greet: { elected: 0 } },
        { part: 5, greet: { elected: 0 } },
        { part: 6, greet: { elected: 0 } },
      ],
    };

    expect(actual).toEqual(expected);
  });
});

describe("#subOneElectedGreet", () => {
  const defaultGreets: GreetsState = [
    { part: 1, greet: { elected: 1 } },
    { part: 2, greet: { elected: 1 } },
    { part: 3, greet: { elected: 1 } },
    { part: 4, greet: { elected: 1 } },
    { part: 5, greet: { elected: 1 } },
    { part: 6, greet: { elected: 1 } },
  ];
  it("Subtract one to the part", () => {
    const meet: MeetState = {
      date: {} as EventDate,
      greets: defaultGreets,
    };

    const actual = subOneElectedGreet(meet, 1);

    const expected: MeetState = {
      date: {} as EventDate,
      greets: [
        { part: 1, greet: { elected: 0 } },
        { part: 2, greet: { elected: 1 } },
        { part: 3, greet: { elected: 1 } },
        { part: 4, greet: { elected: 1 } },
        { part: 5, greet: { elected: 1 } },
        { part: 6, greet: { elected: 1 } },
      ],
    };

    expect(actual).toEqual(expected);
  });

  it("Subtract one to don't exists part", () => {
    const greets = [
      { part: 1, greet: { elected: 1 } },
      { part: 2, greet: { elected: 1 } },
      { part: 4, greet: { elected: 1 } },
      { part: 5, greet: { elected: 1 } },
      { part: 6, greet: { elected: 1 } },
    ] as GreetsState;

    const meet: MeetState = {
      date: {} as EventDate,
      greets,
    };

    const actual = subOneElectedGreet(meet, 3);

    const expected: MeetState = {
      date: {} as EventDate,
      greets,
    };

    expect(actual).toEqual(expected);
  });

  it("Subtract zero value", () => {
    const meet: MeetState = {
      date: {} as EventDate,
      greets: [
        { part: 1, greet: { elected: 0 } },
        { part: 2, greet: { elected: 0 } },
        { part: 3, greet: { elected: 0 } },
        { part: 4, greet: { elected: 0 } },
        { part: 5, greet: { elected: 0 } },
        { part: 6, greet: { elected: 0 } },
      ],
    };

    const actual = subOneElectedGreet(meet, 3);

    const expected: MeetState = {
      date: {} as EventDate,
      greets: [
        { part: 1, greet: { elected: 0 } },
        { part: 2, greet: { elected: 0 } },
        { part: 3, greet: { elected: 0 } },
        { part: 4, greet: { elected: 0 } },
        { part: 5, greet: { elected: 0 } },
        { part: 6, greet: { elected: 0 } },
      ],
    };

    expect(actual).toEqual(expected);
  });
});

describe("#isSameEventDate", () => {
  const date1: EventDate = {
    year: 2022,
    month: 3,
    date: 9,
    day: "土",
  };
  it("returns true when two date's year, month, and date is equal", () => {
    const date2: EventDate = {
      year: 2022,
      month: 3,
      date: 9,
      day: "土",
    };

    const actual = isSameEventDate(date1, date2);

    expect(actual).toBe(true);
  });
  it("returns true when its day is not equal", () => {
    const date2: EventDate = {
      year: 2022,
      month: 3,
      date: 9,
      day: "日",
    };

    const actual = isSameEventDate(date1, date2);

    expect(actual).toBe(true);
  });
  it("false pattern", () => {
    const date2: EventDate = {
      year: 2022,
      month: 4,
      date: 9,
      day: "土",
    };

    const actual = isSameEventDate(date1, date2);

    expect(actual).toBe(false);
  });
});
