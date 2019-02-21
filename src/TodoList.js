import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleCompleted, handleDelete, searchtext }) => {
  return (
    <div className="tc mv3">
      {todos.length === 0 ? (
        <span className="f3 fw7">
          <span className="underline">Rejoice</span>, for your labours are
          complete!{" "}
        </span>
      ) : (
        todos
          .filter(a => a.name.includes(searchtext))
          .map(item => (
            <TodoItem
              name={item.name}
              isCompleted={item.isCompleted}
              key={item.id}
              toggleCompleted={() => {
                toggleCompleted(item.id);
              }}
              handleDelete={() => {
                handleDelete(item.id);
              }}
              id={item.id}
            />
          ))
      )}
    </div>
  );
};

export default TodoList;
