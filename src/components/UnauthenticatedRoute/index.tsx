import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { authenticateUser } from "../../actions";

const querystring = (name, url = window.location.href) => {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const UnauthenticatedRoute = ({ component: C, ...rest }) => {
  const redirect = querystring("redirect");
  return (
    <Route
      {...rest}
      render={props =>
        !props.isAuthenticated
          ? <C {...props} />
          : <Redirect
              to={redirect === "" || redirect === null ? "/" : redirect}
            />}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  userHasAuthenticated: isAuthenticated => dispatch(authenticateUser(isAuthenticated))
})

export default connect(mapStateToProps, mapDispatchToProps)(UnauthenticatedRoute);
