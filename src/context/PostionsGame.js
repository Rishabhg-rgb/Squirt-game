import { useState } from "react";
import postionContext from "./PositionContext";

import React from 'react'

const PostionsGame = (props) => {
  let state = "grds"
  const [positions, setPostions] = useState([])
  const [loading,setLoading] = useState(false)
  let list = ["69", "cockscrew", "Face Off", "Doggy style", "Pretzel Dip", "Flatiron", "G-Whiz", "Cowgirl", "Wheelbarrow", "leap frog", "magic mountain", "Reverse cowgirl", "cowboy", "ballet dance", "missionary", "Crossbooty", "The Caboose", "Scoop me up", "Reverse scoop me up", "Golden Arch", "The Seashell", "The Chairman", "The pinball Wizard", "Spork", "Table Top", "The om", "Upstanding citizen", "the lazy man", "The snake"]
  const onClick = async (e) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);

    e.preventDefault()
    setTimeout(() => {
      window.location.reload()
    }, 8000);
    let pose = []



    for (let i = 0; i < 3; i++) {

      let a = Math.floor(Math.random() * 29)
      // setPostions([...positions,list[a]])
      
      pose.push(list[a])
    }
    setPostions([...positions, pose])
    // console.log(positions);

  }

  return (
    <postionContext.Provider value={{ loading,list, onClick, positions, state }}>
      {props.children}
    </postionContext.Provider>
  )
}

export default PostionsGame