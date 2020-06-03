import React, { FC } from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Font1 from "../styles/sharedFonts/RockSalt-Regular.ttf";
import Font2 from "../styles/sharedFonts/ChelseaMarket-Regular.ttf";

const Head: FC<any> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} >
      <meta name="description" content="This is Nariman Talayi's personal blog and portfolio." />
      <meta name="robots" content="index, follow" />
      <link
        rel="preload"
        as="font"
        href={Font1}
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={Font2}
        crossOrigin="anonymous"
      />
    </Helmet>
  );
}

export default Head;