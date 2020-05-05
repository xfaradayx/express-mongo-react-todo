import React, { useReducer } from 'react'
import { useContext } from 'react';
import SidebarContext from '../../context/sidebar/sidebarContext'
import Home from '../Home/index'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Container } from '@material-ui/core'
import { Switch, Route, Link } from "react-router-dom"

  const Main = props => {

    return (
        <>
            <Header/>
            <Sidebar />
            <Container>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <h1>About page</h1>
                    </Route>
                </Switch>
            </Container>
        </>
    );
  }
  export default Main
