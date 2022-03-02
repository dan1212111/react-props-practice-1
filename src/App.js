import React from "react"
import { useState } from "react"
import { reverse } from "./components/helpers"
import { Title } from "./components/Title"
import { Paragraph1 } from "./components/Paragraph1"
import { Paragraph2 } from "./components/Paragraph2"
import "./styles.css"

function App() {
  const [name, setName] = useState("Nicolas")

  return (
    <div className="app">
      <Title name={name} />
      <Paragraph1 name={name} />
      <Paragraph2 name={name} reverse={reverse} />
    </div>
  )
}

export default App
