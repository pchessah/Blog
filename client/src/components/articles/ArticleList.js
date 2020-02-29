import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      try {
        const response = await axios.get("/api/articles");
        setArticles(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }

    getArticles();
  }, []);

  return (
    <div>
      <h2>
        Articles
        <Link to="/articles/new" className="btn btn-primary float-right">
          Create New Article
        </Link>
      </h2>
      <br />
      <hr />
      {articles.map(article => {
        return (
          <div key={article._id}>
            <h4>
              <Link to={`/articles/${article._id}`}>{article.title}</Link>
            </h4>
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default ArticleList;
