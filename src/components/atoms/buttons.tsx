import { FunctionComponent, JSX } from "preact";

type Props = {
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>;
};

export const AddButton: FunctionComponent<Props> = (props) => {
  return <BaseButton onClick={props.onClick}>+</BaseButton>;
};

export const SubButton: FunctionComponent<Props> = (props) => {
  return <BaseButton onClick={props.onClick}>-</BaseButton>;
};

const BaseButton: FunctionComponent<Omit<JSX.HTMLAttributes<HTMLButtonElement>, "className">> = (
  props
) => {
  return (
    <button
      className="h-5 w-10 flex items-center text-center justify-center rounded-xl bg-white text-teal-400 border-2 border-teal-400 font-semibold"
      {...props}
    >
      {props.children}
    </button>
  );
};
