import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.onAdd = this
            .onAdd
            .bind(this);
        this.state = {
            tableValues: [],
            total:""
        }
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    onAdd() {
        if (this.state.description != "" && this.state.description != null || this.state.amount != "" && this.state.amount != null) {
            this.setState( function (state){
                const tableValues = [
                    ...state.tableValues, {
                        "description": state.description,
                        "amount": state.amount
                    }
                ]

                let total = 0;

                for (let i = 0; i < tableValues.length; i++){
                    total += parseInt(tableValues[i].amount);
                }
                return {tableValues, description: '', amount: '',total}
            });
        }
        this.clearFields();
        console.log(this.state)
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
                <section>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        onChange={this
                        .onChange
                        .bind(this)}
                        name="description"/>
                    <br/>
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        onChange={this
                        .onChange
                        .bind(this)}
                        name="amount"/>
                </section>
                <section className="center-align">
                    {this.state != null
                        ? <table>
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this
                                        .state
                                        .tableValues
                                        .map((e, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{e.description}</td>
                                                    <td>{e.amount}</td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        : "is null"
}             

                    <button onClick={this.onAdd}>Add</button>
                    <p>total:{this.state.total}</p>                    
                </section>
            </div>
        );
    }
}

export default App;
