import styles from "../styles/css/APIcard.module.css";
import React from "react";
import { APIcard } from "./APIcard";

export const APIcards = (props) => {
    return (
        <div className={styles.event_cards}>
            {props.cardslist.map((card) => (
                <APIcard
                    eventName={card.eventName}
                    eventStartTime={card.eventStartTime}
                    eventStartDate={card.eventStartDate}
                    eventImageUrl={card.eventImageUrl}
                />
            ))}
        </div>
    );
};
