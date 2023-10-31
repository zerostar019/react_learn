import { useSelector } from "react-redux";
import { RestarauntTabs } from "./component";

export const RestarauntTabsContainer = (props) => {
    const restarauntIds = useSelector((state) => state.restaraunt.ids);

    if (!restarauntIds) {
        return null;
    }

    return (
        <RestarauntTabs {...props} restarauntIds={restarauntIds}/>
    );
}