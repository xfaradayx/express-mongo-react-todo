const headerReducer = (state, action) => {
    switch (action.type) {
        case "SET_TITLE": 
            return {
                title: action.payload
            }
    }
}

export default headerReducer