import React, { useEffect, useContext } from 'react'
import { Route } from 'react-router-dom'
import HeaderContext from '../../context/header/headerContext'

export default function CustomRoute({path, Component, ...props}) {
    const { setTitle } = useContext(HeaderContext)
    
    useEffect(() => {
      setTitle(path)
    }, [])

    return (    
        <Route 
            path={path} 
            {...props} 
            render={() => {
                return (
                    <Component />
                )
            }}
        >
            
        </Route>
    )
}