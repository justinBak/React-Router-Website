import Movies from "./Movies";

function MoviesPage(props) {
  return(
    <div className='d-flex justify-content-center'>
      <Movies
        image= "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" 
        title="Interstellar"
        description="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        year="2014"
        genre="Sci-Fi Adventure Drama"
      />
    </div>
  )
}

export default MoviesPage;