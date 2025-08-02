import React,{useState,useEffect} from 'react'
import MouseParticles from 'react-mouse-particles'

const MouseParticle = () => {
  
  return (
    <MouseParticles g={1} num={3} color="#ff1515" cull="col,image-wrapper"/>
  )
}

export default MouseParticle;