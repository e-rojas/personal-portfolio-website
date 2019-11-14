import React,{useState} from "react"

export default function SearchBar(props) {
    const [title, setTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(title, movieYear)
        setTitle('')
        setMovieYear('')
        console.log(title)
    };
    
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0px auto",
        maxWidth: "1200px",
       
      }}
      className="col-12 p-5  "
    >
      <form onSubmit={handleSubmit} className=" form-row ">
        <div className="col ">
          <input
            type="text"
            className="form-control "
            placeholder="Movie Title"
                      name='searchTitle'
                      value={title}
                      onChange={event=> setTitle(event.target.value)}
          />
        </div>
       
        <div className="col ">
          <button type="submit" className="btn btn-outline-dark btn-primary">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
