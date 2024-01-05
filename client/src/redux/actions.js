export const filterDriversByName = (name) => {
    return {
        type: "FILTERBYNAME",
        payload: name
    };
};

/* export const orderDrivers = (id) => {
    return {
        type: "ORDER",
        payload: id
    };
}; */

export const filterDriversByTeam = (team) => {
    return {
        type: "FILTERBYTEAM",
        payload: team
    };
};

export const setAllDrivers = (drivers) => {
    return {
      type: "SET_ALL_DRIVERS",
      payload: drivers
    };
  };