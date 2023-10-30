import styles from './styles.module.css';
import classnames from 'classnames';
import { Button } from '../Button/component';
import { useTheme } from '../hooks/useTheme';

export const Header = ({ className }) => {
    const { toggleTheme } = useTheme();
    return(
        <header
        className={classnames(styles.header, className)}>
        <div></div>
        <div></div>
        <div className={styles.button}>
            <Button 
            size={"m"}
            onClick={() => toggleTheme("dark")}>Change theme</Button>
        </div>
        </header>
    );
}