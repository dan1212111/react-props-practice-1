import React from "react"

export function Paragraph2(props) {
  return (
    <p className="name-reversed">
      Also, {props.name} backwards is {props.reverse(props.name)}
    </p>
  )
}
