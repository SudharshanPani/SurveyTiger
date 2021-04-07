import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.png'
import {BrowserRouter as Router , Switch, Route,Link} from 'react-router-dom'
import Menu from './Components/Menu'
import CreateSurvey from './Components/CreateSurvey';
import Published from './Components/Published';

function App() {
  const [squestions,setSquestions] = useState([])
  return (
    <div className="col-md-10 offset-md-1 col-12 text-center ">
      <Router>
      <Link to="/">
        <img className="col-md-6" src={logo} alt="logo"/>
      </Link>
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/create'>
            <CreateSurvey squestions={squestions}  setSquestions={setSquestions} />
          </Route>
          <Route exact path='/published'>
            <Published questions={squestions} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;