import { LOCAL_STORAGE_KEY } from "@/lib/config";
import { EVENTS } from "@/lib/events";
import { meetsReducer, MeetsState } from "@/reducers/meets";
import { useEffect, useReducer } from "preact/hooks";

export const useMeets = (reducer: typeof meetsReducer, initialMeetsState: MeetsState) => {
  const [meets, dispatch] = useReducer(reducer, initialMeetsState);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (item) {
        const state = JSON.parse(item);
        if (state["meets"].length === 0) throw Error("initialMeetsState saved to localStorage");
        dispatch({ type: "load", state });
      } else {
        dispatch({ type: "init", dates: EVENTS["4th"].dates });
      }
    } catch (e) {
      console.log(e);
      dispatch({ type: "init", dates: EVENTS["4th"].dates });
    }
  }, []);

  useEffect(() => {
    if (meets.meets.length === 0) return;
    const stateString = JSON.stringify(meets);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, stateString);
  }, [meets]);

  return [meets, dispatch] as const;
};
