import { publicApi } from "../../../api/axiosInstance";

export const postApi = {
    fetchPosts: ()=> publicApi.get("/posts")
}