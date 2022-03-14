import { createContext, FunctionComponent } from "preact";
import { MeetsTable } from "@/components/pages/index/features/meetsTable";
import { Action, initialMeetsState, meetsReducer, MeetsState } from "@/reducers/meets";
import { useMeets } from "@/hooks/useMeets";
import { StateUpdater, useState } from "preact/hooks";
import { EventDate, GreetParts } from "@/lib/events";
import { MeetsButtons } from "@/components/pages/index/features/meetsButtons";

// eslint-disable-next-line no-unused-vars
type Dispatch = (_: Action) => void;
type SelectedGreet = EventDate & { part: GreetParts };
type MeetsTableContextType = {
  selectedGreet: SelectedGreet | null;
  setSelectedGreet: StateUpdater<SelectedGreet | null>;
  meets: MeetsState;
  dispatch: Dispatch;
};
export const MeetsTableContext = createContext<MeetsTableContextType>({
  selectedGreet: null,
  setSelectedGreet: () => {},
  meets: initialMeetsState,
  dispatch: () => {},
});

export const IndexPage: FunctionComponent = () => {
  const [meets, dispatch] = useMeets(meetsReducer, initialMeetsState);
  const [selectedGreet, setSelectedGreet] = useState<SelectedGreet | null>(null);

  return (
    <MeetsTableContext.Provider value={{ selectedGreet, setSelectedGreet, meets, dispatch }}>
      <div className="px-2">
        <div className="flex flex-center justify-center">
          <div className="flex-1 max-w-xl mb-16">
            <div className="py-4">
              <small>
                該当の部を選択し、+、-で枚数を変更します。変更するたび、データが保存されます。
                <br />
                このアプリケーションのデータは今閲覧中のブラウザ内に保存され、第三者に送信されることはありません。
              </small>
            </div>
            <MeetsTable />
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 left-0">
        <MeetsButtons />
      </div>
    </MeetsTableContext.Provider>
  );
};
