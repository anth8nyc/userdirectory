import React from "react";
import "./style.css";

function UserResults(props) {
  return (
    <table>
    <tr>
      <th>username</th>
      <th>firstname</th>
      <th>lastname</th>
    </tr>
    
    {props.results.map(result => (
    
    
    // className="list-group-item
      <tr key={result.login.username}>
        <td>{result.login.username}</td>  
        <td>{result.name.first}</td>  
        <td>{result.name.last}</td>  
        {/* <img alt="User" src={result.picture[2]} className="img-fluid" /> */}
      </tr>

    ))}
    </table>

  );
}

export default UserResults;


<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>