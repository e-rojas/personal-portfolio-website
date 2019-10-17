import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
const TitleAndDescription = ({ data }) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description
    const author = data.site.siteMetadata.author

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:80
            
        }}
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <h5>By {author}</h5>
        </div>
    )
}

const BlogHeader = () => {
    return (
        <StaticQuery
            query={graphql`
        query {
            site{
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
        `}
            render={data => <TitleAndDescription data={data} />
            } />
    )
}

export default BlogHeader