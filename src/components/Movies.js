import '../css/Movies.css';

function Movies(props) {
  return (
      <div className="col-md-4 col">
        <div className='image-container'>
          <img src={props.image} className="movie-img"/>
        </div>
        <h3>{props.title}</h3>
        <p><span>Description:</span> {props.description}</p>
        <p><span>Year:</span> {props.year}</p>
        <p><span>Genre:</span> {props.genre}</p>
      </div>
  )
}

export default Movies;