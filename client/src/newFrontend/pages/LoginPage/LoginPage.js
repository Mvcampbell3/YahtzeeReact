import React, { useState } from "react";
import PropTypes from "prop-types";
import "./LoginPage.scss";

import { TextInput } from "../../components/Input";
import Button from '../../components/Button';

const LoginPage = (props) => {
    // const {
    //     user,
    //     username,
    //     createUser,
    //     loginUser,
    //     logoutUser
    // } = props;

    const [email, setEmail] = useState("");
    const [inputUsername, setInputUsername] = useState("");
    const [password, setPassword] = useState("");

    const createTextInputProps = (
        type,
        label,
        value,
        setValue,
        autoComplete,
    ) => {
        return {
            type,
            label,
            value,
            setValue,
            autoComplete,
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container flex-center-simple">
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
                        )}
                    />
                    <TextInput
                        {...createTextInputProps(
                            "text",
                            "Username",
                            inputUsername,
                            setInputUsername,
                            "none",
                        )}
                    />
                    <TextInput
                        {...createTextInputProps(
                            "password",
                            "Password",
                            password,
                            setPassword,
                            "new-password",
                        )}
                    />
                </div>

                <div className="form-section background-main box-shadow-main">
                        <Button>Signup</Button>
                        <Button>Submit</Button>
                </div>
            </form>
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
