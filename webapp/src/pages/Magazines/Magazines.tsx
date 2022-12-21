import { BlogCard, Flex, MagazineCard, Pagination } from "@/components";
import { useGetMagazines } from "@/hooks";
import { FC, useState } from "react";
import "@/styles/bootstrap.css";

export type MagazinesProps = {};

export const Magazines: FC<MagazinesProps> = () => {
    const { data } = useGetMagazines();
    const [currentData, setCurrentData] = useState<any[]>(data!);
    return (
        <Flex width="full" padding={9} justify="evenly" wrap="wrap" gap={7}>
            {currentData?.map((mag) => (
                <MagazineCard mag={mag} />
            ))}
            <Pagination data={data!} size={10} setPage={setCurrentData} />
        </Flex>
    );
};

export default Magazines;
