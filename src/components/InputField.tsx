import style from "./InputField.module.css";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleTask: (e: React.FormEvent) => void;
}

const InputField = ({ task, setTask, handleTask }: Props) => {
  return (
    <form className={style.inputForm} onSubmit={handleTask}>
      <input
        className={style.input}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="input"
        placeholder="Enter a task"
      />
      <button className={style.inputBtn}>Add</button>
    </form>
  );
};

export default InputField;
