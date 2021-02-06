import React from "react"
import SEO from '../components/SEO';
import Header from '../components/header';
import Jumbotron from '../components/index/jumbotron';
import About from '../components/index/about'
import Skills from '../components/index/Skills'
/* import About from '../components/about';
import Main from '../components/main';
import SEO from '../components/SEO'; */
/* export default () => (
    <Layout>
        <SEO />
        <Header></Header>
        <Jumbotron></Jumbotron>
        <About></About>
        <Main></Main>
          
    </Layout>
  ) */

  export default () => (
    <div className="container-fluid p-0">
      <SEO />
      <Header/>
      <Jumbotron />
      <About />
      <Skills />
    </div>
  )