import styles from "./TaskCard.module.css";
import { Task } from "../model";
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskCard = ({ task, tasks, setTasks }: Props) => {
  const handleDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <form className={styles.card}>
      {task.isCompleted ? (
        <s className={styles.cardText}>{task.task}</s>
      ) : (
        <span className={styles.cardText}>{task.task}</span>
      )}
      <div>
        <span className={styles.icon} onClick={() => handleDelete(task.id)}>
          <AiFillDelete />
        </span>
        <span className={styles.icon} onClick={() => handleComplete(task.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TaskCard;
