import { FunctionComponent } from "preact";
import { IndexPage } from "@/components/pages";
import { Header } from "@/components/templates/header";
import { APP_NAME } from "@/lib/config";
import { Footer } from "@/components/templates/footer";

export const App: FunctionComponent = () => {
  return (
    <>
      <Header title={APP_NAME} />
      <main>
        <IndexPage />
      </main>
      <Footer />
    </>
  );
};
