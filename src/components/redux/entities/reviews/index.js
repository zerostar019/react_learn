import { createSlice } from "@reduxjs/toolkit";
import { comments } from "../../../../mocks/mock";

const initialState = {
    entities: comments.reduce((acc, comment) => {
        acc[comment.commentId] = comment;
        return acc;
    }, {}),
    ids: comments.map(({ commentId }) => commentId),
};


const { reducer } = createSlice({
    name: "review",
    initialState
});


export default reducer;