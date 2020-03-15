import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { Link } from "react-router-dom";
const items = [
  {
    src:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.sproutsocial.com%2Fuploads%2F2015%2F04%2FWhat-is-an-API.png&f=1&nofb=1",
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1"
  },
  {
    src:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsocialwork.utexas.edu%2Fwp%2Fwp-content%2Fuploads%2FBootCamp.jpeg&f=1&nofb=1",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "",
    key: ""
  },
  {
    src:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbbvaopen4u.com%2Fsites%2Fdefault%2Ffiles%2Fimg%2Fnew%2Fbbva-open4u-que-hace-una-api-por-mi-negocio.png&f=1&nofb=1",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3"
  }
];

function Home() {
  return (
    <>
      {/* <div className="jumbotron">
        <h1>Blog Home</h1>
        <p> CRUD Application for blog entries</p>
      </div> */}
      <Link to="/articles">
        <UncontrolledCarousel className="carousel" items={items}  style={{ height: "50vh" }} />
      </Link>
  
         
    
    </>
  );
}

export default Home;
