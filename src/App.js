import "./App.css";
import { Main } from "./components/Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removePic,
  addPic,
  loadComments,
  loadPics,
  addComment,
  startAddingPic,
  startLoadingPic,
  startRemovingPic,
  startAddingComment,
  startLoadingComments
} from "../src/components/redux/actions";

function mapStateToProps(state) {
  return {
    pics: state.pics,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      removePic,
      addPic,
      loadComments,
      loadPics,
      addComment,
      startAddingPic,
      startLoadingPic,
      startRemovingPic,
      startAddingComment,
      startLoadingComments
    },
    dispatch
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
