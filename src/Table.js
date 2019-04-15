import React from 'react';
import ReactTable from "react-table";
import './Table.css'

export const Table = ({header, values, columns, size}) => {
    return (
    <div className="table__container">
        <div className="table__header">{header}</div>
        <ReactTable
            data={values}
            header="Users"
            columns={columns}
            defaultPageSize={size||8}
            showPageSizeOptions={false}
            showPagination={false}
            style={{
                height: "150px"
            }}
        />
    </div>
        )


};