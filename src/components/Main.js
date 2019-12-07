import React from "react";
import { AddPic } from "./AddPic";
import { Gallery } from "./Gallery";
import { EachPic } from "./EachPic";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class Main extends React.Component {
  componentDidMount() {
    this.props.startLoadingPic();
    this.props.startLoadingComments();
  }
  render() {
    // console.log(this.props);
    return (
      <div className="main">
        <Router>
          <Switch>
            <Route
              path="/addnew"
              render={({ history }) => (
                <AddPic {...this.props} onHistory={history} />
              )}
            />
            <Route
              path="/picture/:picId"
              render={params => <EachPic {...this.props} {...params} />}
            />
            <Route path="/" exact>
              <Gallery {...this.props} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
