const initialState = {
    drivers: [],
    allDrivers: [],
    errors: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return {...state};
        case "FILTERBYNAME":
            if (action.payload === "") return {
                ...state,
                drivers: state.allDrivers
            }

            const filteredDrivers = state.allDrivers.filter((driver) =>
                driver.name.forename.toLowerCase() === action.payload.toLowerCase() ||
                driver.name.surname.toLowerCase() === action.payload.toLowerCase()
            );

            return {
                ...state,
                drivers: filteredDrivers
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
                const teamsArray = (driver.teams && driver.teams.split(',')) || [];
                return teamsArray.some((team) => team.trim() === action.payload);
            })

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