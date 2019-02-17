import React from "react";

export default function List(props) {
  return (
    <li
      style={{ fontSize: "18px", textDecoration: props.item.completed ? "line-through" : "none" }}
      key={props.key}
      //   onClick={this.handleClick(props.key)}
    >
      {props.item.note}
    </li>
  );
}
