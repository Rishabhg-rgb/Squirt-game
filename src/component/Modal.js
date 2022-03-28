import React, { useContext } from 'react'
import postionContext from '../context/PositionContext'
import Spinner from './Spinner'
const Modal = () => {
    const context = useContext(postionContext)
    const { positions,loading } = context
    // console.log(positions)
    
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Position For you</h5>
        </div>
        <div className="modal-body" style={{display:"flex","flexDirection":"column"}}>
            {!loading?
            <ol>

            {positions.map((elem)=>{
              return elem.map((pose)=>{
                return <li key={pose}>{pose}</li>
              })
            })}
           </ol>:<Spinner/>}
            
        </div>
        
      </div>
    </div>
  </div>
  
  
  )
}

export default Modal