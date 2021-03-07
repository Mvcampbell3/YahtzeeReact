import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { LoginPage } from "./";

import { createUser, loginUser, logoutUser } from "../../../redux/actions";

const LoginPageWrapper = (props) => {
    return <LoginPage {...props} />;
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        username: state.username,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            createUser,
            loginUser,
            logoutUser,
        },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageWrapper);
