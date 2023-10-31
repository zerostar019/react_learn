import { DishContainer } from '../Dish/container';

export const Menu = ({ dishesIds }) => {
    return(
        <div>
            <h3>Menu</h3>
            <ul>
                {dishesIds.map((id) => (
                    <li key={id}>
                        <DishContainer dishId={id}/>
                    </li>
                ))}
            </ul>
        </div>
        );
}