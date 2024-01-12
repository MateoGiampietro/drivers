export const filterDriversByName = (name) => {
    return {
        type: "FILTERBYNAME",
        payload: name
    };
};

export const orderDrivers = (order) => {
    return {
        type: "ORDER",
        payload: order
    };
};

export const filterDriversByTeam = (team) => {
    return {
        type: "FILTERBYTEAM",
        payload: team
    };
};

export const setAllDrivers = (drivers) => {
    return {
      type: "SETALLDRIVERS",
      payload: drivers
    };
};

export const setPage = (page) => {
    return {
        type: "SETPAGE",
        payload: page
    }
}