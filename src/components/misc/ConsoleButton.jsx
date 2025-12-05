import React from 'react'
import '../css/ConsoleButton.css'

const ConsoleButton = ({text}) => {
  return (
    <button class="button cursor-target font-console">{text}</button>
  )
}

export default ConsoleButton