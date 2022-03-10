import { EVENTS } from "@/lib/events";
import { initialMeetsState, meetsReducer } from "@/reducers/meets";
import { FunctionComponent } from "preact";
import { useEffect, useReducer } from "preact/hooks";
import { FullYear } from "@/components/atoms/fullYear";

export const IndexPage: FunctionComponent = () => {
  const [meets, dispatch] = useReducer(meetsReducer, initialMeetsState);

  useEffect(() => {
    dispatch({ type: "init", dates: EVENTS["4th"].dates });
  }, []);

  return (
    <div>
      <section>
        <div className="py-8 px-4">
          {meets.meets.map((meet) => (
            <div>
              <FullYear
                year={meet.date.year}
                month={meet.date.month}
                day={meet.date.day}
                date={meet.date.date}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
