import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Collection from './Collection';
import MoviesPage from './MoviesPage';


function MyRoutes(props){
    return (
      <Router>
        <div>
          <Navbar/>
          <hr/>
          <Routes>
            <Route path="/" element={<Collection/>}/>
            <Route path="/moviespage" element={<MoviesPage/>}/>
          </Routes>
        </div>
      </Router>
    );
  }

  export default MyRoutes;