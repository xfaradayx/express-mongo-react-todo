import React, { useReducer } from 'react'
import headerReducer from './headerReducer'
import HeaderContext from './headerContext'
import titleAccordance from './titleAccordance'

const HeaderState = ({children}) => {
    const initialState = {
        title: ''
    }
    const [{title}, dispatch] = useReducer(headerReducer, initialState)

    const setTitle = title => {
        console.log(title);
        
        dispatch({type: 'SET_TITLE', title: titleAccordance[title]})
    }

    return (
        <HeaderContext.Provider value={{
            title, setTitle
        }}>
            {children}
        </HeaderContext.Provider>
    )    
}

export default HeaderState 