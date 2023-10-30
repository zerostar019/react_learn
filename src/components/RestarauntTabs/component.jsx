import { useSelector } from "react-redux";
import { Tab } from "../Tab/component";
import styles from './styles.module.css'
import classnames from 'classnames'

export const RestarauntTabs = ({ className, onClick, activeRestaraunt }) => {
    const restarauntIds = useSelector((state) => state.restaraunt.ids);
    return(
        <div className={classnames(className, [styles.tab])}>{restarauntIds.map(( id ) => (
            <Tab
            key={id}
            restarauntId={id}
            onClick={onClick}
            activeRestaraunt={activeRestaraunt}
             />
        ))}
        </div>
    );
}