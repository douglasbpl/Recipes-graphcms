module.exports = {
  plugins: [
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `PT Sans`,
        
      ],
      display: 'swap'
    }
  }
]
,
plugins: [`gatsby-plugin-react-helmet`],
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckupxtklt0jzg01xu7l1rgnv8/master",
      },
    },
  ],
}
