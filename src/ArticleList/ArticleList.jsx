import React, { useEffect, useState } from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem";

const ArticleList = (Articles) => {
  let displayContent;

  if (Object.values(Articles)[0]) {
    displayContent = (
      <ul>
        {Object.values(Articles)[0].map((article) => (
          <li key={article.slug}>{ArticleListItem(article)}</li>
        ))}
      </ul>
    );
  } else {
    displayContent = <div>You have no data!</div>;
  }

  return (
    <section>
      <header>
        
      </header>
      {displayContent}
    </section>
  );
};

export default ArticleList;