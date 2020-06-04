import React, {
  FC, memo,
} from "react";

import FontFaceObserver from "fontfaceobserver";

import Layout from "../components/layout";
import Head from "../components/head";
import Particles from "../components/ParticlesCanvas/particles";
import MainWrap from "../components/MainWrap/mainWrap";

class IndexPage extends React.Component<any, any> {

  mounted = true;

  constructor(props: any) {
    super(props)

    this.state = {
      fontLoad: false,
      fontLoad2: false,
      allow: false
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <Layout>
        <Head title="Nariman Talayi" />
        <Particles />
        <MainWrap />
        <span style={{
          color: "white",
          display: "block",
          textAlign: "center",
          fontFamily: "Chelsea",
          wordBreak: "break-word"
        }}>Contact me at:<br /> ntnirvana91@gmail.com</span>

      </Layout>

    );
  }

}
export default IndexPage;