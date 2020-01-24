import React from 'react';
import {Todo} from './Todo'
import './TodoList.css'

export class TodoList extends React.Component {

    render(){
        return (  
            <div className={"board"}>
                {this.props.items.map((todo)=>{
                    return(
                    <Todo text={todo.text} priority={todo.pri} dueDate={todo.date}></Todo>
                    )}
                )}
            </div>
        )
    }
    
}