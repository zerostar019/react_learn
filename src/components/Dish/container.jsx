import { useSelector } from "react-redux"
import { Dish } from "./component";

export const DishContainer = ({ dishId }) => {
    const dish = useSelector((state) => state.dish.entities[dishId]);

    if (!dish) {
        return null;
    }
    
    return (
        <Dish dish={dish}/>
    );
}