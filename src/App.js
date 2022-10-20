import NavBar from "./components/NavBar";
import TestApi from "./components/TestApi";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/account/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={TestApi} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
