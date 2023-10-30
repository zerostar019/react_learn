import { createSlice } from "@reduxjs/toolkit";
import { dishes } from "../../../../mocks/mock";

const initialState = {
    entities: dishes.reduce((acc, dish) => {
        acc[dish.dishId] = dish;
        return acc;
    }, {}),
    ids: dishes.map(({dishId}) => dishId),
};

const { reducer } = createSlice({
    name: "dish",
    initialState
});


export default reducer;