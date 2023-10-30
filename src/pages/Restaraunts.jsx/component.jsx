import { useState } from 'react';
import { RestarauntTabs } from '../../components/RestarauntTabs/component.jsx';
import { Restaurant } from '../../components/Restaraunt/component.jsx';
import { Header } from '../../components/Header/component.jsx'
import styles from './styles.module.css';
import { Footer } from '../../components/Footer/component.jsx';
import { useSelector } from 'react-redux';


export const RestarauntPage = () => {
    const activeRestarauntId = useSelector((state) => state.restaraunt.ids);
    const [isActiveRestaurantId, setIsActiveRestaurantId] = useState(
        activeRestarauntId[0]
    )
    return(
        <div className={styles.root}>
            <Header className={styles.header}/>
            <main className={styles.content}>
                <RestarauntTabs
                className={styles.tabs}
                onClick={setIsActiveRestaurantId}
                activeRestaraunt={isActiveRestaurantId}
                />
                <Restaurant restarauntId={isActiveRestaurantId}/>
            </main>
            <Footer className={styles.footer}/>
        </div>
    );
}