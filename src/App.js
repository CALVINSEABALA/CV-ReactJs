import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import About from "./components/About";
import Profile from "./components/Profile";
import UserDetails from './components/UserDetails'
import NavBar from "./components/NavBar";
import Details from './components/details';


function App() {
  return (
      <Router>
          <NavBar/>
          <div className="App" style={{backgroundImage:"url(/assets/bg.webp)",
              backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

        <Switch >
            <Route path={'/About'}  exact component={About}/>
            <Route path={'/Profile'}  exact component={Profile}/>
            <Route path={'/UserDetails'} exact component={UserDetails}/>
            <Route path={'/'} exact component={Details}/>
        </Switch>

    </div>
      </Router>
  );
}

export default App;
