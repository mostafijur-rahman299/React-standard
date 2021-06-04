import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {

  const [tasks, setTasks] = useState([]);

  const {isLoading, error, sendRequests: fetchTasks} = useHttp();

  useEffect(() => {
    const transformTask = taskObj=> {      
      setTasks(taskObj);
    }

    fetchTasks({url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'}, transformTask);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      {/* <NewTask onAddTask={taskAddHandler} /> */}
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
