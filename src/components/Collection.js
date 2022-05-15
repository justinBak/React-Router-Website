import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import Movies from "./Movies";
import "../css/Movies.css";
import LoginButton from './LoginPage';

function Collection() {
  const {state} = useLocation();
  let value = "not logged in";
  if(state) {
    value = "Login:" + state.login;
  }

  return (
    <div>
      <div className="row">
      <div className='login-txt-clr'>{value}</div>
        <div className="header-container">
          <h1>Justin<span className="quote">'</span>s Favorite Movies</h1>
        </div>
        <div className='center'>
          <Link className='link' to='/moviespage'>
            <Movies
              image= "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" 
              title="Interstellar"
              description="A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
              year="2014"
              genre="Sci-Fi Adventure Drama"
            />
          </Link>
          <Link className='link' to='/'>
            <Movies 
              image= "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
              title="Pulp Fiction"
              description="The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
              year="1994"
              genre="Crime Drama"
            />
          </Link>
          <Link className='link' to='/'>
            <Movies
              image= "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg" 
              title="Django Unchained"
              description="With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi."
              year="2012"
              genre="Western Drama"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Collection;