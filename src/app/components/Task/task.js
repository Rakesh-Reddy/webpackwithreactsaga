import React from 'react';
import './task.css';

const TaskData = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th><b>Id</b></th>
          <th><b>Repo Name</b></th>
          <th><b>Number of Stars</b></th>
          <th><b>Number of Forks</b></th>
        </tr>
      </thead>

      <tbody>
        {props.list.map((item, i) => {

          return (
            <tr key={item.id}>
            <td>{i+1}</td>
              <td><b>{item.name}</b></td>

              <td>{item.stargazers_count}</td>

              <td>{item.forks_count}</td>

            </tr>
          )
        })}

      </tbody>
    </table>
  );
}

export default TaskData;

