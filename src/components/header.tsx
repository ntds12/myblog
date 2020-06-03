import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Navbar from './Navbar/navbar';

const header = () => {


  return (
    <div>
      <Navbar />
    </div>
  )
};

export default header;
