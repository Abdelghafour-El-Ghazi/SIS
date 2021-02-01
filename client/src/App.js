import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import { AuthProvider } from "./context/auth";
import AuthRoute from "./util/AuthRoute";
import NotAuthRoute from "./util/NotAuthRoute";
import RegisterAuthRoute from "./util/RegisterAuthRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import SinglePost from "./pages/SinglePost";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import OtherStats from "./pages/OtherStats";
import StatsYear from "./pages/StatsYear";
import Sexe from "./pages/Sexe";
import KidsList from "./pages/KidsList";
import KidCalendar from "./pages/KidCalendar";
import SearchPage from "./pages/SearchPage";
import KidForm from "./pages/KidForm";
import SearchDate from "./pages/SearchDate";
import MenuBar from "./components/MenuBar";
import Commande from "./pages/Commande";
import Commander from "./pages/Commander";
import Regions from "./pages/Regions";

const App = () => {
  const [currentId, setCurrentId] = useState("");
  const [info, setInfo] = useState({});
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path='/home' component={Home} />
          <AuthRoute exact path='/login' component={Login} />
          <Route exact path='/statistics' component={Statistics} />
          <Route exact path='/stats' component={OtherStats} />
          <Route exact path='/statsyear' component={StatsYear} />
          <Route exact path='/sexe' component={Sexe} />
          <NotAuthRoute
            exact
            path='/'
            component={KidsList}
            setCurrentId={setCurrentId}
            setInfo={setInfo}
            info={info}
          />
          <NotAuthRoute exact path='/enfant/:id' component={KidCalendar} />
          <NotAuthRoute
            exact
            path='/ajouter'
            component={KidForm}
            currentId={currentId}
            setCurrentId={setCurrentId}
            setInfo={setInfo}
            info={info}
          />
          <Route exact path='/searchdate' component={SearchDate} />
          <Route exact path='/search' component={SearchPage} />
          <Route exact path='/stock' component={Commande} />
          <Route exact path='/commander' component={Commander} />
          <Route exact path='/regions' component={Regions} />
          <RegisterAuthRoute exact path='/register' component={Register} />
          <Route exact path='/posts/:postId' component={SinglePost} />
          <Route exact path='/users/:username' component={Profile} />
        </Container>
      </Router>
    </AuthProvider>
  );
};

export default App;
