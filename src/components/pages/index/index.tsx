import { createContext, FunctionComponent } from "preact";
import { MeetsTable } from "@/components/pages/index/features/meetsTable";
import { Action, initialMeetsState, meetsReducer, MeetsState } from "@/reducers/meets";
import { useMeets } from "@/hooks/useMeets";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import { EventDate } from "@/lib/events";

// eslint-disable-next-line no-unused-vars
type Dispatch = (_: Action) => void;
type MeetsTableContextType = {
  selectedDate: EventDate | null;
  setSelectedDate: StateUpdater<EventDate | null>;
  meets: MeetsState;
  dispatch: Dispatch;
};
export const MeetsTableContext = createContext<MeetsTableContextType>({
  selectedDate: null,
  setSelectedDate: () => {},
  meets: initialMeetsState,
  dispatch: () => {},
});

export const IndexPage: FunctionComponent = () => {
  const [meets, dispatch] = useMeets(meetsReducer, initialMeetsState);
  const [selectedDate, setSelectedDate] = useState<EventDate | null>(null);

  return (
    <MeetsTableContext.Provider value={{ selectedDate, setSelectedDate, meets, dispatch }}>
      <div className="flex flex-center justify-center">
        <div className="flex-1 max-w-xl">
          <section>
            <div className="py-8 px-2">
              <MeetsTable />
            </div>
          </section>
        </div>
      </div>
    </MeetsTableContext.Provider>
  );
};
