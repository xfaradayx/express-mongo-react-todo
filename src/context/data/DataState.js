import React, { useReducer } from 'react';
import DataContext from './DataContext';
import dataReducer from './dataReducer';
import { apiGetLists } from './apiUtil';
import * as actions from './actions';
import initialState from './state';

const DataState = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const bindedActions = Object.entries(actions).reduce((acc, [name, fn]) => ({...acc, [name]: fn.bind(null, dispatch)}), {});

    return (
        <DataContext.Provider value={{
            state,
            actions: bindedActions,
        }}>
            {children}
        </DataContext.Provider>
    ) 
}

export default DataState;