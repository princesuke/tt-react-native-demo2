import { publicApi } from "../../../api/axiosInstance";

export const userApi = {
    fetchUser: (id)=> publicApi.get(`/users/${id}`)
}