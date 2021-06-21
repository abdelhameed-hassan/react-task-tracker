// import { useState } from "react";
import React from "react";

interface Props {
  onAdd: (text: string, day: string, reminder: boolean) => void;
}

interface State {
  text: string;
  day: string;
  reminder: boolean;
}

export default class Task extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: "",
      day: "",
      reminder: false,
    };
  }

  onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!this.state.text) {
      alert("Please add a task");
      return;
    }
    this.props.onAdd(this.state.text, this.state.day, this.state.reminder);
    this.setState({ text: "", day: "", reminder: false });
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
          ></input>
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={this.state.day}
            onChange={(e) => this.setState({ day: e.target.value })}
          ></input>
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={this.state.reminder}
            placeholder="Add"
            value={this.state.reminder ? 1 : 0}
            onChange={(e) =>
              this.setState({ reminder: e.currentTarget.checked })
            }
          ></input>
        </div>
        <input
          type="submit"
          value="Save Task"
          className="btn btn-block"
        ></input>
      </form>
    );
  }
}

// const AddTask :React.FC<Props>  = ({ onAdd }) => {
//   const [text, setText] = useState("");
//   const [day, setDay] = useState("");
//   const [reminder, setReminder] = useState<any>(false);

//   const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!text) {
//       alert("Please add a task");
//       return;
//     }
//     onAdd({ text, day, reminder });
//     setText("");
//     setDay("");
//     setReminder(false);
//   };

//   return (
//     <form className="add-form" onSubmit={onSubmit}>
//       <div className="form-control">
//         <label>Task</label>
//         <input
//           type="text"
//           placeholder="Add"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         ></input>
//       </div>
//       <div className="form-control">
//         <label>Day & Time</label>
//         <input
//           type="text"
//           placeholder="Add Day & Time"
//           value={day}
//           onChange={(e) => setDay(e.target.value)}
//         ></input>
//       </div>
//       <div className="form-control form-control-check">
//         <label>Set Reminder</label>
//         <input
//           type="checkbox"
//           checked={reminder}
//           placeholder="Add"
//           value={reminder}
//           onChange={(e) => setReminder(e.currentTarget.checked)}
//         ></input>
//       </div>
//       <input type="submit" value="Save Task" className="btn btn-block"></input>
//     </form>
//   );
// };

// export default AddTask;
