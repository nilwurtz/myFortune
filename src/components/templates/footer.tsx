import { FunctionComponent } from "preact";

export const Footer: FunctionComponent = () => {
  return (
    <footer>
      <div className="container py-8 mx-auto bg-gray-100 flex justify-center">
        <div className="contents">
          <small className="text-gray-400">
            created by <a className="text-blue-300">@apollo46g</a>
          </small>
        </div>
      </div>
    </footer>
  );
};
