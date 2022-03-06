import { MembersAction, membersReducer, MembersState } from "@/reducers/members";

describe("members reducer", () => {
  describe("load members", () => {
    it("load Members order by id", () => {
      const initialState: MembersState = {
        participateMembers: [],
        selectedMembers: [],
      };

      const action: MembersAction = {
        type: "load",
        allMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 5, name: "eee" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
        ],
        nonParticipateMemberIds: [2, 3],
      };

      const actual = membersReducer(initialState, action);

      const expected: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [],
      };

      expect(actual).toEqual(expected);
    });
  });
});

