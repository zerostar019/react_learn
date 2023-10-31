import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../../../../server_api/data/mock";

const initialState = {
    entities: users.reduce((acc, user) => {
        acc[user.userId] = user;
        return acc;
    }, {}),
    ids: users.map(({userId}) => userId),
};

const { reducer } = createSlice({
    name: "user",
    initialState
});


export default reducer;