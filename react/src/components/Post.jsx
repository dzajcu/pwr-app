import React from "react";
import { Tags } from "./Tags";
import styles from "./styles/css/Post.module.css";
import moment from "moment";
import "moment/dist/locale/pl";

export const Post = (props) => {
    // const date = new Date(props.date);
    // const time = date.toLocaleTimeString("pl-PL", {
    //     hour: "2-digit",
    //     minute: "2-digit",
    // });
    // const formattedDate = date.toLocaleDateString("pl-PL");
    // const formattedDateTime = `${time} ${formattedDate}`;
    // console.log(formattedDateTime); // Output: 09:47 2023-04-20

    // const someDate = new Date(props.date);
    // const timeAgo = moment(someDate).diff(moment()); // liczba milisekund
    // const formattedDate = moment.duration(timeAgo).humanize(); // "1 dzień temu"


    moment.locale("pl");
    const someDate = new Date(props.date);
    const formattedDateTime = moment(someDate).locale("pl").fromNow();

    return (
        <div className={styles.post}>
            <div className={styles.content}>
                <div className={styles.post_header}>
                    <p className={styles.username}>Username</p>
                    <div className={styles.dot}></div>
                    <p className={styles.date}>{formattedDateTime}</p>
                </div>
                <Tags tagsList={props.tags} />
                <p className={styles.text}>{props.text}</p>
            </div>
        </div>
    );
};
