import NavBar from "./components/NavBar";
import TestApi from "./components/TestApi";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import SignIn from "./components/account/Login";
import SignUp from "./components/account/Register";
import Panel from "./components/panel/Panel"

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<TestApi />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/panel" element={<Panel />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
