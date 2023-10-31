import { useState } from "react";
import { Button } from "../Button/component";
import { Menu } from "../Menu/component";
import { Reviews } from '../Reviews/component';
import { Modal } from '../Modal/Modal.jsx';
import styles from './styles.module.css';
import { useSelector } from "react-redux";

export const Restaurant = ({ restaraunt }) => {
    const [isModalActive, setIsModalActive] = useState(false);
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>{restaraunt.restaurantName}</h2>
            <Menu dishesIds={restaraunt.dishes}/>
            <Reviews commentsIds={restaraunt.comments}/>
            <Button onClick={() => setIsModalActive(true)}>Create review</Button>
            {isModalActive ? <Modal className={styles.modalWindow} onClose={() => setIsModalActive(false)}/> : ""}
    </div>
    );
}