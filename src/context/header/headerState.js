import React, { useReducer } from 'react'
import headerReducer from './headerReducer'
import HeaderContext from './headerContext'

const HeaderState = ({children}) => {
    const initialState = {
        title: ''
    }
    const [{title}, dispatch] = useReducer(headerReducer, initialState)

    const setTitle = title => {
        dispatch({type: 'SET_TITLE', title})
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