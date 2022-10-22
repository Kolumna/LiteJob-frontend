import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/account/Login";
import SignUp from "./components/account/Register";
import Panel from "./components/panel/Panel";
import Content from "./components/Content";
import { useEffect } from "react";
import Oferta from "./components/Oferta";
import { useState } from "react";

const App = () => {
  const [ofertaData, setOfertaData] = useState([{}]);
  const OfertaDane = [];

  useEffect(() => {
    fetch("/oferty")
      .then((res) => res.json())
      .then((data) => {
        setOfertaData(data);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/panel" element={<Panel />} />
          {ofertaData.map((element) => (
            <Route
              exact
              path={`/${element._id}`}
              element={<Oferta dane={element} />}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
