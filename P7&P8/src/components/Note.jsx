import React from "react";

function Note(props) {
  return (
    <>
    <div className="note">
      <div className="note2">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
      <button onClick={() => props.onDelete(props.id)}>DELETE</button>
    </div>
    </>
  );
}

export default Note;
