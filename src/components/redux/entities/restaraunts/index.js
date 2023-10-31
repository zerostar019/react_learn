import { createSlice } from "@reduxjs/toolkit";
import { restaurants } from '../../../../../server_api/data/mock.js';

const initialState = {
    entities: restaurants.reduce((acc, restaurant) => {
        acc[restaurant.restarauntId] = restaurant;

        return acc;
    }, {}),
    ids: restaurants.map(({ restarauntId }) => restarauntId),
};

const { reducer } = createSlice({
    name: "restaraunt",
    initialState,
});


export default reducer;