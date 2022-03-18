import React, { Component } from 'react'
import './Todo.css';

export class Todo extends Component {
    state = {
        input: "",
        items :[]
    }
    handleChange = (event) => {
        this.setState({
            input : event.target.value
        })
    };

    storeItems =()=>{
        const {input}= this.state;
        const allItems = this.state.items;
        allItems.push(input);
        this.setState({
            items:allItems
        })
    };

    render() {
        const {input,items} = this.state;
        return (
            <div className="todo-container">
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input
                        type="text"
                        value={input}
                        onChange={this.handleChange}
                        placeholder="Enter Items..."
                    />
                </form>
                <ul>
                    <li>
                        Items 
                    </li>
                </ul>
            </div>
        )
    }
}
export default Todo;