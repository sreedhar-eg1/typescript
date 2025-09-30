import { useState } from "preact/hooks";
import CourseGoals from "./CourseGoals";
import Header from "./Header";

import goalsImg from "./assets/goals.jpg";
import NewGoal from "./NewGoal";

export function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Learn TS",
      description: "Learn TS from basic to advance",
    },
    {
      id: 2,
      title: "Learn JS",
      description: "Learn JS from basic to advance",
    },
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function handleGoalAdd(goal: string, summary: string) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random(), title: goal, description: summary },
    ]);
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goal Image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAdd={(goal, summary) => handleGoalAdd(goal, summary)} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
