import { Dispatch, FC, useEffect, useState } from "react";
import PaginationCompo from "react-responsive-pagination";
import { Flex } from "../Flex";
import { paginateArray } from "@/utils";
import "@/styles/bootstrap.css";

export type PaginationProps = {
    size: number;
    data: any[];
    setPage: Dispatch<any[]>;
};

export const Pagination: FC<PaginationProps> = ({ data, setPage, size }) => {
    const totalPages = Math.ceil(data?.length! / size);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setPage(paginateArray(data, currentPage, 10));
    }, [currentPage]);

    return (
        <Flex width="full" center>
            <PaginationCompo
                total={totalPages}
                current={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </Flex>
    );
};
