import React, { useContext } from 'react'
import positionContext from '../context/PositionContext'


const Postion = () => {
    // const [postions, setPostions] = useState([])
    // let list = ["69","cockscrew","Face Off","Doggy style","Pretzel Dip","Flatiron","G-Whiz","Cowgirl","Wheelbarrow","leap frog","magic mountain","Reverse cowgirl","cowboy","ballet dance","missionary","Crossbooty","The Caboose","Scoop me up","Reverse scoop me up","Golden Arch","The Seashell","The Chairman","The pinball Wizard","Spork","Table Top","The om","Upstanding citizen","the lazy man","The snake"]
    // const [loading,setLoading] = useState(false)
    // const onClick = (e)=>{
    //     e.preventDefault()
    //     for(let i=0;i<3;i++){
    //         let a = Math.floor(Math.random()*29)
    //         setPostions(postions.push(list[a]))
    //     } 
    //     // setLoading(false)
    //     console.log(postions)
    // }

    const context = useContext(positionContext)
    const {onClick } = context
    // console.log(positions);
    
  return (
      <div className='container'>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Enter Your Birth Date</label>
    <input required type="date" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={onClick} data-bs-toggle="modal" data-bs-target="#exampleModal" >Find</button>
</form>
  

 
{/* <!-- Button trigger modal --> */}
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
{/* <Modal /> */}
</div>



  )
}

export default Postion