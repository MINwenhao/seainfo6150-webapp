import { useState } from "react";
import React from "react";
import styles from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
   
    
return (
    <div >
     <button className={styles.container} onClick={props.onClick} ><span className={styles.heading}>{props.buttonText}</span></button>
    </div>
);
}
export default ArticleTextToggleButton;