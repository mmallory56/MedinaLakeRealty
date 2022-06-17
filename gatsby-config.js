
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
   collectionTypes: [
    {
      singularName: 'listing',
      queryParams: {
        publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
        populate: {
          category: { populate: '*' },
          Images: '*',
          blocks: {
            populate: '*',
          },
        },
      },
    },
  ],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: `medinalake`,
    siteUrl: `https://www.medinalakerealty.com`
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, ]
};