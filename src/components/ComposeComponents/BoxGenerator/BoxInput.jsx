import React, { useState } from "react";
import styled from "../BoxGenerator/box.module.css";

function BoxInput({ generateNotify }) {
  const [numInput, setNumInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    generateNotify(numInput);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styled.form}>
      <label className={styled.formLabel}>Num of Box</label>
      <input
        value={numInput}
        onChange={(e) => setNumInput(e.target.value)}
        className={styled.formInput}
      />
      <button type="submit">Generate Box</button>
    </form>
  );
}

export default BoxInput;
