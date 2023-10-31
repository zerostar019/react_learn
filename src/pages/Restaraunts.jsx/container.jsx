import { useSelector } from "react-redux";

import { RestarauntPage } from "./component";

export const RestarauntPageContainer = () => {
    const activeRestarauntId = useSelector((state) => state.restaraunt.ids);

    if (!activeRestarauntId) {
        return null;
    }

    return (
        <RestarauntPage activeRestarauntId={activeRestarauntId}/>
    );
}