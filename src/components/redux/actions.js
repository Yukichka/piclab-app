//remove
export function removePic(idx) {
  return {
    type: "REMOVE_PIC",
    index: idx
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
