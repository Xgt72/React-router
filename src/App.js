import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";

import Home from "./component/Home";
import History from "./component/History";

class App extends Component {


  render() {
    const styles = {
      divMain: {
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-around"
      },
      nav: {
        margin: "1rem"
      },
      navlink: {
        textDecoration: "none",
        margin: "1rem",
        padding: "1rem",
        fontSize: "2rem",
        border: "2px solid black",
        borderRadius: "10px"
      }
    };
    return (
      <div className="App" style={styles.divMain}>
        <BrowserRouter>
          <nav style={styles.nav}>
            <NavLink exact to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }} style={styles.navlink}>Accueil</NavLink>
            <NavLink to="/notre-histoire"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }} style={styles.navlink}>Notre histoire</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
