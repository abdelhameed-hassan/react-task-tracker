import React from "react";
import { Task as TaskModel } from "../models/Task";
import Task from "./Task";

interface Props {
  tasks: TaskModel[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default class Tasks extends React.Component<Props> {
  render() {
    const { tasks, onDelete, onToggle } = this.props;
    return (
      <>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </>
    );
  }
}

// const Tasks :React.FC<Props> = ({ tasks, onDelete, onToggle }) => {
//   return (
//     <>
//       {tasks.map((task: TaskModel) => (
//         <Task
//           key={task.id}
//           task={task}
//           onDelete={onDelete}
//           onToggle={onToggle}
//         />
//       ))}
//     </>
//   );
// };

// export default Tasks;
