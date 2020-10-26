import React from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import {useState} from "react";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [buttonText,setButtonText ] = useState("Show more");
  const[display,setDisplay]=useState("none");

  function change(){
      if(buttonText=="Show more"){
        setButtonText("Show less");
        setDisplay("");
      }else{
        setButtonText("Show more");
        setDisplay("none");
      }
}
  
  return (
    <li>
      <article className={styles.container}>
        <h2 className={styles.heading}>{props.article.title}</h2>
        <p style={{display:display}}> {props.article.shortText}</p>
        <time className={styles.font} dateTime={props.article.timeStamp } style={{display:display}}>
          {props.article.displayDate}
        </time>
        
        
        <ArticleTextToggleButton buttonText={buttonText} onClick={change}/>
      </article>
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
