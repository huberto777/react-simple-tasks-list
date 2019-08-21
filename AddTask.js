// class AddTask extends React.Component {
//   state = {
//     task: ""
//   };

//   handleChange = e => {
//     this.setState({
//       task: e.target.value
//     });
//     // console.log(e.target.value);
//   };

//   handleClick = () => {
//     const { task } = this.state;
//     if (task.length > 2) {
//       const add = this.props.add(task);
//       if (add) {
//         this.setState({
//           task: ""
//         });
//       }
//     } else {
//       console.log("za krótko");
//     }
//   };

//   render() {
//     return (
//       <>
//         <input
//           type="text"
//           value={this.state.task}
//           onChange={this.handleChange}
//           placeholder="dodaj"
//         />
//         <button onClick={this.handleClick}>zapisz</button>
//       </>
//     );
//   }
// }
const AddTask = props => {
  return (
    <>
      <input
        type="text"
        value={props.value}
        placeholder="dodaj"
        onChange={props.change}
      />
      <button className="addButton" onClick={() => props.add(props.value)}>
        zapisz
      </button>
    </>
  );
};
