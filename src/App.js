import React, { useState, useEffect, useContext } from "react";

import "./App.css";
import Nav from "./component/nav";
import { BrowserRouter as Router } from "react-router-dom";
import { FilmContext } from "./component/contexts/FilmContext";
import { ajout, signUp } from "./firebase";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import DuMoment from "./component/doMoment";
import Populaire from "./component/populaire";
import Home from "./component/home";
import MieuxNotes from "./component/mieuxNotes";
import Favoris from "./component/favoris";
import Avenir from "./component/avenir";
import Details from "./component/details";
import NotFound from "./component/notFound";

function App() {
  const [favoritMovies, setFavoritMovies] = useState([]);
 // signUp("ines2@ines.com","123123");
 ajout({id: 634649},"ines@ines.com")
  return (
    <div>
      <FilmContext.Provider value={{ favoritMovies, setFavoritMovies }}>
        <Router>
          <Nav />

          <Route path="/" exact component={Home} />
          <Route path="/populaire" component={Populaire} />
          <Route path="/dumoment" component={DuMoment} />
          <Route path="/avenir" component={Avenir} />
          <Route path="/mieuxnotes" component={MieuxNotes} />
          <Route path="/favoris" component={Favoris} />
          <Route path="/details/:id" component={Details} />
          <Route>
            <NotFound />
          </Route>
        </Router>
      </FilmContext.Provider>
    </div>
  );
}

export default App;
