import styles from "./LoginComponent.module.css";
import HomePageButtons from "../common/HomePageButtons";
import { useState } from "react";

export default function LoginComponent({ headerImage, header }) {
    const [isLogin, setIsLogin] = useState(true);

    const changeAction = () => {
        console.log("change");
        setIsLogin(!isLogin);
    };

    return (
        <div className={styles.container}>
            <img src={headerImage} alt="loginModalImage" />
            <h2>{header}</h2>
            <form>
                <div className={styles.formOptions}>
                    <p
                        className={isLogin && styles.currentOption}
                        onClick={!isLogin ? changeAction : null}
                    >
                        LOG IN
                    </p>
                    <p
                        className={!isLogin && styles.currentOption}
                        onClick={isLogin ? changeAction : null}
                    >
                        SIGN UP
                    </p>
                </div>
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        id="input-name"
                    />
                )}
                <input type="email" placeholder="Email" id="input-email" />
                <input type="password" placeholder="Password" id="input-pass" />
                {!isLogin && (
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        id="input-confirm-pass"
                    />
                )}
                <HomePageButtons
                    text={isLogin ? "Log In" : "Sign Up"}
                    width="60%"
                    style="fill"
                />
            </form>
        </div>
    );
}
