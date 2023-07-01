import React, { useState } from "react";
import "./App.css";
import GoalList from "./Components/GoalsList/GoalList";
import Heading from "./Components/Heading/Heading";
import NewGoals from "./Components/NewGoals/NewGoals";

function App() {
  const [goals, setCourseGoals] = useState([
    { id: 1, text: "First course" },
    { id: 2, text: "Second course" },
    { id: 3, text: "Third course" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoal) => prevCourseGoal.concat(newGoal));
    console.log(goals);
  };
  return (
    <div className="App">
      <Heading />
      <NewGoals onAddGoal={addNewGoalHandler} />
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
