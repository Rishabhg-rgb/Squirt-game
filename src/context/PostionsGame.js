import { useState } from "react";
import postionContext from "./PositionContext";

import React from 'react'

const PostionsGame = (props) => {
  let state = "grds"
  const [positions, setPostions] = useState([])
  const [loading, setLoading] = useState(false)
  let list = ["69", "cockscrew", "Face Off", "Doggy style", "Pretzel Dip", "Flatiron", "G-Whiz", "Cowgirl", "Wheelbarrow", "leap frog", "magic mountain", "Reverse cowgirl", "cowboy", "ballet dance", "missionary", "Crossbooty", "The Caboose", "Scoop me up", "Reverse scoop me up", "Golden Arch", "The Seashell", "The Chairman", "The pinball Wizard", "Spork", "Table Top", "The om", "Upstanding citizen", "the lazy man", "The snake"]
  const onClick = async (e) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);

    e.preventDefault()
    setTimeout(() => {
      window.location.reload()
    }, 100000);
    let pose = []



    for (let i = 0; i < 3; i++) {

      let a = Math.floor(Math.random() * 29)
      pose.forEach(elem => {
        if (a === elem) {
          i = i - 1
        }

      })
      pose.push(list[a])
    }
    setPostions([...positions, pose])


  }
  // Now dice functions starts
  const [rollingLeft, setRollingLeft] = useState(false)
  const [rollingRight, setRollingRight] = useState(false)
  const [leftDice, setLeftDice] = useState()
  const [rightDice, setRightDice] = useState()
  const task = ["Suck the ", "Lick the", "Kiss the", "Touch the", "Feel the", "Hit the"]
  const bodyParts = ["Forehead", "Nose", "Cheek", "Lips", "Chest", "Navel Button", "Waist", "Thigh", "Foot", "Main Organ", "Neck"]
  const throwDiceRight = () => {
    setRollingRight(true)
    setTimeout(() => {
      let b = Math.floor(Math.random() * 11)
      setRightDice(bodyParts[b])
      setRollingRight(false)
    }, 2000);
  }
  const throwDiceLeft = () => {
    setRollingLeft(true)
    setTimeout(() => {
      let a = Math.floor(Math.random() * 6)
      setLeftDice(task[a])
      setRollingLeft(false)
    }, 2000);
  }


  return (
    <postionContext.Provider value={{ loading, list, onClick, positions, throwDiceRight, throwDiceLeft, rollingLeft, rollingRight, leftDice, rightDice }}>
      {props.children}
    </postionContext.Provider>
  )
}

export default PostionsGame