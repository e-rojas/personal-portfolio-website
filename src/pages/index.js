import React from "react"
import Layout from "../components/layout"
import Header from '../components/header';
import Jumbotron from '../components/jumbotron';
import About from '../components/about';
import Main from '../components/main';
export default () => (
    <Layout>
     
        <Header></Header>
        <Jumbotron></Jumbotron>
        <About></About>
        <Main></Main>
          
    </Layout>
  )