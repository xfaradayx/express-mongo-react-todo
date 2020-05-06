import React, { useEffect, useContext } from 'react'
import HeaderContext from '../context/header/headerContext'
import { useLocation } from 'react-router-dom'

const WithHeaderContext = props => {
    const {setTitle} = useContext(HeaderContext);
    const location = useLocation();
    
    useEffect(() => {
      setTitle(location.pathname)
    }, [])

    return (
        <>
          { props.children }
        </>
    )
}

export default WithHeaderContext