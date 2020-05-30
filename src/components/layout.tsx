import React from 'react';

import Header from './header';
import '../styles/index.scss';

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;

