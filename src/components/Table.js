import React from "react";

const Table = (props) => {
    console.log(props);
    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {props
                    .tableValues
                    .map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{e.description}</td>
                                <td>${e.amount | 0} </td>
                                <td>{e.date}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default Table;