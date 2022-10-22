import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import SignIn from "./components/account/Login";
import SignUp from "./components/account/Register";
import Panel from "./components/panel/Panel"
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/panel" element={<Panel />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
