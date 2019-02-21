import React from "react";

const TodoItem = ({ name, isCompleted, toggleCompleted, handleDelete }) => {
  return (
    <div className=" f2 flex justify-between mv2">
      <div className="flex">
        {isCompleted ? (
          <i className="far fa-times-circle f2 mh4 silver shadow-5 br-100" />
        ) : (
          <i className="far fa-arrow-alt-circle-right f2 mh4 blue shadow-5 br-100" />
        )}
        <span
          className={`${
            isCompleted ? "strike silver" : "blue"
          } flex self-center f3 fw7 `}
        >
          {name.length < 33 ? name : name.substring(0, 28) + "..."}
        </span>
      </div>
      <div className="flex">
        <i
          className="far fa-check-square pointer f2 grow-large mh3 self-end green pointer "
          onClick={toggleCompleted}
        />
        <i
          className="far fa-trash-alt f2 dim light-red pointer"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default TodoItem;
