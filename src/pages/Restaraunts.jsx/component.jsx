import { useState } from 'react';
import { RestarauntContainer } from '../../components/Restaraunt/container.jsx';
import { Header } from '../../components/Header/component.jsx';
import styles from './styles.module.css';
import { Footer } from '../../components/Footer/component.jsx';
import { RestarauntTabsContainer } from '../../components/RestarauntTabs/container.jsx';


export const RestarauntPage = ({ activeRestarauntId }) => {
    const [isActiveRestaurantId, setIsActiveRestaurantId] = useState(
        activeRestarauntId[0]
    )
    return(
        <div className={styles.root}>
            <Header className={styles.header}/>
            <main className={styles.content}>
                <RestarauntTabsContainer
                className={styles.tabs}
                onClick={setIsActiveRestaurantId}
                activeRestaraunt={isActiveRestaurantId}
                />
                <RestarauntContainer restarauntId={isActiveRestaurantId}/>
            </main>
            <Footer className={styles.footer}/>
        </div>
    );
}