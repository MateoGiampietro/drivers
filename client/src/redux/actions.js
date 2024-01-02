export const filterPilots = (id) => {
    return {
        type: "FILTER",
        payload: id
    };
};