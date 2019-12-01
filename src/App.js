import "./App.css";
import { Main } from "./components/Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removePic, addPic, addComment } from "../src/components/redux/actions";

function mapStateToProps(state) {
  return {
    pics: state.pics,
    comments : state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removePic, addPic, addComment}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
