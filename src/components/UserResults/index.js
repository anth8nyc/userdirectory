import React from "react";
import "./style.css";

function UserResults(props) {
  return (
    <table className="table table-striped">
    <tr>
      <th scope="col">User </th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col"> DOB</th>
    </tr>
    
    {props.results.map(result => (
    // className="list-group-item
      <tr key={result.login.username}>
        <td><img alt="User" src={result.picture.large} className="img-fluid" /></td>
        <td>{result.name.first} {result.name.last}</td>  
        <td><a href={result.email}>{result.email}</a></td>  
        <td>{result.phone}</td>  
        <td>{result.dob.date}</td>  
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