import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function UserSearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        {/* <label htmlFor="user">User:</label> */}
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          list="users"
          type="text"
          className="form-control"
          placeholder="Search"
          id="user"
        />
        {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary">
          New User Set
        </button> */}
      </div>
    </form>
  );
}

export default UserSearchForm;
