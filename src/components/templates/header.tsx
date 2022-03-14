import { FunctionComponent } from "preact";

type Props = {
  title: string;
};

export const Header: FunctionComponent<Props> = (props) => {
  return (
    <header>
      <div className="px-4 py-2 bg-teal-400 drop-shadow-lg">
        <h1 className="text-white font-semibold">{props.title}</h1>
      </div>
    </header>
  );
};
