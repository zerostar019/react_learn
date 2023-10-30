import { configureStore } from "@reduxjs/toolkit";
import restaraunt from './entities/restaraunts';
import user from './entities/users';
import review from './entities/reviews';
import dish from './entities/dishes';

export const store = configureStore({
    reducer: {
        restaraunt,
        user,
        review,
        dish,
    },
}
);