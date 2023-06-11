export const fetchGetContent = async (setPosts) => {
    const response = await fetch("http://localhost:8080/content", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + sessionStorage.getItem("userToken"),
        },
    });
    if (!response.ok) {
        throw new Error("Network response was not ok chuj gragasa");
    }
    const data = await response.json();
    setPosts(data);
};	
