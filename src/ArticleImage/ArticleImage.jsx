import React from "react";
//import PropTypes from "prop-types";
import styles from "./ArticleImage.module.css";

const ArticleImage = (props) => {
    return (
        <div >
            <img src={props.url} alt="a show about title" className={styles.img} />
        </div>

    );
};


export default ArticleImage;

