import { EventDate } from "@/lib/events";
import { FunctionalComponent } from "preact";

type Props = EventDate;

export const FullYear: FunctionalComponent<Props> = (props) => {
  return (
    <span className="text-sm">
      <span>{props.year}年</span>
      <span>{props.month}月</span>
      <span>{props.date}日</span>
      <span>（{props.day}）</span>
    </span>
  );
};
