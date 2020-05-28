import React from 'react'
import Layout from '../components/layout';
import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p><Link to="/">Head Home</Link></p>
    </Layout>
  )
}

export default NotFound;