import { FunctionComponent } from "preact";
import { IndexPage } from "@/components/pages/index";
import { Header } from "@/components/templates/header";
import { APP_NAME } from "@/lib/config";
import { Footer } from "@/components/templates/footer";
import { PageLayout } from "@/components/templates/pageLayout";

export const App: FunctionComponent = () => {
  return (
    <>
      <Header title={APP_NAME} />
      <PageLayout>
        <IndexPage />
      </PageLayout>
      <Footer />
    </>
  );
};
