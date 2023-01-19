import {
    BlogCard,
    Carousel,
    Flex,
    MagazineCard,
    Pagination,
} from "@/components";
import { useGetMagazines } from "@/hooks";
import { FC, useState } from "react";

export type MagazinesProps = {};

export const Magazines: FC<MagazinesProps> = () => {
    const { data } = useGetMagazines();
    const [currentData, setCurrentData] = useState<any[]>(data!);
    return (
        <Flex width="full" padding={9} justify="evenly" wrap="wrap" gap={7}>
            <Carousel />
            {/* {currentData?.map((mag) => (
                <MagazineCard mag={mag} />
            ))}
            <Pagination data={data!} size={8} setPage={setCurrentData} /> */}
        </Flex>
    );
};

export default Magazines;
