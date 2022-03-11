import { FunctionComponent } from "preact";
import { MeetsTable } from "@/components/pages/index/features/meetsTable";

export const IndexPage: FunctionComponent = () => {
  return (
    <div>
      <section>
        <div className="py-8 px-2">
          <MeetsTable />
        </div>
      </section>
    </div>
  );
};
