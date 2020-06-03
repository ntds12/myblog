import React, {
  FC,
  useEffect,
  useState,
  useLayoutEffect
} from "react";

import FontFaceObserver from "fontfaceobserver";

import Layout from "../components/layout";
import Head from "../components/head";
import Particles from "../components/ParticlesCanvas/particles";
import MainWrap from "../components/MainWrap/mainWrap";
import Glitch from "../components/Glitch/glitch";
import { sleep } from "../utils/sleep";

export const Page: FC<any> = ({ allow, children }): JSX.Element => {
  const jsx = allow && (
    children
  );
  return jsx;
}

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

  async componentDidMount() {
    if (this.mounted) {
      while (true) {

        var font = new FontFaceObserver('Chelsea');
        var font2 = new FontFaceObserver('Rock');

        font.load().then(() => {
          if (this.mounted) {
            this.setState({ fontLoad: true });
          }
        }, () => {
          console.log('object2')
        });

        font2.load().then(() => {
          if (this.mounted) {
            this.setState({ fontLoad2: true })
          }
        }, () => {
          console.log('object2')
        });

        if (this.state.fontLoad && this.state.fontLoad2) {

          if (this.mounted) {
            this.setState({
              allow: true
            });
          }
          console.log('object')

          break;


        }


        await sleep(500);

      }
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <Page allow={this.state.allow} >
        <Layout>
          <Head title="Nariman Talayi" />
          <Particles />
          <Glitch />
          <MainWrap />
          <span style={{
            color: "white",
            display: "block",
            textAlign: "center",
            fontFamily: "Chelsea"
          }}>Contact me at:<br /> ntnirvana91@gmail.com</span>
        </Layout>
      </Page >
    );
  }

}
export default IndexPage;