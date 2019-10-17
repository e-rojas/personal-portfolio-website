import React from 'react';
import { graphql } from 'gatsby'
import "../components/blog.css"
import Header from '../components/header';
import BlogHeader from '../components/blog-header'
//import BlogsDisplay from '../components/blogs-display'
const blog = ({data}) => {
    const { edges } = data.allMarkdownRemark
    console.log(edges);
    return (
        <div className="container-fluid ">
            <Header></Header>
           <div className="row">
                <aside id="lft-blg-aside" className="col-lg-6 vh-100 ">
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
                                    <div className="col-4">
                                        <img style={{ width: 150, height: 150 }} src={frontmatter.image} className="img-thumbnail" alt="profile"></img><br/>
                                        <span>{frontmatter.title}</span><br/>
                                        <span>{frontmatter.date} </span>
              
                                    </div>
                                    <div className="col-8">
               
                                        <i className="fab fa-react"></i> <i className="fab fa-node"></i>
                                        <i className="fab fa-js-square"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>
                                            Single-page app built on React.js that allows users to book,
                                            edit or cancel interviews for each day of the week.
                </p>
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
        image
        excerpt
      }
      timeToRead
    }
  }
}
}

`

export default blog;
