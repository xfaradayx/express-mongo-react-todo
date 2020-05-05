import React, { useContext } from 'react'
import SidebarContext  from '../../../context/sidebar/sidebarContext'
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined'
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined'

const SidebarConf = (props) => {
    const { closeSidebar } = useContext(SidebarContext)
    return [
        {
            key: Math.floor((Math.random() * 10000000)),
            href: '/tasks',
            icon: <FormatListBulletedOutlinedIcon />,
            title: 'Все задачи',
            onClick: closeSidebar
        },
        {
            key: Math.floor((Math.random() * 10000000)),
            href: '/important',
            icon: <NotificationImportantOutlinedIcon />,
            title: 'Важные',
            onClick: closeSidebar
        },
        {
            key: Math.floor((Math.random() * 10000000)),
            href: '/done',
            icon: <CheckCircleOutlineOutlinedIcon />,
            title: 'Выполнено',
            onClick: closeSidebar
        },
    ]
}

export default SidebarConf