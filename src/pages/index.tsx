import React, { FC } from "react";

import Layout from '../components/layout';
import Head from "../components/head";
import Particles from "../components/ParticlesCanvas/particles";
import Main from "../components/Main/main";
import Skills from "../components/Skills/skills";
import Glitch from "../components/Glitch/glitch";
import Menu from "../components/Navbar/Menu/menu";

const IndexPage: FC = (): JSX.Element => {
  return (
    <Layout>
      <Head title="home" />
      <Particles />
      <Main />
      <Skills />
      <Glitch />
    </Layout>
  );
}

export default IndexPage;