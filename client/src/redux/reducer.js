const initialState = {
    drivers: [],
    allDrivers: [],
    currentPage: 1,
    driversPerPage: 9,
    errors: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        default:
            return {...state};

        case "SETPAGE":
            return {
                ...state,
                currentPage: action.payload
            }

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

        case "SETALLDRIVERS":
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

        case "ORDER":
            const orderCopy = [...state.allDrivers];

            if(action.payload === "aNombre")
                orderCopy.sort((a, b) => a.name.forename.localeCompare(b.name.forename));
            if(action.payload === "dNombre")
                orderCopy.sort((a, b) => b.name.forename.localeCompare(a.name.forename));
            if(action.payload === "aNacimiento")
                orderCopy.sort((a, b) => a.dob.localeCompare(b.dob));
            if(action.payload === "dNacimiento")
                orderCopy.sort((a, b) => b.dob.localeCompare(a.dob));

            return {
                ...state,
                drivers: orderCopy
            }

        case "ERROR":
            errors.errors = state.payload;
            if (errors.hasOwnProperty("errors")) {
                return errors
            }
    }
};

export default rootReducer;