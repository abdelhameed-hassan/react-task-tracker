import Task from "./Task";
import React, { PropsWithChildren } from "react";

// interface Props {
//   task: any ,
//   onDelete: any,
//   onToggle: any
// }


const Tasks = ({ tasks, onDelete, onToggle } :any) => {
  return (
    <>
      {tasks.map((task: any) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

// export default class Tasks extends React.Component {
//   render() {
//     const { tasks, onDelete, onToggle } = this.props;
//     return (
//       <>
//         {tasks.map((task) => (
//           <Task
//             key={task.id}
//             task={task}
//             onDelete={onDelete}
//             onToggle={onToggle}
//           />
//         ))}
//       </>
//     );
//   }
// }
