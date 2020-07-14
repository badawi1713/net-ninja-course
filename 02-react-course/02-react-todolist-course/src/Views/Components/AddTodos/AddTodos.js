import React, { useState } from "react";

const AddTodo = (props) => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 1) {
      alert("Your todo must be not empty!");
      return false;
    }
    let newContent = {
      content: content,
    };
    // console.log(content);
    props.addTodo(newContent);
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="row">
          <div class="input-field ">
            <input
              id="content"
              type="text"
              class="validate"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label for="content">Add New To-Do</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
