import { FunctionComponent, JSX } from "preact";

type Props = {
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>;
};

export const AddButton: FunctionComponent<Props> = (props) => {
  return (
    <button
      className="w-6 h-6 text-center rounded-full border border-teal-400 text-teal-400 bg-white"
      onClick={props.onClick}
    >
      +
    </button>
  );
};
