import React from 'react';

import Header from './header';
import '../styles/index.scss';

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isMount: false
    };
  }


  componentDidMount() {
    this.setState({ isMount: true })
  }

  componentWillUnmount() {
    this.setState({ isMount: true });
  }

  render() {
    return (
      <div className="layout">
        {this.state.isMount &&
          (
            <>
              <Header />
              {this.props.children}
            </>
          )
        }
      </div>
    );
  }
}

export default Layout;

