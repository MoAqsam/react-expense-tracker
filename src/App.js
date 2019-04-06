import React, {Component} from 'react';
import './App.css';

import Table from './components/Table';
import TableForm from './components/TableForm';
class App extends Component {

    constructor(props) {
        super(props);
        this.onAdd = this
            .onAdd
            .bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            tableValues: [],
            total: 0
        }
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    onAdd() {
        if ((this.state.description !== undefined || this.state.amount !== undefined) && (this.state.description !== "" || this.state.amount !== "")) {
            this
                .setState(function (state) {
                    const tableValues = [
                        ...state.tableValues, {
                            "description": state.description,
                            "amount": state.amount | 0,
                            "date" : state.date
                        }
                    ]
                    let total = 0;
                    for (let i = 0; i < tableValues.length; i++) {
                        total += parseInt(tableValues[i].amount);
                    }
                    return {tableValues, description: '', amount: '', total}
                });
        }
        this.clearFields();
    }

    clearFields() {
        let val = document.querySelectorAll("input");
        val.forEach(e => {
            e.value = "";
        });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>expense tracker</h1>
                </header>
                {/* top form */}
                <section>
                  <TableForm onChange={this.onChange}/>
                  <button onClick={this.onAdd}>Add</button>
                    <p>total:${this.state.total}</p>
                </section>
                {/* Table Component */}
                <section className="center-align">
                    {this.state != null
                        ? <Table {...this.state}/>
                        : "is null"}                  
                </section>
            </div>
        );
    }
}

export default App;
