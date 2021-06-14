import Axios from "axios";

export const loginUserAPI = (email, password) => {
    return Axios.post("/api/user/login", { email, password });
};

export const signupUserAPI = (email, username, password) => {
    return Axios.post("/api/user/signup", { email, username, password });
};

export const sendResetEmailAPI = (email) => {
    console.log(email);
    return Axios.post("/api/user/sendEmail", { email });
};

export const checkTokenAPI = () => {
    return Axios.get("/api/user/checktoken", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
};

export const getHighScoresAPI = () => {
    return Axios.get("/api/highscore/all");
};

export const getUserHighscoresAPI = () => {
    return Axios.get(`/api/highscore/userscores`, {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
};

export const saveHighScoreAPI = (score) => {
    return Axios.post(
        "/api/highscore/new",
        { score },
        {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        },
    );
};
