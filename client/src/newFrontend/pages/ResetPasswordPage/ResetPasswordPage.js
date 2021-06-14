import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./ResetPasswordPage.scss";
import { TextInput } from "../../components/Input";
import Button from "../../components/Button";

const ResetPasswordPage = (props) => {
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [sendLoginPage, setSendLoginPage] = useState(false);

    const handleBack = () => {
        setSendLoginPage(true);
    };

    return (
        <div className="reset-password-container">
            {sendLoginPage && <Redirect to="/login" />}
            <h1 className="text-center">Reset Password</h1>
            <TextInput
                label="New Password"
                type="password"
                autoComplete="new-password"
                value={firstPassword}
                setValue={setFirstPassword}
                validate={true}
                validationType="password"
                icon="fas fa-lock"
            />
            <TextInput
                label="Confirm Password"
                type="password"
                autoComplete="new-password"
                value={secondPassword}
                setValue={setSecondPassword}
                validate={true}
                validationType="confirm-password"
                icon="fas fa-lock"
                confirmString={firstPassword}
            />
            <div className="form-action">
                <Button handleClick={handleBack}>Back</Button>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
