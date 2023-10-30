import { Dish } from '../Dish/component';

export const Menu = ({ dishesIds }) => {
    return(
        <div>
            <h3>Menu</h3>
            <ul>
                {dishesIds.map((id) => (
                    <li key={id}>
                        <Dish dishId={id}/>
                    </li>
                ))}
            </ul>
        </div>
        );
}