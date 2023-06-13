import React from "react";
import styles from "../styles/css/APIcard.module.css";

export const APIcard = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <p className={styles.eventname}>{props.eventName}</p>
                <div className={styles.date_container}>
                    <p className={styles.date}>{props.eventStartTime}</p>
                    <p className={styles.date}>{props.eventStartDate}</p>
                </div>
                <img className={styles.card_img} src={props.eventImageUrl} alt="gragas" />
            </div>
        </div>
    );
};

// "eventName": "BEYONCÉ | VIP 1 - PURE/HONEY ON STAGE RISERS FRONT ROW EXPERIENCE",
//         "eventStartTime": "17:00:00",
//         "eventStartDate": "2023-06-27",
//         "eventImageUrl": "https://s1.ticketm.net/dam/a/128/3d4b8ab5-9062-4c04-a377-5111f8c53128_RECOMENDATION_16_9.jpg"
