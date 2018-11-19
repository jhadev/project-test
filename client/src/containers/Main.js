import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Main extends Component {
  state = {
    isLoggedIn: true,
    username: "",
    description: "",
    amount: 0,
    date: "",
    income: true
  };

  // Check login status on load
  componentDidMount() {
    this.loginCheck();
  }

  // Check login status
  loginCheck = () => {
    API.loginCheck()
      .then(res =>
        this.setState({
          isLoggedIn: res.data.isLoggedIn,
          username: res.data.username
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ isLoggedIn: false });
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.description && this.state.amount && this.state.date &&this.state.income) {
      API.budgetPost({
        description: this.state.description,
        amount: this.state.amount,
        date: this.state.date,
        income: this.state.income,
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  render() {
    // If user isn't logged in, don't let them see this page
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <form>
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <Input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Amount (required)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (Optional)"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.amount && this.state.date &&this.state.income)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
    );
  }
}

export default Main;
