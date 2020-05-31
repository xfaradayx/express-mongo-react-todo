import React, { useEffect, useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import HeaderContext from '../context/header/headerContext';
import DataContext from '../context/data/DataContext';
import titleAccordanceStatic from '../context/header/titleAccordance';

const withHeaderTitle = Component => ({...props}) =>  {
  const match = useRouteMatch();
  const { setTitle } = useContext(HeaderContext);
  const {lists} = useContext(DataContext);
  const titleAccordanceDynamic = lists.reduce((acc, list) => { acc[list._id] = list.title; return acc; }, {});
  
  useEffect(() => {
    if (match.params.listId) {
      setTitle(titleAccordanceDynamic[match.params.listId])
    } else {
      setTitle(titleAccordanceStatic[match.path])
    }
  }, [lists])
  
  return <Component {...props} />  
}

export default withHeaderTitle;