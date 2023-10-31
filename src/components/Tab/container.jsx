import { useSelector } from "react-redux";
import { Tab } from "./component";

export const TabContainer = (props) => {
    const restaraunt = useSelector((state) => state.restaraunt.entities[props.restarauntId]);

    if (!restaraunt) {
        return null;
    }

    return (
        <Tab {...props} restaraunt={restaraunt}/>
    );
}