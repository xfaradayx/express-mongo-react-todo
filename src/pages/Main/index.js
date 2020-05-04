import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from '../Home/index';

  const Main = props => {
    return (
        <>
            <h1>General header</h1>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <h1>About page</h1>
                </Route>
            </Switch>
        </>
    );
  }


  export default Main;
