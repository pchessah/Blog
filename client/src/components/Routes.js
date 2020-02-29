import React from "react";
import Home from "./pages/Home";
import ArticleList from "./articles/ArticleList";
import ArticleAdd from "./articles/ArticleAdd";
import ArticleEdit from "./articles/ArticleEdit";
import ArticleInfo from "./articles/ArticleInfo";
import { Switch, Route } from "react-router-dom";

function RoutesMain() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={ArticleList} />
      <Route exact path="/articles/new" component={ArticleAdd} />
      <Route exact path="/articles/:_id/edit" component={ArticleEdit} />
      <Route exact path="/articles/:_id" component={ArticleInfo} />
    </Switch>
  );
}

export default RoutesMain;
