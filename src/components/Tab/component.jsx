import { useSelector } from 'react-redux';
import { Button } from '../Button/component'

export const Tab = ({ onClick, restarauntId, activeRestaraunt }) => {
    const restaraunt = useSelector((state) => state.restaraunt.entities[restarauntId]);
    return(
        <Button 
        onClick={() => onClick(restarauntId)}
        size={"l"}
        viewVariant={restarauntId ===  activeRestaraunt? "accent": "base"}>
        {restaraunt.restaurantName}
        </Button>
    );
}