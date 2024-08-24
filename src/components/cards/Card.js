import React ,{useState}from 'react'
import './Card.css'
import plushimg from './plus.png'
import minus from './minus.png'

function Card() {
  const [quentity,setquentity]= useState(1);
  return (
    <div className='card-continer'>
        <div className='icon'> ⚔ </div>
        <p className='text-center info'>nashik fiters</p>

        <div className='quentiner-continer'>
          <img src={minus} className='img-que'></img>
          <p className='quentity'> {quentity}  </p>
          <img src={plushimg} className='img-que' onClick={()=>{

          }}></img>

        </div>



    </div>
  )
}

export default Card