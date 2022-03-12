import { EventDate } from "@/lib/events";
import { Action, initialMeetsState, meetsReducer, MeetsState } from "@/reducers/meets";

describe("meetsReducer", () => {
  describe("add action", () => {
    it("Add one elected to specific part", () => {
      const eventDate: EventDate = {
        year: 2022,
        month: 1,
        date: 10,
        day: "木",
      };
      const initialState: MeetsState = {
        meets: [
          {
            date: eventDate,
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      const action: Action = {
        type: "add",
        date: { ...eventDate },
        part: 1,
      };

      const actual = meetsReducer(initialState, action);

      const expected: MeetsState = {
        meets: [
          {
            date: eventDate,
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      expect(actual).toEqual(expected);
    });

    it("if specify don't exists date, returns state", () => {
      const eventDate: EventDate = {
        year: 2022,
        month: 1,
        date: 10,
        day: "木",
      };

      const initialState: MeetsState = {
        meets: [
          {
            date: { ...eventDate, date: 9 },
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      const action: Action = {
        type: "add",
        date: { ...eventDate },
        part: 1,
      };

      const actual = meetsReducer(initialState, action);

      const expected: MeetsState = {
        meets: [
          {
            date: { ...eventDate, date: 9 },
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      expect(actual).toEqual(expected);
    });
  });

  describe("sub action", () => {
    it("Sub one elected to specific part", () => {
      const eventDate: EventDate = {
        year: 2022,
        month: 1,
        date: 10,
        day: "木",
      };
      const initialState: MeetsState = {
        meets: [
          {
            date: eventDate,
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      const action: Action = {
        type: "sub",
        date: { ...eventDate },
        part: 1,
      };

      const actual = meetsReducer(initialState, action);

      const expected: MeetsState = {
        meets: [
          {
            date: eventDate,
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      expect(actual).toEqual(expected);
    });

    it("If zero elected part, elected value remains 0", () => {
      const eventDate: EventDate = {
        year: 2022,
        month: 1,
        date: 10,
        day: "木",
      };
      const initialState: MeetsState = {
        meets: [
          {
            date: eventDate,
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      const action: Action = {
        type: "sub",
        date: { ...eventDate },
        part: 2,
      };

      const actual = meetsReducer(initialState, action);

      const expected: MeetsState = {
        meets: [
          {
            date: eventDate,
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      expect(actual).toEqual(expected);
    });
    it("if specify don't exists date, returns state", () => {
      const eventDate: EventDate = {
        year: 2022,
        month: 1,
        date: 10,
        day: "木",
      };

      const initialState: MeetsState = {
        meets: [
          {
            date: { ...eventDate, date: 9 },
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      const action: Action = {
        type: "sub",
        date: { ...eventDate },
        part: 1,
      };

      const actual = meetsReducer(initialState, action);

      const expected: MeetsState = {
        meets: [
          {
            date: { ...eventDate, date: 9 },
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: { ...eventDate, date: 11 },
            greets: [
              { part: 1, greet: { elected: 1 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      expect(actual).toEqual(expected);
    });
  });

  describe("init action", () => {
    it("create empty meets from event dates", () => {
      const eventDate1: EventDate = {
        year: 2022,
        month: 3,
        date: 1,
        day: "日",
      };

      const eventDate2: EventDate = {
        year: 2022,
        month: 3,
        date: 2,
        day: "月",
      };

      const action: Action = {
        type: "init",
        dates: [eventDate1, eventDate2],
      };

      const actual = meetsReducer(initialMeetsState, action);
      const expected: MeetsState = {
        meets: [
          {
            date: eventDate1,
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
          {
            date: eventDate2,
            greets: [
              { part: 1, greet: { elected: 0 } },
              { part: 2, greet: { elected: 0 } },
              { part: 3, greet: { elected: 0 } },
              { part: 4, greet: { elected: 0 } },
              { part: 5, greet: { elected: 0 } },
              { part: 6, greet: { elected: 0 } },
            ],
          },
        ],
      };

      expect(actual).toEqual(expected);
    });
  });
});
