import React, { useEffect, useContext }from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import DataContext from '../../context/data/DataContext';
import Container from '@material-ui/core/Container'
import ListPage from '../ListPage/index'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

  const Main = () => {
    const {todos, getLists, getTodos} = useContext(DataContext);  
    
    useEffect(()=> {
        const getDataState = async () => {
            await getLists();  
            await getTodos();
        }

        getDataState();
    }, []);
    
    return (
        <>
            <Header/>
            <Sidebar />
            <Container fixed maxWidth={"md"}>
                <Switch>
                    <Route exact path="/tasks" >
                        <ListPage />
                    </Route>
                    <Route exact path="/important">
                        <ListPage />
                    </Route>
                    <Route exact path="/:listId" >
                        <ListPage />
                    </Route>
                    <Redirect to={{ pathname: "/tasks" }}></Redirect>
                </Switch>
            </Container>
        </>
    );
  }
  export default Main;
