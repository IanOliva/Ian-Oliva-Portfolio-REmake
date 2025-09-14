import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypewriterStrings = () => {
  return (
    <Typewriter words={["Técnico en programación","Frontend Dev", "Backend Dev" ]}
    cursor={true}
    cursorBlinking={true}
    cursorStyle="|"
    delaySpeed={3000}
    deleteSpeed={100}
    loop={true}
    typeSpeed={100}
    />
  )
}



export default TypewriterStrings