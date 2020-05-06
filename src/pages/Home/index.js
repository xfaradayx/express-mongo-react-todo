import React, { useContext } from 'react'
import HeaderContext from '../../context/header/headerContext'
import { Typography } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

const Home = props => {
    const { title } = useContext(HeaderContext);

    return (
        <Typography variant="h2">
            Home page
        </Typography>
    )
}

export default Home;