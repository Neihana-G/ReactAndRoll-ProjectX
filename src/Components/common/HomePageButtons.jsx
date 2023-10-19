import React from "react";
import styles from "./HomePageButtons.module.css";
import { useEffect } from "react";

export default function HomePageButtons({
    text,
    btnAction,
    style,
    width = "20%",
}) {
    return (
        <button
            style={{ width: `${width}` }}
            className={style === "fill" ? styles.fillBtn : styles.outlineBtn}
            onClick={btnAction}
        >
            {text}
        </button>
    );
}
