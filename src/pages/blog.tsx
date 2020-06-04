import React, { useEffect, useRef, useState, memo } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import FontFaceObserver from 'fontfaceobserver';

import Layout from '../components/layout';
import ParticleComponent from '../components/ParticlesCanvas/particles';

import * as BlogStyles from "./Blog.module.scss";
import shortid from 'shortid';


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


  return (
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

  );
}

export default memo(BlogPage);