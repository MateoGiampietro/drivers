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

            const filterDrivers = state.allDrivers.filter((driver) => driver.id === action.payload )
            
            return {
                ...state,
                drivers: filterDrivers
            }

        case "SET_ALL_DRIVERS":
            return {
            ...state,
            allDrivers: action.payload,
            drivers: action.payload
            };

        case "FILTERBYTEAM":
            if (action.payload === "All") return {
                ...state,
                drivers: state.allDrivers
            }

            const teamFilter = state.allDrivers.filter((driver) => {
                const teamsArray = (driver.teams && driver.teams.split(','));
                return teamsArray.includes(action.payload)
            })
            console.log(state.allDrivers)

            return {
                ...state,
                drivers: teamFilter
            }

        case "ERROR":
            errors.errors = state.payload;
            if (errors.hasOwnProperty("errors")) {
                return errors
            }
    }
};

export default rootReducer;