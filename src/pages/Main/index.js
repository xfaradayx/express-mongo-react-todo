import React, { useEffect, useContext }from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import DataContext from '../../context/data/DataContext';
import Container from '@material-ui/core/Container'
import TodoList from '../TodoList/index'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

  const Main = () => {
    const {lists, todos, getLists, getTodos} = useContext(DataContext)    

    
    
    useEffect(()=> {
        const getDataState = async () => {
            await getLists();  
            await getTodos();
        }

        getDataState();
    }, [])
    
    return (
        <>
            <Header/>
            <Sidebar />
            <Container fixed maxWidth={"md"}>
                <Switch>
                    <Route exact path="/" >
                        <TodoList />
                    </Route>
                    <Route exact path="/important">
                        <TodoList />
                    </Route>
                    <Route exact path="/done" >
                        <TodoList />
                    </Route>
                    <Route exact path="/:listId" >
                        <TodoList />
                    </Route>
                    <Redirect to={{ pathname: "/" }}></Redirect>
                </Switch>
            </Container>
        </>
    );
  }
  export default Main;
