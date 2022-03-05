import { FunctionComponent } from "preact";

type Props = {
  onSelect?: () => void;
  options: { text: string; key: string }[];
};

export const Selector: FunctionComponent<Props> = (props) => {
  return (
    <select onSelect={props.onSelect} className="px-2 py-1 rounded">
      {props.options.map((option) => (
        <option key={option.key}>{option.text}</option>
      ))}
    </select>
  );
};
