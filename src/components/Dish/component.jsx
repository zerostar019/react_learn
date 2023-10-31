import { useState } from 'react';
import { Button } from '../Button/component'
import { useSelector } from 'react-redux';

export const Dish = ({ dish }) => {
    const [amount, setAmount] = useState(0);
    return(
        <div>
            <span>{dish.name}</span>
            <div>
            <Button
            onClick={() => setAmount(amount - 1)}
            size={"m"}
            disabled={amount === 0}>
            -
            </Button>
            {amount}
            <Button
            onClick={() => setAmount(amount + 1)}
            size={"m"}
            disabled={amount === 5}>
            +
            </Button>
            </div>
        </div>
    );
}