import { useSelector } from "react-redux"
import { Restaurant } from "./component";

export const RestarauntContainer = ({ restarauntId }) => {
    const restaraunt = useSelector((state) => state.restaraunt.entities[restarauntId]);

    if (!restaraunt) {
        return null;
    }

    return (
        <Restaurant restaraunt={restaraunt}/>
    );
}