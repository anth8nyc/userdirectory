import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import UserSearchForm from "../components/UserSearchForm";
import UserResults from "../components/UserResults";
import Alert from "../components/Alert";

class UserSearch extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUsers()
      // .then(res => console.log(res))
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    console.log(event.target.name)
    console.log(event.target.value)
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  

    // let currentRoster = 
    
    // this.setState({results: this.state.results.filter(result => 
      
    //   result.name.first.toLowerCase().includes(event.target.value.toLowerCase()) === true ||
    //   result.name.last.toLowerCase().includes(event.target.value.toLowerCase()) === true 
    // )})

  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getUsers(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search Users!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <UserSearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <UserResults search={this.state.search} results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default UserSearch;
