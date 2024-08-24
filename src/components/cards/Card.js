import React ,{useEffect, useState}from 'react'
import './Card.css'
import plushimg from './plus.png'
import minus from './minus.png'













function Card({teamName,img,info,newscore}) {
  const [score,setscore]= useState(1);

  const updatequentity = (type)=>{
    if (type == "plus"){
      setscore(score + 1)
    }
    else if (type == "minus"){
      setscore(score-1)

    }

  }
  useEffect(()=>{
  newscore(score)
  },[score]);



  return (
    <div className='card-continer'>
        <img src={img} className='icon'/>  
        <p className='text-center info'>{teamName}</p>
        <p className='text-center text-whit'> {info} </p>

        <div className='quentiner-continer'>
          <img src={minus} className='img-que'
                onClick={()=>updatequentity("minus")}></img>
          <p className='quentity'> {score}  </p>
          
          <img src={plushimg}
           className='img-que'
           onClick={()=>updatequentity("plus") }></img>
       
        </div>
       
       
       

        



    </div>
  )
}

export default Card