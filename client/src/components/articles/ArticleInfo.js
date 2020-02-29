import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ArticleInfo(props) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function getArticle() {
      try {
        const response = await axios.get(
          `/api/articles/${props.match.params._id}`
        );
        setArticle(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getArticle();
  }, [props]);

  async function handleDelete() {
    try {
      await axios.delete(`/api/articles/${props.match.params._id}`);
      props.history.push("/articles");
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <small>_id: {article._id}</small>
      <p>{article.content}</p>
      <div className="btn-group">
        <Link to={`/articles/${article._id}/edit`} className="btn btn-primary">
          Edit
        </Link>
        <button  disabled onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <Link to="/articles" className="btn btn-secondary">
          Close
        </Link>
    
       
      </div>
      <hr />
      <strong>If you would like to edit or delete blog post contact the admin</strong>
    </div>
  );
}

export default ArticleInfo;
