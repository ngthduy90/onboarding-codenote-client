import React, { Component } from "react";
import {
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import { Auth } from 'aws-amplify';
import LoaderButton from '../../components/LoaderButton';
import "./index.css";

class Login extends Component {
  constructor(props) {
      super(props);

      this.state = {
          isLoading: false,
          email: "",
          password: ""
      };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleLoginSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message);
    }

    this.setState({ isLoading: false });
  }

  renderForm() {
      return (
        <form onSubmit={this.handleLoginSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      );
    }
  
  render() {
      return (
        <div className="login-container">
          {this.renderForm()}
        </div>
      );
  }
}

export default Login;