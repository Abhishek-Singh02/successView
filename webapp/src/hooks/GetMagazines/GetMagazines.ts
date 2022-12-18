import { Magazine } from "@/types/api";
import { axios } from "../axios"
import { useQuery } from "@tanstack/react-query"

export const getAllMagazinesFn = async () => {
    const response = await axios.get(`/magazines`);
    return response.data;
};

export const UseGetMagazines = () => {
    return useQuery<Magazine[]>(['magazines'], getAllMagazinesFn)

}