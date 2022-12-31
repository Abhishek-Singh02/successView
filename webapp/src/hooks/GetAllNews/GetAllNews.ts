import { News } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../axios";

export const getAllNewsFn = async () => {
    const response = await axios.get(`/news`);
    return response.data!;
};

export const useGetAllNews = () => {
    return useQuery<News[]>(['news'], getAllNewsFn)

}