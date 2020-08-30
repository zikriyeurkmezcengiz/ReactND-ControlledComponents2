import React from "react";
import PropTypes from "prop-types";

function CreateNewItem(props) {
  const { value, handleChange, inputIsEmpty, addItem } = props;
  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        placeholder="Enter New Item"
        value={value}
        onChange={handleChange}
      />
      <button disabled={inputIsEmpty}>Add</button>
    </form>
  );
}

CreateNewItem.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  inputIsEmpty: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

export default CreateNewItem;
