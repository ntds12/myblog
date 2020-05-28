import React, { FC } from "react";
import Layout from '../components/layout';
import Head from "../components/head";

const IndexPage: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Head title="home" />
      <h1>hello</h1>
    </Layout>
  );
}

export default IndexPage;