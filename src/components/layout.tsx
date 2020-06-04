import React from 'react';

import FontFaceObserver from 'fontfaceobserver';

import Header from './header';
import '../styles/index.scss';
import { firstFontLoaded, secondFontLoaded, firstFont, secondFont } from './index.state';
import { sleep } from '../utils/sleep';
import Loader from './Loader/loader';

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isMount: false,
      render: false
    };
  }

  async fontCheck() {
    var font = new FontFaceObserver('Chelsea');
    var font2 = new FontFaceObserver('Rock');

    while (true) {
      font.load().then(async () => {
        firstFontLoaded();
      }, () => {
        console.log('object2')
      });

      font2.load().then(async () => {
        secondFontLoaded();
      }, () => {
        console.log('object2')
      });
      if (firstFont && secondFont) {
        this.setState({ render: true })
        break;
      }

      await sleep(500);
    }
  }


  componentDidMount() {
    this.setState({ isMount: true });
    this.fontCheck();
  }

  componentWillUnmount() {
    this.setState({ isMount: true });
  }

  render() {
    const jsx = firstFont && secondFont ? <div>
      <Header />
      {this.props.children}
    </div> : <Loader />;

    return (
      <div className="layout">
        {this.state.isMount &&
          jsx
        }
      </div >
    );
  }
}

export default Layout;

