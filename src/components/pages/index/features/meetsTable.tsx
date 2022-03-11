import { FullYear } from "@/components/atoms/fullYear";
import { EVENTS, GreetParts } from "@/lib/events";
import { meetsReducer, initialMeetsState, MeetState, GreetState } from "@/reducers/meets";
import { FunctionComponent } from "preact";
import { useReducer, useEffect } from "preact/hooks";

export const MeetsTable: FunctionComponent = () => {
  const [meets, dispatch] = useReducer(meetsReducer, initialMeetsState);

  useEffect(() => {
    dispatch({ type: "init", dates: EVENTS["4th"].dates });
  }, []);

  return (
    <div>
      {meets.meets.map((meet, i) => (
        <Meet key={i} {...meet} />
      ))}
    </div>
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
          <Greet key={i} {...greet} />
        ))}
      </div>
    </div>
  );
};

type GreetProps = {
  part: GreetParts;
  greet: GreetState;
};

const Greet: FunctionComponent<GreetProps> = (props) => {
  return (
    <div className="flex-1">
      <div className="p-2">
        <div className="text-sm text-gray-600">{props.part}部</div>
        <div className="text-right">
          <span className="text-xl">{props.greet.elected}</span>
          <span className="ml-1 text-gray-600">枚</span>
        </div>
      </div>
    </div>
  );
};
