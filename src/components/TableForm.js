import React from "react";

const TableForm = (props) => {
    const {onChange} = props;
    return (
        <div className="Form">
            <div className="input-field">
                <label htmlFor="description">Description</label>
                <input type="text" onChange={onChange} name="description"/>
            </div>
            <div className="input-field">
                <label htmlFor="amount">Amount</label>
                <input type="number" onChange={onChange} name="amount"/>
            </div>
            <div className="input-field">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" onChange={onChange}/>
            </div>
        </div>
    );
}

export default TableForm;