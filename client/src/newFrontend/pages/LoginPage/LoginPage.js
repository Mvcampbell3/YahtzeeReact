import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import "./LoginPage.scss";

import { TextInput } from "../../components/Input";
import Button from "../../components/Button";
import {
    signupUserAPI,
    loginUserAPI,
    sendResetEmailAPI,
} from "../../../utils/API";

const LoginPage = (props) => {
    // const { user, username, createUser, loginUser } = props;

    const [email, setEmail] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [password, setPassword] = useState("");
    const [actionLogin, setActionLogin] = useState(true);
    const [actionForgot, setActionForgot] = useState(false);
    const [sendToResetPage, setSendToResetPage] = useState(false);

    const createTextInputProps = (
        type,
        label,
        value,
        setValue,
        autoComplete,
        validate,
        validationType,
        icon = "",
    ) => {
        return {
            type,
            label,
            value,
            setValue,
            autoComplete,
            validate,
            validationType,
            icon,
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, inputUsername, password);
        actionLogin ? handleLogin() : handleSignUp();
    };

    const handleLogin = () => {
        loginUserAPI(email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSignUp = () => {
        signupUserAPI(email, inputUsername, password)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleForgot = (e) => {
        e.preventDefault();
        console.log("forgot clicked");
        setActionForgot(!actionForgot);
    };

    const handleToggleLogin = (e) => {
        e.preventDefault();
        console.log("toggle login");
        setActionLogin(!actionLogin);
    };

    const handleSendReset = () => {
        if (email) {
            sendResetEmailAPI(email)
                .then((result) => {
                    console.log(result);
                    setSendToResetPage(true);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className="container flex-center-simple">
            {sendToResetPage && <Redirect to={`/reset/${email}`} />}
            {actionForgot ? (
                <div className="forgot-container">
                    <p>Do you want to reset your password?</p>
                    <p>
                        Please enter your email and if you have an account with
                        us, a reset password email will be sent to your address
                    </p>
                    <div className="form-section background-main box-shadow-main">
                        <TextInput
                            {...createTextInputProps(
                                "email",
                                "Email",
                                email,
                                setEmail,
                                "email",
                                true,
                                "email",
                                "far fa-envelope",
                            )}
                        />
                    </div>
                    <div className="form-section background-main box-shadow-main form-actions">
                        <Button
                            classes={["login"]}
                            handleClick={(e) => handleForgot(e)}
                        >
                            Back
                        </Button>
                        <Button
                            classes={["login"]}
                            handleClick={handleSendReset}
                        >
                            Send Email
                        </Button>
                    </div>
                </div>
            ) : (
                <form
                    className="form flex-item width-50 max-width-500"
                    onSubmit={handleSubmit}
                >
                    <div className="form-section background-main box-shadow-main">
                        <TextInput
                            {...createTextInputProps(
                                "email",
                                "Email",
                                email,
                                setEmail,
                                "email",
                                true,
                                "email",
                                "far fa-envelope",
                            )}
                        />

                        {!actionLogin && (
                            <TextInput
                                {...createTextInputProps(
                                    "text",
                                    "Username",
                                    inputUsername,
                                    setInputUsername,
                                    "none",
                                    false,
                                    "",
                                    "far fa-user",
                                )}
                            />
                        )}

                        <TextInput
                            {...createTextInputProps(
                                "password",
                                "Password",
                                password,
                                setPassword,
                                "new-password",
                                true,
                                "password",
                                "fas fa-lock",
                            )}
                        />
                        {actionLogin && (
                            <p
                                className="text-center action-text"
                                onClick={(e) => handleForgot(e)}
                            >
                                Need help with your password?
                            </p>
                        )}
                    </div>
                    <div className="form-section background-main box-shadow-main form-actions">
                        <Button
                            classes={["login"]}
                            handleClick={(e) => handleToggleLogin(e)}
                        >
                            {actionLogin
                                ? "Not a member yet?"
                                : "Already a member?"}
                        </Button>
                        <Button classes={["login"]}>
                            {actionLogin ? "Login" : "Sign Up"}
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};

LoginPage.propTypes = {
    user: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    createUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
};

export default LoginPage;
