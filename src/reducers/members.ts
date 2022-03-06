import { Member, sortById } from "@/lib/members";
import { stat } from "fs";

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
      type: "add";
      memberId: number;
    }
  | {
      type: "delete";
      memberId: number;
    };

export const membersReducer = (state: MembersState, action: MembersAction): MembersState => {
  switch (action.type) {
    case "load":
      return {
        participateMembers: sortById(
          action.allMembers.filter((member) => !action.nonParticipateMemberIds.includes(member.id))
        ),
        selectedMembers: [],
      };

    case "add":
      const addMember = state.participateMembers.find((member) => member.id === action.memberId);
      return {
        ...state,
        selectedMembers: addMember
          ? sortById([...state.selectedMembers, addMember])
          : state.selectedMembers,
      };

    case "delete":
      return {
        ...state,
        selectedMembers: state.selectedMembers.filter((member) => member.id !== action.memberId),
      };

    default:
      return state;
  }
};
