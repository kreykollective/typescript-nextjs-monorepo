import Layout from "../components/Layout";

import Bar from "@scope/ui";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <div>
      Imported modules from another workspace:
      <Bar />
    </div>
    <div>Imported modules from another workspace ts:</div>
  </Layout>
);

export default IndexPage;
