import { Button } from "../../Button/component";
import styles from './styles.module.css';

export const ReviewForm = ({ onClose }) => {

    return (
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.name}>
                <span>Name:</span>
                <input placeholder="Enter the name"></input>
            </div>
            <div className={styles.rating}>
                <span>Rating:</span>
                {new Array(5).fill(null).map((_, index) => <Button key={index}>{index + 1}</Button>)}
            </div>
            <textarea placeholder="Enter the comment"
            className={styles.textarea}></textarea>
            <Button 
            onClick={onClose}
            size={"l"}
            className={styles.button}>Save</Button>
        </form>
    );
}