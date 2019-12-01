import React from "react";

export class AddPic extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const picUrl = event.target.url.value;
    const picNote = event.target.note.value;
    console.log(picUrl, picNote);
    const pic = {
      id: Number(new Date()),
      src: picUrl,
      note: picNote
    };
    if (picNote && picUrl) {
      this.props.addPic(pic);
      this.props.onHistory.push("/");
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="addpic">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Picture url"
            type="text"
            className="add-input"
            name="url"
          ></input>
          <br />
          <input
            placeholder="Note"
            type="text"
            name="note"
            className="add-input"
          ></input>
          <br />
          <button className="add">Add</button>
        </form>
      </div>
    );
  }
}
