import { FaTimes } from "react-icons/fa";
import React from "react";

interface Props {
  task: any,
  onDelete: (id: number) => JSX.Element,
  onToggle: (id: number) => JSX.Element
}

const Task :React.FC<Props> = ({ task, onDelete, onToggle }) => {
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
};

export default Task;

// export default class Task extends React.Component {
//   render() {
//     const { task, onDelete, onToggle } = this.props;
//     return (
//       <div
//         className={`task ${task.reminder ? `reminder` : ""}`}
//         onDoubleClick={() => onToggle(task.id)}
//       >
//         <h3>
//           {task.text}{" "}
//           <FaTimes
//             style={{ color: "red", cursor: "pointer" }}
//             onClick={() => onDelete(task.id)}
//           />
//         </h3>
//         <p>{task.day}</p>
//       </div>
//     );
//   }
// }
