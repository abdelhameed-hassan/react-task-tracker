import { FaTimes } from "react-icons/fa";
import React from "react";
import { Task as TaskModel } from "../models/Task";

interface Props {
  task: TaskModel;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default class Task extends React.Component<Props> {
  render() {
    // const { id } = this.props.onDelete;
    const { task, onDelete, onToggle } = this.props;
    return (
      <div
        className={`task ${task.reminder ? `reminder` : ""}`}
        onDoubleClick={() => onToggle(task.id)}
      >
        <h3>
          {task.text}{" "}
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </h3>
        <p>{task.day}</p>
      </div>
    );
  }
}

// const Task :React.FC<Props> = ({ task, onDelete, onToggle }) => {
//   return (
//     <div
//       className={`task ${task.reminder ? `reminder` : ""}`}
//       onDoubleClick={() => onToggle(task.id)}
//     >
//       <h3>
//         {task.text}{" "}
//         <FaTimes
//           style={{ color: "red", cursor: "pointer" }}
//           onClick={() => onDelete(task.id)}
//         />
//       </h3>
//       <p>{task.day}</p>
//     </div>
//   );
// };

// export default Task;
