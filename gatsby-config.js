const config = require('./config');

module.exports = {
  // pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    description: `Jtography Portfolio`,
    siteUrl: 'https://gifted-murdock-5495de.netlify.com/',
    author: `Grant Best`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
