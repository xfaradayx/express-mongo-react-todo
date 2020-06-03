import React from 'react'
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
export default [
    {
        href: '/tasks',
        icon: <FormatListBulletedOutlinedIcon />,
        title: 'Все задачи'
    },
    {
        href: '/important',
        icon: <TurnedInIcon />,
        title: 'Важные'
    },
    {
        href: '/archive',
        icon: <DeleteIcon />,
        title: 'Архив'
    },
]