import React from "react";

export class Comments extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToTop = this.backToTop.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.comment.value;
    this.props.addComment(comment, this.props.id);
    event.target.comment.value = "";
  }
  backToTop(){
    this.props.params.push("/");
  }

  render() {
    console.log(this.props.comments);
    return (
      <div className="comments">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Comment"
            name="comment"
            className="comment-input"
          />
          <input type="submit" hidden />
        </form>
        <div className="comment-field">
          {this.props.comments.map((comment, idx) => {
            return <p key={idx}>{comment}</p>;
          })}
        </div>
      </div>
    );
  }
}
