import React from "react";

function TodoItem({ title, status, handleItemBtnClick }) {
  return (
    <>
      title: {title} <br />
      status: {status} <br />
      <button type="text" onClick={handleItemBtnClick(title)}>Btn</button><br /><br/>
    </>
  );
}

export default TodoItem;
