import './App.css';
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './component/pages/Home'
import Services from "./component/pages/Services";
import Products from "./component/pages/Products";
import SignUp from "./component/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/sign-up' component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
