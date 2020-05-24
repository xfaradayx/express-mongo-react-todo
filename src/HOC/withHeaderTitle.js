import React, { useEffect, useContext } from 'react'
import HeaderContext from '../context/header/headerContext'
import { useLocation, useRouteMatch } from 'react-router-dom'

const withHeaderTitle = Component => ({...props}) =>  {

  const { setTitle } = useContext(HeaderContext)
  const match = useRouteMatch();

  useEffect(() => {
    setTitle(match.path)
  }, [])
  
  return <Component {...props} />  
}

export default withHeaderTitle