import { Table } from "./Table";
import { useMemo } from "react";

export const TableStory = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Instrument",
                accessor: "instrument",
            },
            {
                Header: "Amount",
                accessor: "amount",
            },
        ],
        []
    );

    return <Table columns={columns} data={data} />;
};

TableStory.storyName = "Table";

const data = [
    {
        instrument: "Stocks",
        amount: "120,000",
    },
    {
        instrument: "Crypto",
        amount: "50,000",
    },
];
