import React from 'react'
import { Switch, Route} from "react-router-dom"
import Container from '@material-ui/core/Container'
import TodoList from '../TodoList/index'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import CustomRoute from '../../components/CustomRoute/index'

  const Main = () => {
    return (
        <>
            <Header/>
            <Sidebar />
            <Container>
                <Switch>
                    <Route path="/tasks" >
                        <TodoList />
                    </Route>
                    <Route path="/important" >
                        <TodoList />
                    </Route>
                    <Route path="/done" >
                        <TodoList />
                    </Route>
                    {/* <CustomRoute Component={TodoList} path="/tasks" />
                    <CustomRoute Component={TodoList} path="/important" />
                    <CustomRoute Component={TodoList} path="/done" /> */}
                    {/* <Route path="/about">
                        <WithHeaderContext>
                            <h1>About page</h1>
                        </WithHeaderContext>
                    </Route> */}
                </Switch>
            </Container>
        </>
    );
  }
  export default Main
