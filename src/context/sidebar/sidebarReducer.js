import React from 'react'

const sidebarReducer = (state, action) => {
    switch (action.type) {
        case 'OPEN_SIDEBAR':
            return {
                open: true
            }
        case 'CLOSE_SIDEBAR': 
            return {
                open: false
            }
        default: 
            return {
                ...state
            }
    }
}

export default sidebarReducer