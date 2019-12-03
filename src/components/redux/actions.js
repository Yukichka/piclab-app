import database from "../services/firebase";

export function startAddingPic(pic) {
  return dispatch => {
    return database
      .ref("pics")
      .update({ [pic.id]: pic })
      .then(() => {
        dispatch(addPic(pic));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startLoadingPic() {
  return dispatch => {
    return database
      .ref("pics")
      .once("value")
      .then(snapshot => {
        let pics = [];
        snapshot.forEach(childSnapshot => {
          pics.push(childSnapshot.val());
        });
        dispatch(loadPics(pics));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function startAddingComment(comment, picId) {
  return dispatch => {
    return database
      .ref(`comments/${picId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, picId));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export function startLoadingComments() {
  return dispatch => {
    return database
      .ref("comments")
      .once("value")
      .then(snapshot => {
        let comments = {};
        snapshot.forEach(childSnapshot => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadComments(comments));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function startRemovingPic(idx, id) {
  return dispatch => {
    return database
      .ref(`pics/${id}`)
      .remove()
      .then(() => {
        dispatch(removePic(idx));
      })
      .catch(error => {
        console.log(error);
      });
  };
}

//remove
export function removePic(idx) {
  return {
    type: "REMOVE_PIC",
    idx
  };
}

//add
export function addPic(pic) {
  return {
    type: "ADD_PIC",
    pic
  };
}

//comment
export function addComment(comment, picId) {
  return {
    type: "ADD_COMMENT",
    comment,
    picId
  };
}

//load
export function loadPics(pics) {
  return {
    type: "LOAD_PICS",
    pics
  };
}
export function loadComments(comments) {
  return {
    type: "LOAD_COMMENTS",
    comments
  };
}
