// import styles from "./styles/css/Posts.module.css";
import React from "react";
import { Post } from "./Post";

export const Posts = (props) => {
    return (
        <div className="posts">
            {props.postsList
                .map((post) => (
                    <Post
                        date={post.creationTime}
                        text={post.description}
                        tags={post.tags}
                    />
                ))
                .reverse()}
        </div>
    );
};
