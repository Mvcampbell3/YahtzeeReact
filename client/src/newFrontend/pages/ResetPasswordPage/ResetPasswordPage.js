import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import "./ResetPasswordPage.scss";
import { TextInput } from "../../components/Input";
import Button from "../../components/Button";
import { PinInput } from ".";
import { sendPinAPI, resetPasswordAPI } from "../../../utils/API";

const ResetPasswordPage = (props) => {
    const [displayPinInput, setDisplayPinInput] = useState(true);
    const [pin, setPin] = useState("");
    const [firstPassword, setFirstPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [sendLoginPage, setSendLoginPage] = useState(false);

    const handleBack = () => {
        setSendLoginPage(true);
    };
    const { email } = useParams();

    const handleCheckPin = () => {
        if (pin.length === 6) {
            sendPinAPI(pin, email)
                .then((result) => {
                    if (result.data.updatePass) {
                        setDisplayPinInput(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const handleSendNewPassword = () => {
        if (firstPassword === secondPassword) {
            // send password to BE
            resetPasswordAPI(firstPassword, email)
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <>
            {sendLoginPage && <Redirect to="/login" />}
            <>
                {displayPinInput ? (
                    <div className="reset-password-container container flex-center-simple">
                        <div className="reset-wrapper pin-wrapper">
                            <PinInput pin={pin} setPin={setPin} />
                        </div>
                        <div className="form-action">
                            <Button handleClick={handleBack}>Back</Button>
                            <Button handleClick={handleCheckPin}>
                                Submit Pin
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="reset-password-container container flex-center-simple flex-column">
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
                            <Button handleClick={handleSendNewPassword}>
                                Submit Password
                            </Button>
                        </div>
                    </div>
                )}
            </>
        </>
    );
};

export default ResetPasswordPage;
