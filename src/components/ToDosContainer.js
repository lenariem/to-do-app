import React from 'react'
import ToDoItem from "./ToDoItem";

export default class ToDosContainer extends React.Component{

    //possible to use without constructor

    constructor(props) {
        super(props);
        this.state = {
            InputText: ""
        }
    }
    
    formSubmitted = (e) => {
        e.preventDefault()
        if(this.state.InputText.trim() !==""){
            this.props.AddItemProps(this.state.InputText)
            this.setState({
                InputText: "" 
            })    
        }
        
    }

    

    render() {
        const todosItem = this.props.toDosProps.map(task => {
            return (
                /* we need key because map made a new array and we need unique keys for this new items in new array */
                <ToDoItem key={task.id} taskProps={task} updateItemProps=
            {this.props.updateItemProps} deleteItemProps={this.props.deleteItemProps}/>
            );
    }) 
    
    return (
        <div className="todos-container">
            {/* onSubmit use in form!not in input */}
            <form className="todo-form" onSubmit={this.formSubmitted}>
                <label className="input-item">
                    <input 
                    type="text"
                    name="todo"
                    value = {this.state.InputText}
                    onChange={e => this.setState({InputText: e.target.value})}
                    
                    />
                </label>
                <input 
                    className="btn"
                    type="submit"
                    value="ADD"
                />
            </form>
            <div className="todos">
                <h3>TO DO</h3>
                {todosItem}
            </div>
        </div>
        )
    }
}
