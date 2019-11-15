import React from "react"
import Header from "../components/header"
import Carousel from "../components/movies/carousel"
export default function Movies(props) {
  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      <Header />
      <Carousel posters={props.posters} />
      {/*  <Header />
      <Carousel posters={props.posters} />
      <Search handleSearch={handleSearch} /> 
      <Display filmInfo={filmInfo} />*/}
    </div>
  )
}

//Default props to fetch imgs
Movies.defaultProps = {
  posters: [
    {
      alt: "poster 1",
      img:
        "https://haintheme.com/demo/html/bustter/images/uploads/mv-item1.jpg",
    },
    {
      alt: "poster 2",
      img:
        "https://haintheme.com/demo/html/bustter/images/uploads/mv-item2.jpg",
    },
    {
      alt: "poster 3",
      img:
        "https://haintheme.com/demo/html/bustter/images/uploads/mv-item3.jpg",
    },
    {
      alt: "poster 4",
      img:
        "https://haintheme.com/demo/html/bustter/images/uploads/mv-item4.jpg",
    },
    {
      alt: "poster 5",
      img:
        "https://haintheme.com/demo/html/bustter/images/uploads/mv-item5.jpg",
    },
    {
      alt: "poster 6",
      img:
        "https://haintheme.com/demo/html/bustter/images/uploads/mv-item6.jpg",
    },
    {
      alt: "poster 7",
      img:
        "https://haintheme.com/demo/html/bustter/images/uploads/mv-item7.jpg",
    },
    {
      alt: "poster 8",
      img:
        "https://haintheme.com/demo/html/bustter/images/uploads/mv-item8.jpg",
    },
    {
      alt: "poster 9",
      img: "https://haintheme.com/demo/html/bustter/images/uploads/slider1.jpg",
    },
  ],
}
