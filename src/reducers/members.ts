import { Member } from "@/lib/members";

export type MembersState = {
  participateMembers: Member[];
  selectedMembers: Member[];
};

export type MembersAction =
  | {
    type: "load";
    allMembers: Member[];
    nonParticipateMemberIds: number[];
  }
  | {
    type: "selectMember";
    memberId: number[];
  };

export const membersReducer = (state: MembersState, action: MembersAction): MembersState => {
  switch (action.type) {
    case "load":
      return {
        participateMembers: action.allMembers
          .filter((member) => !action.nonParticipateMemberIds.includes(member.id))
          .sort((a, b) => a.id - b.id),
        selectedMembers: [],
      };
    default:
      return state;
  }
};
