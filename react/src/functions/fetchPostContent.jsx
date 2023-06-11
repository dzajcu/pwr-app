export const fetchPostContent = async (post, tags) => {
    const response = await fetch("http://localhost:8080/content", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("userToken"),
        },
        body: JSON.stringify({
            description: post,
            tags: tags,
        }),
    });

    if (!response.ok) {
		console.log(sessionStorage.getItem("userToken"))
        throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
};
