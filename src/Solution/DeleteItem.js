import React from "react";
import PropTypes from "prop-types";

function DeleteItem(props) {
  const { deleteLastItem, noItemsFound } = props;
  return (
    <button onClick={deleteLastItem} disabled={noItemsFound()}>
      Delete Last Item
    </button>
  );
}
DeleteItem.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  noItemsFound: PropTypes.func.isRequired,
};
export default DeleteItem;
