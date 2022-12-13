import { PrimitivePropsWithRef } from "@radix-ui/react-primitive";
import { ComponentProps, VariantProps } from "@stitches/react";
import { ComponentType, ElementRef, forwardRef, Fragment, ReactNode } from "react";
import {
    Cell,
    ColumnInstance,
    HeaderGroup,
    Row,
    TableCellProps,
    TableHeaderProps,
    TableOptions,
    TableRowProps,
    useTable,
} from "react-table";
import { css, PropsWithCSS, styled, AliasSolid } from "../../styles";

const createCellColorContrastVariants = ( color: AliasSolid ) => [
    {
        color: color,
        contrast: "regular",
        css: {
            background: `$${color}BgBase`,
            color: `$${color}Text`,
        },
    },
    {
        color: color,
        contrast: "solid",
        css: {
            background: `$${color}Solid`,
            color: `$${color}SolidContrast`,
        },
    },
    {
        color: color,
        contrast: "hi",
        css: {
            background: `$${color}Bg`,
            color: `$${color}TextContrast`,
        },
    },
];

const cellStyles = css( {
    padding: "$3 $4",
    textAlign: "left",
    typography: "$bodyMedium",

    variants: {
        color: {
            neutral: {},
            primary: {},
            secondary: {},
            info: {},
            warning: {},
            error: {},
            success: {},
        },
        contrast: {
            regular: {},
            solid: {},
            hi: {},
        },
    },

    compoundVariants: [
        ...createCellColorContrastVariants( "neutral" ),
        ...createCellColorContrastVariants( "primary" ),
        ...createCellColorContrastVariants( "secondary" ),
        ...createCellColorContrastVariants( "info" ),
        ...createCellColorContrastVariants( "success" ),
        ...createCellColorContrastVariants( "error" ),
        ...createCellColorContrastVariants( "warning" ),
    ],

    defaultVariants: {
        color: "neutral",
        contrast: "regular",
    },
} );

export const TableHeaderCell = styled( "th", cellStyles, {} );

export const TableCell = styled( "td", cellStyles );

export const TableRoot = styled( "table", {
    borderRadius: "$2",
    width: "100%",

    variants: {
        gap: {
            0: {
                borderSpacing: "$space$0",
            },
            1: {
                borderSpacing: "$space$1",
            },
            2: {
                borderSpacing: "$space$2",
            },
            3: {
                borderSpacing: "$space$3",
            },
            4: {
                borderSpacing: "$space$4",
            },
            5: {
                borderSpacing: "$space$5",
            },
            6: {
                borderSpacing: "$space$6",
            },
            7: {
                borderSpacing: "$space$7",
            },
            8: {
                borderSpacing: "$space$8",
            },
            9: {
                borderSpacing: "$space$9",
            },
        },
        gapX: {
            0: {
                borderSpacing: "$space$0 0px",
            },
            1: {
                borderSpacing: "$space$1 0px",
            },
            2: {
                borderSpacing: "$space$2 0px",
            },
            3: {
                borderSpacing: "$space$3 0px",
            },
            4: {
                borderSpacing: "$space$4 0px",
            },
            5: {
                borderSpacing: "$space$5 0px",
            },
            6: {
                borderSpacing: "$space$6 0px",
            },
            7: {
                borderSpacing: "$space$7 0px",
            },
            8: {
                borderSpacing: "$space$8 0px",
            },
            9: {
                borderSpacing: "$space$9 0px",
            },
        },
        gapY: {
            0: {
                borderSpacing: "0px $space$0",
            },
            1: {
                borderSpacing: "0px $space$1",
            },
            2: {
                borderSpacing: "0px $space$2",
            },
            3: {
                borderSpacing: "0px $space$3",
            },
            4: {
                borderSpacing: "0px $space$4",
            },
            5: {
                borderSpacing: "0px $space$5",
            },
            6: {
                borderSpacing: "0px $space$6",
            },
            7: {
                borderSpacing: "0px $space$7",
            },
            8: {
                borderSpacing: "0px $space$8",
            },
            9: {
                borderSpacing: "0px $space$9",
            },
        },
    },

    defaultVariants: {
        gap: 0,
    },
} );

export const TableRow = styled( "tr", {} );

export const TableHeader = styled( "thead", {
    [ `& ${TableRow}` ]: {
        typography: "$titleMedium",


        [ `& ${TableCell}` ]: {
            py: "$4",
            "&:first-child": {
                borderTopLeftRadius: "$1",
                borderBottomLeftRadius: "$1",
            },
            "&:last-child": {
                borderTopRightRadius: "$1",
                borderBottomRightRadius: "$1",
            },
        },
    },
} );

export const TableBody = styled( "tbody", {} );

const defaultPropGetter = () => ( {} );

export type CellVariantProps = VariantProps<typeof cellStyles>;

export interface TableWrapperProps extends TableRowProps,
    Omit<ComponentProps<typeof TableRow>, 'key' | 'role'>,
    Omit<Row, 'id'> {}

export interface TableProps<T extends {} = {}>
    extends TableOptions<T>,
        PrimitivePropsWithRef<typeof TableRoot>,
        PropsWithCSS {
    getHeaderProps?: <D extends object>(
        column: HeaderGroup<D>
    ) => Partial<TableHeaderProps & CellVariantProps>;
    getColumnProps?: <D extends object>(
        column: ColumnInstance<D>
    ) => Partial<TableHeaderProps & CellVariantProps>;
    getRowProps?: <D extends object>(
        row: Row<D>
    ) => Partial<TableRowProps & CellVariantProps>;
    getCellProps?: <D extends object>(
        cell: Cell<D>
    ) => Partial<TableCellProps & CellVariantProps>;
    rowWrapper?: ComponentType<TableWrapperProps>
}


export const Table = forwardRef<ElementRef<"table">, TableProps>(
    (
        {
            columns,
            data,
            autoResetHiddenColumns,
            defaultColumn,
            getRowId,
            getSubRows,
            initialState,
            stateReducer,
            useControlledState,
            getHeaderProps = defaultPropGetter,
            getColumnProps = defaultPropGetter,
            getRowProps = defaultPropGetter,
            getCellProps = defaultPropGetter,
            rowWrapper,
            ...props
        },
        ref
    ) => {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable( {
            columns,
            data,
            autoResetHiddenColumns,
            defaultColumn,
            getRowId,
            getSubRows,
            initialState,
            stateReducer,
            useControlledState,
        } );

        return (
            <TableRoot {...props} {...getTableProps()} ref={ref}>
                <TableHeader>
                    {headerGroups.map( ( headerGroup ) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map( ( column ) => (
                                <TableHeaderCell
                                    {...column.getHeaderProps( [
                                        getHeaderProps( column ),
                                        getColumnProps( column ),
                                    ] )}
                                    color="neutral"
                                    contrast="hi"
                                >
                                    {column.render( "Header" )}
                                </TableHeaderCell>
                            ) )}
                        </TableRow>
                    ) )}
                </TableHeader>
                <TableBody {...getTableBodyProps()}>
                    {rows.map( ( row ) => {
                        prepareRow( row );

                        const RowWrapper = rowWrapper ?? Fragment

                        return (
                            <RowWrapper {...row} {...row.getRowProps( getRowProps( row ) )}>
                                <TableRow {...row.getRowProps( getRowProps( row ) )}>
                                    {row.cells.map( ( cell ) => {
                                        return (
                                            <TableCell
                                                {...cell.getCellProps( [
                                                    getRowProps( row ),
                                                    getColumnProps( cell.column ),
                                                    getCellProps( cell ),
                                                ] )}
                                            >
                                                {cell.render( "Cell" )}
                                            </TableCell>
                                        );
                                    } )}
                                </TableRow>
                            </RowWrapper>
                        );
                    } )}
                </TableBody>
            </TableRoot>
        );
    }
);
