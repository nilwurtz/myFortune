import { FunctionComponent } from "preact";
import { useContext } from "preact/hooks";
import { MeetsTableContext } from "@/components/pages/index/index";
import { AddButton, SubButton } from "@/components/atoms/buttons";

export const MeetsButtons: FunctionComponent = () => {
  const { selectedGreet, dispatch } = useContext(MeetsTableContext);
  if (selectedGreet === null) return null;

  return (
    <div className="w-screen px-4 py-10 bg-white border border-t h-16 drop-shadow-lg">
      <div className="flex flex-center justify-center h-full px-4">
        <div className="flex-1 max-w-xl flex flex-row justify-evenly items-center">
          <div>
            <AddButton
              onClick={() =>
                dispatch({ type: "add", date: selectedGreet, part: selectedGreet.part })
              }
            />
          </div>
          <div>
            <SubButton
              onClick={() =>
                dispatch({ type: "sub", date: selectedGreet, part: selectedGreet.part })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
