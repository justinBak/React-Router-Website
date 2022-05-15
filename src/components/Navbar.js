import {BrowserRouter as Router, Link} from 'react-router-dom';
import LoginButton from './LoginPage';

function Navbar(props) {
  return(
    <div class='d-flex justify-content-center'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">Justin's Movies</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/" className="nav-link">About</Link>
            </li>
            <LoginButton login='Justin'/>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;