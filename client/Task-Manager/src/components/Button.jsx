import React from 'react';
import clsx from 'clsx';

const Button = (props) => {
  return (
    <button
    type={props.type || "button"}
    className={clsx("px-3 py-2 outline-none rounded",props.className)}

    >
        <span> {props.label}</span>
        {props.icon && props.icon}
    </button>
  )
}

export default Button
