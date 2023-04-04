import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import UseHttp from "./hooks/UseHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = UseHttp();
  const transformTask = (tasks) => {
    const loadedTask = [];
    for (const taskKey in tasks) {
      loadedTask.push({ id: taskKey, text: tasks[taskKey].text });
    }
    setTasks(loadedTask);
  };
  useEffect(() => {
    fetchTasks(
      {
        url: "https://learn-react001-default-rtdb.firebaseio.com/tasks.json ",
      },
      transformTask
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
