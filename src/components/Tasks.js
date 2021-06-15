import Task from "./Task";
// import React from "react";

const Tasks = ({ tasks, onDelete, onToggle }) => {
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
