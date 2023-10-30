import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import { ReviewForm } from '../Forms/ReviewForm/ReviewForm.jsx';
import { Button } from "../Button/component";

export const Modal = ({ className, onClose }) => {
    return(
        createPortal(
            <div className={className}>
                <div className={styles.overlay}></div>
                <div className={styles.modal}>
                    <div className={styles.button}>
                        <Button 
                        size="l"
                        onClick={onClose}>X</Button>
                    </div>
                    <h3 style={{ textAlign: "center", fontSize: "18pt"}}>Write your review here</h3>
                    <ReviewForm onClose={onClose}/> 
                </div>
            </div>,
            document.body
        )
    );
}