import rollingdice from './rollingdice.gif'
import postionContext from '../context/PositionContext'
import React, { useContext } from 'react'

const RightDice = () => {
    const context = useContext(postionContext)
    const {throwDiceRight,rollingRight,rightDice} = context
  return (
      <>

    <div className=' my-3' style={{display:"flex",flexDirection:"column"}}>
        {rollingRight?
        <img src={rollingdice} alt=""  style={{width:"12rem",height:"12rem"}} />:<div style={{height:"10rem",width:"10rem",border:"3px solid black",display:"flex",justifyContent:"center",alignItems:"center",margin:"1rem"}}>{!rightDice?<div style={{border:"20px solid black",borderRadius:"100px"}}></div>:rightDice}</div>}
        <button onClick={throwDiceRight}>Throw</button>
    </div>
    
    </>
  )
}

export default RightDice