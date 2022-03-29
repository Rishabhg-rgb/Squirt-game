import rollingdice from './rollingdice.gif'
import postionContext from '../context/PositionContext'
import React, { useContext } from 'react'

const LeftDice = () => {
    const context = useContext(postionContext)
    const {throwDiceLeft,rollingLeft,leftDice} = context
  return (
      <>

    <div className='my-3'style={{display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
        {rollingLeft?
        <img src={rollingdice} alt=""  style={{width:"12rem",height:"12rem"}} />:<div style={{height:"10rem",width:"10rem",border:"3px solid black",display:"flex",justifyContent:"center",alignItems:"center",margin:"1rem"}}>{!leftDice?<div style={{border:"20px solid black",borderRadius:"100px"}}></div>:leftDice}</div>}
        <button onClick={throwDiceLeft}>Throw</button>
    </div>
    
    </>
  )
}

export default LeftDice