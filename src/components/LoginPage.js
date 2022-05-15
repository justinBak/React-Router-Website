import {BrowserRouter as Router, useNavigate} from 'react-router-dom';
import "../css/Movies.css";

function LoginButton(props) {

  let navigate = useNavigate();
  function handleButton(event) {
    // We want to switch pages to go to the HomePage
    navigate("/", {replace:false, state: {login: props.login}});
  }
  return <button onClick={handleButton}>Push</button>;
}

export default LoginButton;