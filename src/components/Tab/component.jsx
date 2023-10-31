import { Button } from '../Button/component'

export const Tab = ({ onClick, restarauntId, activeRestaraunt, restaraunt }) => {
    return(
        <Button 
        onClick={() => onClick(restarauntId)}
        size={"l"}
        viewVariant={restarauntId ===  activeRestaraunt? "accent": "base"}>
        {restaraunt.restaurantName}
        </Button>
    );
}