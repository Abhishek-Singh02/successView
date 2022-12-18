import { Blog } from "@/types/api";
import { axios } from "../axios"
import { useQuery } from "@tanstack/react-query"

export const getOneBlogFn = async (id: string) => {
    const response = await axios.get(`/blogs/${id}`);
    return response.data;
};

export const UseGetOneBlog = (id: string) => {
    return useQuery<Blog>([getOneBlogFn], () => getOneBlogFn(id))

}