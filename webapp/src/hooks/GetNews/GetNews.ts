import { News } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { axios } from "../axios";

export const getOneNewsFn = async (id: string) => {
    const response = await axios.get(`/news/${id}`);
    return response.data[0]!;
};

export const useGetOneNews = (id: string) => {
    return useQuery<News>([id], () => getOneNewsFn(id))

}