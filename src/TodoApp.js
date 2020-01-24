import React from 'react';
import {TodoList} from './TodoList'

class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '', pri:'' };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeP = this.handleChangeP.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <br/>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What needs to be done?
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <input
              id="new-todo-p"
              onChange={this.handleChangeP}
              value={this.state.pri}
            />
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
    handleChangeP(e) {
        this.setState({ pri: e.target.value });
      }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!(this.state.text.length || this.state.pri.length)) {
        return;
      }
      const newItem = {
        text: this.state.text,
        date: Date.now().toString(),
        pri: this.state.pri
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: '',
        pri: ''
      }));
    }
  }

  export default TodoApp;