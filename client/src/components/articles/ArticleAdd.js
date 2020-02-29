import React, { useState } from "react";
import axios from "axios";

function ArticleAdd(props) {
  const initialState = { title: "", content: "" };
  const [article, setArticle] = useState(initialState);

  const handleChange = event => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!article.title || !article.content) return;
    async function postArticle() {
      try {
        const response = await axios.post("/api/articles", article);
        props.history.push(`/articles/${response.data._id}`);
      } catch (error) {
        console.log("error", error);
      }
    }
    postArticle();
  };

  const handleCancel = () => {
    props.history.push("/articles");
  };

  return (
    <div>
      <h1>Create Article</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={article.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            name="content"
            rows="5"
            value={article.content}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ArticleAdd;
