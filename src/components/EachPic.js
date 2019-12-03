import React from "react";
import { Comments } from "./Comments";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

export class EachPic extends React.Component {
  render() {
    // const id = this.props.match.params.picId;
    const id = Number(this.props.match.params.picId);
    const pics = this.props.pics;
    console.log(pics, id);
    // const pic = this.props.pics.find(pic => pic.id.toString() === id);
    const pic = this.props.pics.find(pic => pic.id === id);
    console.log(pic);
    const comments = this.props.comments[this.props.match.params.picId] || [];
    return (
      <div className="eachpic">
        <Container>
          <Row>
            <Col sm="6" xs="12">
              <Link to="/" className="back-to-top">
                Back
              </Link>
              <img src={`${pic.src}`} alt="" className="each-pic-img" />
              <div className="each-pic-note">Note |{` ${pic.note}`}</div>
              <img src="/imgs/comment.png" alt="" height="16px" />
              <span>
                {" "}
                {this.props.comments[pic.id]
                  ? this.props.comments[pic.id].length
                  : 0}
              </span>
            </Col>
            <Col sm="6" xs="12">
              <Comments
                startAddingComment={this.props.startAddingComment}
                comments={comments}
                id={id}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
