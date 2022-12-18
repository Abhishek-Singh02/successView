import { Blog } from "@/types/api";
import { axios } from "../axios"
import { useQuery } from "@tanstack/react-query"

export const getAllBlogsFn = async () => {
    const response = await axios.get(`/blogs`);
    return response.data;
};

export const useGetBlogs = () => {
    return useQuery<Blog[]>(['blogs'], getAllBlogsFn)

}