import React, { Component } from "react";
import "./styles.css";

const axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    // this.apiURL = "https://jsonplaceholder.typicode.com/users";

    this.postURL = "https://jsonplaceholder.typicode.com/posts";
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log("api result ", res);
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log("Error while getting data ", err);
      });
  }

  postData = e => {
    e.preventDefault();
    console.log("post data");
    //  post api
    let data = {
      title: "Test post data ",
      body: "Abhishek Shukla",
      userId: 10
    };
    axios
      .post(this.postURL, data)
      .then(res => {
        console.log("post api data ", res);
      })
      .catch(err => {
        console.log("error in posting data", err);
      });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.postData}>post data</button>
        <pre>{JSON.stringify(this.state.data)}</pre>
      </div>
    );
  }
}

export default App;
