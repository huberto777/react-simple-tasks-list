const Task = props => (
  <li data-key={props.index}>
    {props.task}
    <button className="delButton" onClick={() => props.delete(props.index)}>
      del
    </button>
  </li>
);
