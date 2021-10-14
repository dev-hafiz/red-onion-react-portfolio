import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Breakfast from './Pages/Home/Breakfast/Breakfast';
import Dinner from './Pages/Home/Dinner/Dinner';
import FoodDetail from './Pages/Home/FoodDetail/FoodDetail';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import Lunch from './Pages/Home/Lunch/Lunch';
import NavMenu from './Pages/Home/NavMenu/NavMenu';
import Shipping from './Pages/Home/Shipping/Shipping';
import SignUp from './Pages/Home/SignUp/SignUp';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

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
                      <SignUp/>
                  </Route>
                  <Route path="/breakfast">
                    <Breakfast/>
                  </Route>
                  <Route path="/lunch">
                    <Lunch/>
                  </Route>
                  <Route path="/dinner">
                    <Dinner/>
                  </Route>
                  <Route path="/singlefood/:foodId">
                      <FoodDetail/>
                  </Route>
                  <Route path="*">
                    <PageNotFound/>
                  </Route>
                  
              </Switch>
              
              <Footer/>
          </Router>
    </div>
  );
}

export default App;
