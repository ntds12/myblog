import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import FontFaceObserver from 'fontfaceobserver';

import Layout from '../components/layout';
import ParticleComponent from '../components/ParticlesCanvas/particles';

import * as BlogStyles from "./Blog.module.scss";
import shortid from 'shortid';
import { sleep } from '../utils/sleep';
import { Page } from '.';
import {
  allow,
  allowTrue
} from './blog.state';


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMM Do, YYYY")
            body{
              json
            }
          }
        }
      }
    }
  `);

  let mounted: any = useRef(false);
  let fontLoaded = false;
  let fontLoaded2 = false;
  let [render, setRender] = useState(false);


  async function checkFont() {
    while (true) {

      var font = new FontFaceObserver('Chelsea');
      var font2 = new FontFaceObserver('Rock');

      font.load().then(() => {
        if (mounted.current) {
          fontLoaded = true;
        }
      }, () => {
        console.log('object2')
      });

      font2.load().then(() => {
        if (mounted.current) {
          fontLoaded2 = true;
        }
      }, () => {
        console.log('object2')
      });

      if (fontLoaded && fontLoaded2) {

        console.log(fontLoaded, fontLoaded2);
        if (mounted.current) {
          await sleep(500);
          allowTrue();
        }


        setRender(true);
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

  return (
    <Page allow={allow}>
      <Layout>
        <div className={BlogStyles.blog_wrap}>
          <h1 className={BlogStyles.title}>My Blog</h1>
          <ol className={BlogStyles.content}>
            {data.allContentfulBlogPost.edges.map((edge: any) => {
              let body = edge.node.body.json.content[0].content[0].value;
              body = body.substr(0, body.length / 2) + "...";
              return (
                <li className={BlogStyles.post_li} key={shortid.generate() + shortid.generate()}>
                  <Link to={`/blog/${edge.node.slug}`} className={BlogStyles.the_link}>
                    <h2 className={BlogStyles.post_title}>{edge.node.title}</h2>
                    <p className={BlogStyles.body}>{body}</p>
                    <p>{edge.node.publishedDate}</p>
                  </Link>
                  <div>
                    <hr className={BlogStyles.hr} />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        <ParticleComponent />
      </Layout>

    </Page>
  );
}

export default BlogPage;