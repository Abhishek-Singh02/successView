import { Blog } from "@/types/api";
import { axios } from "../axios"
import { useQuery } from "@tanstack/react-query"

export const getOneBlogFn = async (id: string) => {
    const response = await axios.get(`/blogs/${id}`);
    return response.data[0];
};

export const useGetOneBlog = (id: string) => {
    return useQuery<Blog>([getOneBlogFn], () => getOneBlogFn(id))

}