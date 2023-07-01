import React, { useState } from "react";
import "./new-goals.css";

const NewGoals = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();
    const newGoalData = {
      id: Math.random(),
      text: enteredText,
    };
    props.onAddGoal(newGoalData);
    setEnteredText("");
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <>
      <form className="new-goal-form" onSubmit={addGoalHandler}>
        <input
          type="text"
          id="AddGoals"
          value={enteredText}
          onChange={textChangeHandler}
        />
        <button type="submit">Add Goal</button>
      </form>
    </>
  );
};

export default NewGoals;
