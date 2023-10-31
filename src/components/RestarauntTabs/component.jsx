import { TabContainer } from "../Tab/container";
import styles from './styles.module.css'
import classnames from 'classnames'

export const RestarauntTabs = ({ className, onClick, activeRestaraunt, restarauntIds }) => {
    
    return(
        <div className={classnames(className, [styles.tab])}>{restarauntIds.map(( id ) => (
            <TabContainer
            key={id}
            restarauntId={id}
            onClick={onClick}
            activeRestaraunt={activeRestaraunt}
             />
        ))}
        </div>
    );
}