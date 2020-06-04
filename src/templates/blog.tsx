import React, { useEffect, useState, useRef } from 'react';
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
  let fontLoaded = false;
  let [fontLoadedState, setFontLoadedState] = useState({});
  let [fontLoadedState2, setFontLoadedState2] = useState({});

  let fontLoaded2 = false;
  let [allow, setAllow]: any = useState(false);

  async function checkFont() {
    while (true) {

      var font = new FontFaceObserver('Chelsea');
      var font2 = new FontFaceObserver('Rock');

      font.load().then(async () => {
        if (mounted.current) {
          fontLoaded = true;
          for (let i = 0; i < 50; i++) {
            await sleep(1);
            setFontLoadedState({ number: i, self: true });
          }
        }
      }, () => {
        console.log('object2')
      });

      font2.load().then(async () => {
        if (mounted.current) {
          fontLoaded2 = true;
          for (let i = 0; i < 50; i++) {
            await sleep(1);
            setFontLoadedState2({ number: i, self: true });
          }
        }
      }, () => {
        console.log('object2')
      });

      if (fontLoaded && fontLoaded2) {

        if (mounted.current) {
          await sleep(500);
          setAllow(true);
        }

        break;
      }

      await sleep(500);
    }
  }

  useEffect(() => {
    mounted.current = true;
    checkFont();

    return function () {
      mounted.current = false;
    }
  }, [])


  let path = props.path;
  path = path.split("/");
  path = path[path.length - 1]
  return (
    <Page
      fontLoad={fontLoadedState}
      fontLoad2={fontLoadedState2}
      allow={allow}

    >
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
    </Page>
  )
}

export default Blog;