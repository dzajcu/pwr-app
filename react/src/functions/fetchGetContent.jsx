export const fetchGetContent = (setPosts, id) => {
    fetch(`http://localhost:8080/content/page/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("userToken"),
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            setPosts((prevPosts) => {
                const newPosts = data.filter(
                    (newPost) =>
                        !prevPosts.some(
                            (prevPost) =>
                                prevPost.creationTime ===
                                    newPost.creationTime &&
                                prevPost.author === newPost.author
                        )
                );
                return [...prevPosts, ...newPosts];
            });
        })
        .catch((error) => {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
        });
};
