/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Hello there',
    author: 'Nariman Talayi'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "bydmoa63zrog",
        accessToken: "HTQRPrEv4DGzKqaOVRM2NqenxMx2yUOK29lSJjTFEUE"
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`
  ],
}
