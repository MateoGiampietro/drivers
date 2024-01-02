const initialState = {
    drivers: [],
    allDrivers: [],
    errors: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return {...state};
        case "FILTER":
            if (action.payload === "All") return {
                ...state,
                drivers: state.allDrivers
            }

            const filterDrivers = state.allDrivers.filter( driver => driver.id === action.payload )
            
            return {
                ...state,
                drivers: filterDrivers
            }
        case "ERROR":
            errors.errors = state.payload;
            if (errors.hasOwnProperty("errors")) {
                return errors
            }
    }
};

export default rootReducer;