import { Task } from "../model";
import TaskCard from "./TaskCard";
import styles from "./TasksList.module.css";

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TasksList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map((task) => (
        // <li>{task.task}</li>
        <TaskCard task={task} key={task.id} tasks={tasks} setTasks={setTasks} />
      ))}
    </div>
  );
};

export default TasksList;
