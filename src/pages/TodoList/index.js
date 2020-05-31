import React, { useContext } from 'react'
import withHeaderTitle from '../../HOC/withHeaderTitle'
import { Typography } from '@material-ui/core'

const TodoList = () => {
    return (
        <Typography variant="h2">
            Todo list

        </Typography>
    )
}

export default withHeaderTitle(TodoList)
