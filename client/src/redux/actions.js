export const filterDrivers = (id) => {
    return {
        type: "FILTER",
        payload: id
    };
};

export const orderDrivers = (id) => {
    return {
        type: "ORDER",
        payload: id
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
      type: "SET_ALL_DRIVERS",
      payload: drivers
    };
  };