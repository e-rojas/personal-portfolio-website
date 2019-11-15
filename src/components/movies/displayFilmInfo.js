import React from 'react'

export default function DisplayFilmInfo(props) {
    console.log(props.filmInfo.Title)
    return (
        <div  style={{
        display: "flex",
        flexDirection: "row",
        margin: "0px auto",
        maxWidth: "1200px",
       
      }} className="row  ">
            <div className="col-lg-8 text-white  ">
                <div className="col">
                <span>Title: {props.filmInfo.Title} </span>
                <span>Year: {props.filmInfo.Year} </span>
                <span>Rated: {props.filmInfo.Rated} </span><br/>
                <span>Year Released:{props.filmInfo.Released} </span>
                <span>Runtime: {props.filmInfo.Runtime} </span>
                </div>
                <div className="col">
                    <span>Actors: {props.filmInfo.Actors} </span><br/>
                    <span>Awards: {props.filmInfo.Awards} </span>
                    <span>Director: {props.filmInfo.Director} </span>
                    <span>Genre:{props.filmInfo.Genre} </span>
                    <span>Language: {props.filmInfo.Language} </span>
                </div>
                <div className="col">
                    <span>Plot: {props.filmInfo.Plot} </span>
                </div>
                <div className="col">
                    <span>Rated: {props.filmInfo.Rated} </span><br/>
                    <span>Writer(s): {props.filmInfo.Writer} </span>
                </div>
            </div>
            <div className="col-lg-4 text-center ">
                <img style={{width:'300px'}}  alt='none' src={props.filmInfo.Poster} />
            </div>
       </div>
    )
}
