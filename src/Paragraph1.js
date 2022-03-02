import React from "react"

export function Paragraph1(props) {
  return (
    <p className="name-length">
      Did you know that {props.name} is {props.name.length} characters long?!
    </p>
  )
}
