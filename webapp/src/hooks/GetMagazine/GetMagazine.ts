import { Magazine } from "@/types/api";
import { axios } from "../axios"
import { useQuery } from "@tanstack/react-query"

export const getOneMagazineFn = async (id: string) => {
    const response = await axios.get(`/magazines/${id}`);
    return response.data[0]
};

export const useGetOneMagazine = (id: string) => {
    return useQuery<Magazine>([id], () => getOneMagazineFn(id))

}