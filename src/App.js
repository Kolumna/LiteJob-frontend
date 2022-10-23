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
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PasswordForgot from "./components/account/PasswordForgot";
import UpdateProfile from "./components/account/UpdateProfile";
import Dodawanie from "./components/panel/Dodawanie";
import TwojeOgloszenia from "./components/panel/TwojeOgloszenia";
import EdycjaOgloszenia from "./components/panel/EdycjaOgloszenia"

const App = () => {
  const [ofertaData, setOfertaData] = useState([{}]);

  useEffect(() => {
    fetch("/oferty")
      .then((res) => res.json())
      .then((data) => {
        setOfertaData(data);
      });
  }, []);

  // const [userData, setUserData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data);
  //     });
  // }, []);

  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/login" element={<SignIn />} />
          {ofertaData.map((element, i) => (
            <Route
              key={i}
              exact
              path={`/${element._id}`}
              element={<Oferta dane={element} />}
            />
          ))}
        </Routes>
        <AuthProvider>
          <Routes>
            <Route exact path="/panel" element={<PrivateRoute />}>
              <Route exact path="/panel" element={<Panel />} />
            </Route>
            <Route exact path="/edycja-profilu" element={<PrivateRoute />}>
              <Route exact path="/edycja-profilu" element={<UpdateProfile />} />
            </Route>
            <Route exact path="/dodaj-ogloszenie" element={<PrivateRoute />}>
              <Route exact path="/dodaj-ogloszenie" element={<Dodawanie />} />
            </Route>
            <Route exact path="/twoje-ogloszenia" element={<PrivateRoute />}>
              <Route exact path="/twoje-ogloszenia" element={<TwojeOgloszenia />} />
            </Route>
            <Route exact path="/edycja-ogloszenia" element={<PrivateRoute />}>
              <Route exact path="/edycja-ogloszenia" element={<EdycjaOgloszenia />} />
            </Route>
            <Route exact path="/register" element={<SignUp />} />
            <Route
              exact
              path="/odzyskanie-hasla"
              element={<PasswordForgot />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;
