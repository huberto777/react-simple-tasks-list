class App extends React.Component {
  state = {
    tasks: ["praca", "zakupy", "dom", "sen"],
    task: "",
    input: ""
  };

  addTask = task => {
    if (task.length < 3) return;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task],
      task: ""
    }));
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
    // console.log(e.target.value);
  };

  deleteTask = key => {
    // console.log("delete");
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task[index] === key);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  searchTask = e => {
    this.setState({
      input: e.target.value.toLowerCase()
    });
    // console.log(e.target.value);
  };

  render() {
    return (
      <>
        <h4> Lista zadań </h4>
        <div className="content">
          <AddTask
            value={this.state.task}
            change={this.handleChange}
            add={this.addTask}
          />

          <TasksList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            value={this.state.input}
            input={this.searchTask}
          />
        </div>
      </>
    );
  }
}
