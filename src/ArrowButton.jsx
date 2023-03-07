import { useState } from "react";

export default function ArrowButton(props) {
  const movement = 50;

  return (
    <button
      className={props.className}
      onClick={() => {
        {
          if (props.content.includes("Right")) {
            props.setBoxLeft(props.boxLeft + movement);
          } else if (props.content.includes("Left")) {
            props.setBoxLeft(props.boxLeft - movement);
          } else if (props.content.includes("Up")) {
            props.setBoxTop(props.boxTop - movement);
          } else if (props.content.includes("Down")) {
            props.setBoxTop(props.boxTop + movement);
          }
        }
      }}
    >
      {props.content}
    </button>
  );
}
