import React, {
  FC, useState, useEffect, useLayoutEffect,
} from "react";

import FontFaceObserver from "fontfaceobserver";

import Layout from "../components/layout";
import Head from "../components/head";
import Particles from "../components/ParticlesCanvas/particles";
import MainWrap from "../components/MainWrap/mainWrap";
import { sleep } from "../utils/sleep";
import Loader from "../components/Loader/loader";
import { counterForShowingKane, incrementKaneCounter } from "../components/index.state";

let count = 0;
export const Page: FC<any> = ({
  fontLoad,
  fontLoad2,
  allow,
  children
}): JSX.Element => {

  if (allow) {
    if (count < 1) {
      const pos = localStorage.getItem('scrollpos') as string;
      window.scrollTo(0, parseInt(pos));
    }
    if (document.body.clientHeight > 0) count++;
    incrementKaneCounter();
    return children;
  }
  else {
    if (counterForShowingKane < 1) {
      return <Loader fontLoad={fontLoad} fontLoad2={fontLoad2} allow={allow} />
    } else {
      return children;
    }
  }
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

        font.load().then(async () => {
          if (this.mounted) {
            for (let i = 0; i < 50; i++) {
              await sleep(1);
              this.setState({
                fontLoad: {
                  number: i,
                  self: true
                }
              });
            }
          }
        }, () => {
          console.log('object2')
        });

        font2.load().then(async () => {
          if (this.mounted) {
            for (let i = 0; i < 50; i++) {
              await sleep(1);
              this.setState({
                fontLoad2: {
                  number: i,
                  self: true
                }
              })
            }
          }
        }, () => {
          console.log('object2')
        });

        if (this.state.fontLoad.number === 49 && this.state.fontLoad2.number === 49) {

          if (this.mounted) {
            this.setState({
              allow: true
            });
          }

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
      <Page
        fontLoad={this.state.fontLoad}
        fontLoad2={this.state.fontLoad2}
        allow={this.state.allow}
      >
        <Layout>
          <Head title="Nariman Talayi" />
          <Particles />
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