import styles from './styles.module.css';
import classnames from 'classnames'

export const Footer = ({ className }) => {
    return(
        <footer className={classnames(styles.footer, className)}>
        footer
        </footer>
    );
}