import { EventDate } from "@/lib/events";
import { Action, meetsReducer, MeetsState } from "@/reducers/meets";

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
  });
});
