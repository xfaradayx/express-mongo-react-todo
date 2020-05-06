import React, { useReducer } from 'react'
import WithHeaderContext from '../../HOC/WithHeaderContext'
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
                        <WithHeaderContext>
                            <Home />
                        </WithHeaderContext>
                    </Route>
                    <Route path="/about">
                        <WithHeaderContext>
                            <h1>About page</h1>
                        </WithHeaderContext>
                    </Route>
                </Switch>
            </Container>
        </>
    );
  }
  export default Main
