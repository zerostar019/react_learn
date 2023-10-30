import styles from './styles.module.css'
import classnames from 'classnames'
import { useTheme } from '../hooks/useTheme.jsx';

export const Button = ({ onClick, children, disabled, size="m", viewVariant="base", className }) => {
    const { theme } = useTheme();
    return(
        <button 
        onClick={onClick} 
        disabled={disabled}
        className={classnames(
            styles[viewVariant],
            styles[size],
            styles[theme],
            className
        )}>
            {children}
        </button>
    );
}