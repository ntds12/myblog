import React, { useEffect, useState, useRef, memo } from 'react';
import FontFaceObserver from 'fontfaceobserver';

import Layout from '../components/layout';

import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import * as PostStyles from "./PostStyles.module.scss";
import Head from '../components/head';
import ParticleComponent from '../components/ParticlesCanvas/particles';
import { sleep } from '../utils/sleep';
import { Page } from '../pages';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = (props: any) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node: any) => {
        const alt = node.data.target.fields.title['en-US'];
        const url = node.data.target.fields.file['en-US'].url;
        return <img alt={alt} src={url} />
      }
    }
  }

  let mounted: any = useRef(false);
  let path = props.path;
  path = path.split("/");
  path = path[path.length - 1]
  return (

    <Layout>
      <Head title={path} />
      <div className={PostStyles.post_wrapper}>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p className={PostStyles.date}>{props.data.contentfulBlogPost.publishedDate}</p>
        <hr />
        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
      </div>
      <ParticleComponent />
    </Layout>
  )
}

export default memo(Blog);