import { useRef } from "preact/hooks";

interface NewGoalProps {
  onAdd: (goal: string, summary: string) => void;
}

export default function NewGoal({ onAdd }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const enteredGoal = goalRef.current!.value;
    const enteredSummary = summaryRef.current!.value;

    onAdd(enteredGoal, enteredSummary)

    goalRef.current!.value = ""
    summaryRef.current!.value = ""
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input ref={goalRef} type="text" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input ref={summaryRef} type="text" id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
