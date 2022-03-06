import { FunctionComponent } from "preact";
import { Selector } from "@/components/atoms/selector";
import { useEffect, useReducer } from "preact/hooks";
import { membersReducer } from "@/reducers/members";
import { EVENTS } from "@/lib/events";
import { MEMBERS } from "@/lib/members";
import { AddButton } from "@/components/atoms/addButton";

export const IndexPage: FunctionComponent = () => {
  const [state, dispatch] = useReducer(membersReducer, {
    participateMembers: [],
    selectedMembers: [],
  });

  useEffect(() => {
    dispatch({
      type: "load",
      allMembers: MEMBERS,
      nonParticipateMemberIds: EVENTS["4th"].nonParticipateMemberIds,
    });
  }, []);

  return (
    <div>
      <section>
        <div className="flex justify-end flex-row py-2 px-4">
          <AddButton />
        </div>
      </section>
    </div>
  );
};
