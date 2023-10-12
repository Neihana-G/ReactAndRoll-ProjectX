import React from "react";
import styles from "./HomePageButtons.module.css";

export default function HomePageButtons({
    text,
    action,
    style,
    width = "20%",
}) {
    return (
        <button
            style={{ width: `${width}` }}
            className={style === "fill" ? styles.fillBtn : styles.outlineBtn}
            onclick={action && action}
        >
            {text}
        </button>
    );
}
