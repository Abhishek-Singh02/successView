import { BlogCard, Flex, MagazineCard } from "@/components";
import { useGetMagazines } from "@/hooks";
import { FC } from "react";

export type MagazinesProps = {};

export const Magazines: FC<MagazinesProps> = () => {
    const { data } = useGetMagazines();
    return (
        <Flex width="full" padding={9} justify="evenly" wrap="wrap" gap={7}>
            {data?.map((mag) => (
                <MagazineCard mag={mag} />
            ))}
        </Flex>
    );
};

export default Magazines;
