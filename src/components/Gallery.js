import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export class Gallery extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="gallery">
        <Link to="/" className="title">
          <h1>Piclab</h1>
        </Link>
        <div>Create your gallery with Piclab</div>
        <div className="pics-container">
          {this.props.pics.map((pic, idx) => (
            <div className="pic-card" key={idx}>
              <div className="remove" onClick={() => this.props.removePic(idx)}>
                &#x2613; <span>remove</span>
              </div>
              <Link to={`/picture/${pic.id}`}>
                <img src={pic.src} alt="" className="pic-img" />
              </Link>
              <div className="pic-note">{pic.note}</div>
              <Link to={`/picture/${pic.id}`} className="link-to-comment">
                <img src="/imgs/comment.png" alt="" height="16px" />
                <span>{" "}
                  {this.props.comments[pic.id] ? this.props.comments[pic.id].length : 0}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/addnew" className="add">
          <p>&#43; Add new</p>
        </Link>
        <Footer />
      </div>
    );
  }
}
