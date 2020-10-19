import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("http://demo1390455.mockable.io/articles");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);
  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/ArticleList">
              <ArticleList Articles={Array.from(Object.values(fetchedData))}/>  
          </Route>
          <Route >
            <DynamicArticle article={Object.values(fetchedData)[1]} />
          </Route>
      </Switch>

      </Router>
        
    
    </div>
  );

}

export default App;
