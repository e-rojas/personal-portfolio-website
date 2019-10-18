import React from 'react'
import { graphql,Link } from 'gatsby'
import Header from '../components/header';
import "../components/blog-post.css"
const Template = ({ data, pageContext }) => {
    // console.log(data);
    const {markdownRemark} = data
  
    const {next,prev} = pageContext
    const title = markdownRemark.frontmatter.title
    const html = markdownRemark.html
    return (
        <div  id="main" className="container-fluid ">
            <Header />
            <div style={{minHeight:100,marginTop:80}} className="row  ">
                <div id="display" className="w-50 m-auto  ">
                    <h1>{title}</h1>
                    <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />  
                    {next && <Link className="mr-5" to={next.frontmatter.path}>NEXT</Link>}
                     {prev && <Link to={prev.frontmatter.path}>PREV</Link>}
                </div>    
            </div>
           
    </div>
       
    )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
     
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        title
      }
    }
  }
`
export default Template


