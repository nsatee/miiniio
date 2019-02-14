import axios from "axios";
import { CREATE_POST } from "./types";


export const createPost = () => {
    return () => {
        axios.post("/api/create_post", {
            title: "title",
            body: "body"
        })
    };
};
