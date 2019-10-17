/* import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
const TitleAndDescription = ({ data }) => {
    const title = data.site.siteMetadata.title
    const description = data.site.siteMetadata.description

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:40
            
        }}
        >
            <h2>{title}</h2>
            <p>{description}</p>
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
                }
            }
        }
        `}
            render={data => <TitleAndDescription data={data} />
            } />
    )
}

export default BlogHeader */