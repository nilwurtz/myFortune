import { FunctionalComponent } from "preact";

export const PageLayout: FunctionalComponent = (props) => {
  return <main className="min-h-screen">{props.children}</main>;
};
