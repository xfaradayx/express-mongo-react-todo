import React, { useReducer } from 'react'
import { useContext } from 'react';
import SidebarContext from '../../context/sidebar/sidebarContext'
import Home from '../Home/index'
import Header from '../../components/Header'
import { Container } from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import { Switch, Route, Link } from "react-router-dom"

  const Main = props => {
    const {open, closeSidebar, openSidebar} = useContext(SidebarContext);
    console.log('sidebarState', open, closeSidebar, openSidebar)

    return (
        <>
            <Header/>
            <Drawer anchor="left" open={true}>
                Open
            </Drawer>
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
