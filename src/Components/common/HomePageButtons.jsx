import React from "react";
import styles from "./HomePageButtons.module.css";

export default function HomePageButtons({
    text,
    action,
    style,
    width = "20%",
}) {
    const handleButton = (e) => {
        e.preventDefault()
        console.log('testing')
        if(action){
            action();
        }
        
    }
    return (
        <button
            style={{ width: `${width}` }}
            className={style === "fill" ? styles.fillBtn : styles.outlineBtn}
            onclick={(e) => handleButton(e)}
        >
            {text}
        </button>
    );
}
