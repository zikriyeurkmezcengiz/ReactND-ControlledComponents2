import React from "react";

function Item(props) {
  const { index, item } = props;
  return <li key={index}>{item}</li>;
}

export default Item;
