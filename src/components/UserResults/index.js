import React from "react";
import "./style.css";

function UserResults(props) {

  let handleClick = props.handleClick;
  let searched = props.search;
  let employees = props.results;

  console.log(employees)
  
  employees  = employees.filter((employee) => 

    employee.name.first.toLowerCase().includes(searched.toLowerCase()) === true || 
    employee.name.last.toLowerCase().includes(searched.toLowerCase()) === true
  );

  if ( props.sortAorD === "Asce") {
    
    console.log("Ascend")
    employees.sort((a,b) => {
      if(a.name.first > b.name.first) {return 1}
      if(a.name.first < b.name.first) {return -1}
      return 0
    })
    
  } else if (props.sortAorD === "Desc") {
    
    console.log("Descend")
    employees.sort((a,b) => {
      if(a.name.first > b.name.first) {return -1}
      if(a.name.first < b.name.first) {return 1}
      return 0
    })

  } else {
    
    console.log("Default")
  }

  console.log(employees)

  return (

    <table className="table table-striped rounded">
      
    <thead>
    <tr>
      <th scope="col">User </th>
      <th scope="col">Name <button className="btn" onClick={handleClick}>🔃</button></th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col"> DOB</th>
    </tr>
    </thead>

    <tbody>
      {employees.map(result => (
        
        <tr key={result.login.username  } className="rounded" >
          <td><img alt="User" src={result.picture.large} className="img-fluid rounded" /></td>
          <td>{result.name.first} {result.name.last}</td>  
          <td><a href={result.email}>{result.email}</a></td>  
          <td>{result.phone}</td>  
          <td>{result.dob.date}</td>  
        </tr>
      ))}
    </tbody>

    </table>

  );
}

export default UserResults;