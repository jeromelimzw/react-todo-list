import React, { Component } from "react";

class TodoCreationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  addTodo = () => {
    const trimmedString = this.state.value.trim();
    if (trimmedString.length !== 0) {
      this.props.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    const { onChange, addTodo } = this;
    return (
      <span className="flex justify-center">
        <input
          type="text"
          placeholder="add todos here..."
          className="br3 w-50 tc pa2 mh2 shadow-5 bg-near-white fw7"
          value={this.state.value}
          onChange={onChange}
        />
        <i
          className="fas fa-plus-circle f2 green grow-large flex self-center pointer br-100 shadow-5"
          onClick={addTodo}
        />
      </span>
    );
  }
}

export default TodoCreationBar;
