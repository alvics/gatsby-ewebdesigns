## Working progress
### View demo [https://naughty-hawking-c829ad.netlify.com/] 
## Adding gatsby-source-filesystem (plugin)

Gives graphQL an addition 2 new queries

1. file()
2. allFile())

```bash
npm install --save gatsby-source-filesystem
```

Adding file path for a query (file path for images folder)

```javascript
   {
       resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
   },

```

```
query {
  allFile(filter: { sourceInstanceName: {eq: "images"} }) {
    edges {
      node {
        relativePath
      }
    }
  }
}

```

import { useStaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'

```javascript
const data = useStaticQuery(graphql`
  {
    pexels: file(relativePath: { eq: "index/pexels.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1980) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
console.log(data)
const image = data.pexels
```

```javascript
// use image
<Img fluid={image.childImageSharp.fluid} />
```

### Parser for MD files

```
npm install --save gatsby-transformer-remark
```

Gives graphQL an addition 2 new queries

1. markdownRemark() - fetch individual post
2. allMarkdownRemark() fetching list of posts

Adding images

```
npm install --save gatsby-remark-images gatsby-plugin-sharp
```

## Contentful CMS

graphQL query

```
query {
  allContentfulBlogPost (
    sort:{
      fields: publishedDate,
      order: DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishedDate(formatString: "MMMM Do, YYYY")
        body {
          json
        }
      }
    }
  }
}
```

Parse the json from contentful

```
npm i @contentful/rich-text-react-renderer
```

add import to component

```javascript
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
```

## SEO

SSR data added to components, e.g. title, meta attributes, etc.

```
npm install --save gatsby-plugin-react-helmet react-helmet
```
