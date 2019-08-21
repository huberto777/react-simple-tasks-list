const TasksList = props => {
  const tasks = props.tasks.filter(task => task.includes(props.value));
  // console.log(tasks);

  return (
    <>
      <input type="text" placeholder="szukaj" onInput={props.input} />
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} index={index} task={task} delete={props.delete} />
        ))}
      </ul>
    </>
  );
};
