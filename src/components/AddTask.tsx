import { useState } from "react";
import React from "react";

interface Props {
  onAdd: any,
}

const AddTask :React.FC<Props>  = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState<any>(false);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          placeholder="Add"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        ></input>
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
};

export default AddTask;

// export default class Task extends React.Component {
//   render() {
//     const { onAdd } = this.props;

//     const [text, setText] = useState("");
//     const [day, setDay] = useState("");
//     const [reminder, setReminder] = useState(false);

//     const onSubmit = (e) => {
//       e.preventDefault();

//       if (!text) {
//         alert("Please add a task");
//         return;
//       }
//       onAdd({ text, day, reminder });
//       setText("");
//       setDay("");
//       setReminder(false);
//     };

//     return (
//       <form className="add-form" onSubmit={onSubmit}>
//         <div className="form-control">
//           <label>Task</label>
//           <input
//             type="text"
//             placeholder="Add"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           ></input>
//         </div>
//         <div className="form-control">
//           <label>Day & Time</label>
//           <input
//             type="text"
//             placeholder="Add Day & Time"
//             value={day}
//             onChange={(e) => setDay(e.target.value)}
//           ></input>
//         </div>
//         <div className="form-control form-control-check">
//           <label>Set Reminder</label>
//           <input
//             type="checkbox"
//             checked={reminder}
//             placeholder="Add"
//             value={reminder}
//             onChange={(e) => setReminder(e.currentTarget.checked)}
//           ></input>
//         </div>
//         <input
//           type="submit"
//           value="Save Task"
//           className="btn btn-block"
//         ></input>
//       </form>
//     );
//   }
// }
