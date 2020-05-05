import sidebarReducer from './sidebarReducer'
import React from 'react'
import { useReducer } from 'react'
import SidebarContext from './sidebarContext'

const SidebarState = ({children}) => {
    const initialState = {
        open: false,
    }
    const [{ open }, dispatch] = useReducer(sidebarReducer, initialState)
    
    const openSidebar = () => {
        dispatch({type: "OPEN_SIDEBAR"})
    }

    const closeSidebar = () => {
        dispatch({type: 'CLOSE_SIDEBAR'})
    }
    
    return (
        <>
            <SidebarContext.Provider value={{
                open, openSidebar, closeSidebar
            }}>
                {children}
            </SidebarContext.Provider>
        </>
    )
}

export default SidebarState;