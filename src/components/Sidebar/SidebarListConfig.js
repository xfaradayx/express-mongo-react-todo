import React from 'react'
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined'

export default [
    {
        href: '/tasks',
        icon: <FormatListBulletedOutlinedIcon />,
        title: 'Все задачи'
    },
    {
        href: '/important',
        icon: <NotificationImportantOutlinedIcon />,
        title: 'Важные'
    },
]