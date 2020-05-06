const headerReducer = (state, action) => {
    switch (action.type) {
        case "SET_TITLE": 
            return {
                title: action.title
            }
    }
}

export default headerReducer