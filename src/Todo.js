import React from 'react';
import './Todo.css'

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (
            <div className={"post-it"}>
                <h1 className={"line"}>{this.props.text}</h1>
                <h2 className={"line"}>{this.props.priority}</h2>
                <h4 className={"line"}>{this.props.dueDate}</h4>
            </div>  
            
        );
    }

}