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

  describe("add Member", () => {
    it("add member from empty", () => {
      const initialState: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [],
      };

      const action: MembersAction = {
        type: "add",
        memberId: 3,
      };

      const actual = membersReducer(initialState, action);

      const expected: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [{ id: 3, name: "ccc" }],
      };

      expect(actual).toEqual(expected);
    });

    it("add member from selected", () => {
      const initialState: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [{ id: 5, name: "eee" }],
      };

      const action: MembersAction = {
        type: "add",
        memberId: 3,
      };

      const actual = membersReducer(initialState, action);

      const expected: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [
          { id: 3, name: "ccc" },
          { id: 5, name: "eee" },
        ],
      };

      expect(actual).toEqual(expected);
    });

    it("non exists member selected", () => {
      const initialState: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [{ id: 5, name: "eee" }],
      };

      const action: MembersAction = {
        type: "add",
        memberId: 9,
      };

      const actual = membersReducer(initialState, action);

      const expected: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [{ id: 5, name: "eee" }],
      };

      expect(actual).toEqual(expected);
    });
  });

  describe("delete member", () => {
    it("delete selected member", () => {
      const initialState: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [
          { id: 3, name: "ccc" },
          { id: 5, name: "eee" },
        ],
      };

      const action: MembersAction = {
        type: "delete",
        memberId: 5,
      };

      const actual = membersReducer(initialState, action);

      const expected: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [{ id: 3, name: "ccc" }],
      };

      expect(actual).toEqual(expected);
    });

    it("delete non-selected member", () => {
      const initialState: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [
          { id: 3, name: "ccc" },
          { id: 5, name: "eee" },
        ],
      };

      const action: MembersAction = {
        type: "delete",
        memberId: 4,
      };

      const actual = membersReducer(initialState, action);

      const expected: MembersState = {
        participateMembers: [
          { id: 1, name: "aaa" },
          { id: 2, name: "bbb" },
          { id: 3, name: "ccc" },
          { id: 4, name: "ddd" },
          { id: 5, name: "eee" },
        ],
        selectedMembers: [
          { id: 3, name: "ccc" },
          { id: 5, name: "eee" },
        ],
      };

      expect(actual).toEqual(expected);
    });
  });
});
