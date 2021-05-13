import React from "react";
import "./style.css";

function UserResults(props) {

  let searched = props.search
  let employees = props.results;
  
  console.log(employees)
  
  employees  = employees.filter((employee) => 

    employee.name.first.toLowerCase().includes(searched.toLowerCase()) === true || 
    employee.name.last.toLowerCase().includes(searched.toLowerCase()) === true
  );

  console.log(employees)

  return (
    <table className="table table-striped">
    <tr>
      <th scope="col">User </th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col"> DOB</th>
    </tr>
    
    {employees.map(result => (
      
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