import React, { useEffect, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useStyles } from './styles';
import DataContext from '../../context/data/DataContext';
import Container from '@material-ui/core/Container';
import ListPage from '../ListPage/index';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

const Main = () => {
  const classes = useStyles();
  const { state, actions } = useContext(DataContext);
  const { todos } = state;
  const { getLists, getTodos } = actions;

  useEffect(() => {
    const getDataState = async () => {
      await getLists();
      await getTodos();
    };

    getDataState();
  }, []);

  if (todos.length === 0) return <div>loading</div>;

  return (
    <>
      <Header />
      <Sidebar />
      <Container fixed maxWidth={'md'} className={classes.root}>
        <Switch>
          <Route exact path='/tasks'>
            <ListPage />
          </Route>
          <Route exact path='/important'>
            <ListPage />
          </Route>
          <Route exact path='/archive'>
            <ListPage />
          </Route>
          <Route exact path='/:listId'>
            <ListPage />
          </Route>
          <Redirect to={{ pathname: '/tasks' }}></Redirect>
        </Switch>
      </Container>
    </>
  );
};
export default Main;
