import React from "react";

const ArticleListItem = (props) => {
    
  return (

      <header>
        <h1>{props.title}</h1>
        <time datetime={props.timeStamp}>{props.displayDate}</time>
        <p> {props.shortText}</p>
      </header>
  );
};

export default ArticleListItem;
