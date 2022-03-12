import { AddButton, SubButton } from "@/components/atoms/buttons";
import { FullYear } from "@/components/atoms/fullYear";
import { useMeets } from "@/hooks/useMeets";
import { EventDate, GreetParts } from "@/lib/events";
import { meetsReducer, initialMeetsState, MeetState, GreetState, Action } from "@/reducers/meets";
import { createContext, FunctionComponent } from "preact";
import { useContext } from "preact/hooks";

// eslint-disable-next-line no-unused-vars
type Dispatch = (_: Action) => void;
const DispatchContext = createContext<Dispatch>(() => {});

export const MeetsTable: FunctionComponent = () => {
  const [meets, dispatch] = useMeets(meetsReducer, initialMeetsState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <div>
        {meets.meets.map((meet, i) => (
          <Meet key={i} {...meet} />
        ))}
      </div>
    </DispatchContext.Provider>
  );
};

type MeetProps = MeetState;

const Meet: FunctionComponent<MeetProps> = (props) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="py-2">
        <FullYear
          year={props.date.year}
          month={props.date.month}
          day={props.date.day}
          date={props.date.date}
        />
      </div>
      <div className="flex flex-row">
        {props.greets.map((greet, i) => (
          <Greet key={i} date={props.date} {...greet} />
        ))}
      </div>
    </div>
  );
};

type GreetProps = {
  date: EventDate;
  part: GreetParts;
  greet: GreetState;
};

const Greet: FunctionComponent<GreetProps> = (props) => {
  const dispatch = useContext(DispatchContext);

  return (
    <div className="flex-1">
      <div className="p-2">
        <div className="text-sm text-gray-600">{props.part}部</div>
        <div className="mb-1 text-right">
          <span className="text-xl">{props.greet.elected}</span>
          <span className="ml-1 text-sm text-gray-600">枚</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-1">
            <AddButton
              onClick={() => dispatch({ type: "add", part: props.part, date: props.date })}
            />
          </div>
          <div>
            <SubButton
              onClick={() => dispatch({ type: "sub", part: props.part, date: props.date })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
