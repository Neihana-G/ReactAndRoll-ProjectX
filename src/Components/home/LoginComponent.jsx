import styles from "./LoginComponent.module.css";
import HomePageButtons from "../common/HomePageButtons";
import { useState } from "react";
import LoginInput from "./LoginInput";
import axios from "axios";
import { useAuth } from "../../auth/useAuth";

export default function LoginComponent({ headerImage, header }) {
    const [isLogin, setIsLogin] = useState(true);
    const [hasSignedUp, setHasSignedUp] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loginError, setLoginError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [fullName, setFullName] = useState("");

    const { login } = useAuth();

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const userState =
        header.toLowerCase() == "teachers" ? "teacher" : "student";

    const verifyInput = () => {
        if (password !== confirmPass) {
            return {
                error: true,
                message: "The passwords do not match.",
            };
        } else if (!emailRegex.test(email)) {
            return {
                error: true,
                message: "Invalid email address",
            };
        } else {
            return true;
        }
    };
    const Login = async () => {
        if (!emailRegex.test(email)) {
            console.log("imnvalid email");
            setLoginError("Invalid email address");
        } else if (password == "") {
            console.log("password error");
            setLoginError("Please enter a password");
        } else {
            login(`login-${userState}`, email, password, setLoginError);
        }
    };

    const Signup = () => {
        const verify = verifyInput();
        if (verify?.error) {
            console.log(verify?.message);
            setErrorMessage(verify?.message);
            setIsError(true);
        } else {
            axios
                .post(`http://localhost:4000/api/sign-up-${userState}`, {
                    name: fullName,
                    password,
                    email,
                })
                .then((res) => {
                    if (res.status === 200) {
                        setIsError(false);
                        setHasSignedUp(true);
                    }
                })
                .catch((err) => {
                    setIsError(true);
                    setErrorMessage(err.response.data.message);
                    console.log(err.response.data.message);
                });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            Login();
        } else {
            Signup();
        }
    };

    const changeAction = () => {
        console.log("change");
        setIsLogin(!isLogin);
    };

    return (
        <div className={styles.container}>
            <img src={headerImage} alt="loginModalImage" />
            <h2>{header}</h2>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.formOptions}>
                    <p
                        className={isLogin ? styles.currentOption : undefined}
                        onClick={!isLogin ? changeAction : null}
                    >
                        LOG IN
                    </p>
                    <p
                        className={!isLogin ? styles.currentOption : undefined}
                        onClick={isLogin ? changeAction : null}
                    >
                        SIGN UP
                    </p>
                </div>
                {(!hasSignedUp || isLogin) && (
                    <>
                        {!isLogin && (
                            <LoginInput
                                type="text"
                                placeholder="Full Name"
                                val={fullName}
                                setValue={setFullName}
                            />
                        )}
                        {/* <input type="email" placeholder="Email" id="input-email" /> */}
                        <LoginInput
                            className={styles.input}
                            type="email"
                            placeholder="Email..."
                            setValue={setEmail}
                            val={email}
                        />

                        <LoginInput
                            type="password"
                            placeholder="Password"
                            val={password}
                            setValue={setPassword}
                        />
                        {!isLogin && (
                            <LoginInput
                                type="password"
                                placeholder="Confirm Password"
                                val={confirmPass}
                                setValue={setConfirmPass}
                            />
                        )}
                        <HomePageButtons
                            text={isLogin ? "Log In" : "Sign Up"}
                            width="60%"
                            style="fill"
                        />
                    </>
                )}
                {hasSignedUp && !isLogin ? (
                    <p className={styles.successMessage}>
                        Account created successfully!
                    </p>
                ) : null}
                {isError && !isLogin ? (
                    <p className={styles.errorMessage}>{errorMessage}</p>
                ) : null}
                {loginError != "" && isLogin ? (
                    <p className={styles.errorMessage}>{loginError}</p>
                ) : null}
            </form>
        </div>
    );
}
