

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import UseHttp from "../../hooks/UseHttp";
const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = UseHttp();

  const createTaskHandler = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest({
      url: "https://learn-react001-default-rtdb.firebaseio.com/tasks.json ",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { text: taskText },
    }, createTaskHandler.bind(null, taskText));
  };
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
