## Adding gatsby-source-filesystem (plugin)

Gives graphQL an addition 2 new queries

1. file()
2. allFile())

```bash
npm install --save gatsby-source-filesystem
```

Adding file path for query

```javascript
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
```

Playground DOCS view: allFile() => edges => node
gatsby.config

graphQL list all posts

```

query {
  allFile{
      edges{
        node{
          name
          extension
          dir
        }
      }
  }
}

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
