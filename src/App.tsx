import React from "react";
// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { CreateTaskPayLoad, Task } from "./models/Task";

// Class Way

interface State {
  tasks: Task[];
  showAddTask: boolean;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tasks: [],
      showAddTask: false,
    };
  }

  // const [showAddTask, setShowAddTask] = useState(false);
  // const [tasks, setTasks]: [Task[], any] = useState([]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     this.setState(tasksFromServer);
  //   };
  //   getTasks();
  // }, []);

  async componentDidMount() {
    const tasksFromServer = await this.fetchTasks();
    this.setState({ tasks: tasksFromServer });
  }

  //Fetch Tasks
  fetchTasks = async (): Promise<Task[]> => {
    const res: Response = await fetch("http://localhost:5000/tasks");
    const data: Task[] = await res.json();

    return data;
  };

  //Fetch Task
  fetchTask = async (id: number): Promise<Task> => {
    const res: Response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data: Task = await res.json();

    return data;
  };

  // Add Task
  addTask = async (task: CreateTaskPayLoad): Promise<void> => {
    const res: Response = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data: Task = await res.json();

    this.setState({ tasks: [...this.state.tasks, data] });
    // const id = Math.floor(Math.random() * 1000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  deleteTask = async (id: number): Promise<void> => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    this.setState({
      tasks: this.state.tasks.filter((tasks: any) => tasks.id !== id),
    });
  };

  // Toggle Reminder
  toggleReminder = async (id: number): Promise<void> => {
    const taskToToggle = await this.fetchTask(id);
    const updateTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();

    this.setState({
      tasks: this.state.tasks.map((task: Task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      ),
    });
  };
  render() {
    return (
      <Router>
        <div className="container">
          <Header
            title="Task Tracker"
            onAdd={(): any =>
              this.setState({ showAddTask: !this.state.showAddTask })
            }
            showAdd={this.state.showAddTask}
          />
          <Route
            path="/"
            exact
            render={(props: any) => (
              <>
                {" "}
                {this.state.showAddTask && (
                  <AddTask
                    onAdd={(text: string, day: string, reminder: boolean) => {
                      this.addTask({ text, day, reminder });
                    }}
                  />
                )}
                {this.state.tasks.length > 0 ? (
                  <Tasks
                    tasks={this.state.tasks}
                    onDelete={this.deleteTask}
                    onToggle={this.toggleReminder}
                  />
                ) : (
                  "No Tasks To Show"
                )}
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

// Function Way
// const App: React.FC = () => {
//   const [showAddTask, setShowAddTask]  = useState(false);
//   const [tasks, setTasks]: [Task[], any] = useState([]);

//   useEffect(() => {
//     const getTasks = async () => {
//       const tasksFromServer = await fetchTasks();
//       setTasks(tasksFromServer);
//     };
//     getTasks();
//   }, []);

//   //Fetch Tasks
//   const fetchTasks = async (): Promise<Task[]> => {
//     const res: Response = await fetch("http://localhost:5000/tasks");
//     const data: Task[] = await res.json();

//     return data;
//   };

//   //Fetch Task
//   const fetchTask = async (id: number): Promise<Task> => {
//     const res: Response = await fetch(`http://localhost:5000/tasks/${id}`);
//     const data: Task = await res.json();

//     return data;
//   };

//   // Add Task
//   const addTask = async (task: CreateTaskPayLoad): Promise<void> => {
//     const res: Response = await fetch("http://localhost:5000/tasks", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(task),
//     });

//     const data: Task = await res.json();

//     setTasks([...tasks, data]);
//     // const id = Math.floor(Math.random() * 1000) + 1;
//     // const newTask = { id, ...task };
//     // setTasks([...tasks, newTask]);
//   };

//   // Delete Task
//   const deleteTask = async (id: number): Promise<void> => {
//     await fetch(`http://localhost:5000/tasks/${id}`, {
//       method: "DELETE",
//     });
//     setTasks(tasks.filter((tasks: any) => tasks.id !== id));
//   };

//   // Toggle Reminder
//   const toggleReminder = async (id: number): Promise<void> => {
//     const taskToToggle = await fetchTask(id);
//     const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

//     const res = await fetch(`http://localhost:5000/tasks/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(updateTask),
//     });

//     const data = await res.json();

//     setTasks(
//       tasks.map((task: Task) =>
//         task.id === id ? { ...task, reminder: data.reminder } : task
//       )
//     );
//   };

//   return (
//     <Router>
//       <div className="container">
//         <Header
//           title="Task Tracker"
//           onAdd={(): any => setShowAddTask(!showAddTask)}
//           showAdd={showAddTask}
//         />
//         <Route
//           path="/"
//           exact
//           render={(props: any) => (
//             <>
//               {" "}
//               {showAddTask && <AddTask onAdd={addTask} />}
//               {tasks.length > 0 ? (
//                 <Tasks
//                   tasks={tasks}
//                   onDelete={deleteTask}
//                   onToggle={toggleReminder}
//                 />
//               ) : (
//                 "No Tasks To Show"
//               )}
//             </>
//           )}
//         />
//         <Route path="/about" component={About} />
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
