import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import NavMenu from './Pages/Home/NavMenu/NavMenu';
import Shipping from './Pages/Home/Shipping/Shipping';
import SignUp from './Pages/Home/SignUp/SignUp';


function App() {
  return (
    <div className="">
          <Router>
            <NavMenu/>
              <Switch>
                  <Route exact path ="/">
                     <Home/>
                  </Route>
                  <Route path="/home">
                    <Home/>
                  </Route>
                  <Route path="/shipping">
                    <Shipping/>
                  </Route>
                  <Route path="/login">
                    <Login/>
                  </Route>
                  <Route path="/signup">
                      <SignUp></SignUp>
                  </Route>
              </Switch>
          </Router>
    </div>
  );
}

export default App;
