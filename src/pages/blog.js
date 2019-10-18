import React from 'react';
import { graphql,Link } from 'gatsby'
import "../components/blog.css"
import Header from '../components/header';
import BlogHeader from '../components/blog-header'
//import BlogsDisplay from '../components/blogs-display'
import Img from 'gatsby-image'
const blog = ({data}) => {
    const { edges } = data.allMarkdownRemark
    // console.log(edges);
    return (
        <div className="container-fluid vh-100 ">
            <Header></Header>
           <div className="row ">
                <aside id="lft-blg-aside" className="col-lg-6  ">
                    <BlogHeader />
               </aside>
                <aside id="rgt-blg-aside" className="col-lg-6 pt-5 ">
                  {/*   {edges.map(edge => {
                        const { frontmatter } = edge.node
                        return <BlogsDisplay key={frontmatter.path}  />
                  })} */}
                    
                    {edges.map(edge => {
                        const { frontmatter } = edge.node
                        return (
                            <div key={frontmatter.path} className="card">
                                <div className="row">
                                    <div className="col">
                                    <Img  style={{ width: 300 }} fixed={frontmatter.image.childImageSharp.fixed} />
                                       <br/>
                                        <h4>{frontmatter.title}</h4><br/>
                                        <span>{frontmatter.date} </span>
              
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p> {frontmatter.excerpt} </p><br/>
                                        <Link to={frontmatter.path} >Read more...</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
               </aside>
           </div>
        </div>
    );
}




//query
export const blogsDisplay = graphql`
query blogsDisplay {

allMarkdownRemark(
    
    sort:{
        order:DESC,
        fields: [frontmatter___date]
    }
) {
  edges {
    node {
      frontmatter {
        title
        path
        date
        author
        image {
            childImageSharp {
                fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
            }
          }
        excerpt
      }
      timeToRead
    }
  }
}
}

`

export default blog;
