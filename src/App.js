import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoCreationBar from "./TodoCreationBar";
import todos from "./seedData";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos, searchtext: "" };
  }

  toggleCompleted = tarId => {
    let nextState = this.state.todos;
    nextState = nextState.map(item => {
      return item.id === tarId
        ? Object.assign({}, item, { isCompleted: !item.isCompleted })
        : item;
    });
    this.setState({ todos: nextState });
  };

  handleDelete = tarId => {
    let nextState = this.state.todos;
    nextState = nextState.filter(item => {
      return item.id !== tarId;
    });

    this.setState({ todos: nextState.length === 0 ? [] : nextState });
  };

  addTodo = todotext => {
    let nextState = this.state.todos;
    nextState.push({
      name: todotext,
      isCompleted: false,
      id: Math.round(Math.random() * 10000)
    });
    this.setState({ todos: nextState });
  };

  handleFilter = searchtext => {
    this.setState({ searchtext });
  };

  render() {
    const { todos, searchtext } = this.state;
    const { toggleCompleted, handleDelete, addTodo, handleFilter } = this;
    return (
      <React.Fragment>
        <div className=" ba b--light-blue bw3 br4 shadow-5 ma4">
          <div className="bg-lightest-blue ba b--white pa3 bw3 br4 shadow-5">
            <h1 className="tracked-mega tc">&lt;Todo_List/&gt; </h1>
            <TodoCreationBar addTodo={addTodo} />
            <SearchBar handleFilter={handleFilter} />
            <TodoList
              todos={todos}
              toggleCompleted={toggleCompleted}
              handleDelete={handleDelete}
              searchtext={searchtext}
            />
          </div>
        </div>
        <small className="tc fw7">made with react</small>
      </React.Fragment>
    );
  }
}

export default App;
