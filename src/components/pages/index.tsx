import { FunctionComponent } from "preact";
import { Selector } from "@/components/atoms/selector";

export const IndexPage: FunctionComponent = () => {
  const options = [
    { text: "aa", key: "aa" },
    { text: "aa", key: "aa" },
    { text: "aa", key: "aa" },
    { text: "aa", key: "aa" },
  ];
  return (
    <div>
      <Selector options={options} />
    </div>
  );
};
