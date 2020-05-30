import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Navbar from './Navbar/navbar';

const header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <div>
      <Navbar />
      {/* <Link to='/'>
        {data.site.siteMetadata.title}
      </Link> */}
      {/* <h1>{data.site.siteMetadata.author}</h1> */}
    </div>
  )
};

export default header;
