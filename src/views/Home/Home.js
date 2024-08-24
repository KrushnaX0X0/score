import React, { useState } from 'react'
import './Home.css'
import Card from '../../components/cards/Card'
import imgking from '../../components/cards/king.png'
import shildimg from '../../components/cards/shield.png'
import close from './back.png'





function Home() {


  
const Winnercard = ({score1,score2})=>{
  let winner ="";

  if (score1 == score2){
    winner="Match is Draw"
  }
  else if (score1>score2){
    winner="Team 1 is Won"
  }
  else{
    winner="Team 2 Won"
  }
    
  
  return(
    <div className='winer-card'>
      <img src={close} className='close-img' onClick={()=>{
        setshowwinwer(false)
      }} />
    <div className='winer-text'>
    
     { winner}
     </div>

    </div>
  )
}
  















    const[Team1score,setTeam1Score] = useState(0)
    const[Team2score,setTeam2Score] = useState(0)
    const [showwiner,setshowwinwer] = useState(false)

  return (
    <div >
        <h1 className='text-center text-prime web-title'>FoodBoll Score Table</h1>
       <div className='score-card-continer'>  <Card
          teamName ={'khandala warriors'}
          img={ shildimg}
          info={'khandal warriots is the word king '}
          newscore = {setTeam1Score}
          />
          <Card 
            teamName ={'Mumbai warriors'}
            img= {imgking}
            info = {'mumbai warriors is the state chapin'}
            newscore = {setTeam2Score}
          />
          </div>

          <button type='button' className='app-btn ' onClick={()=>setshowwinwer(true)}>
            Who won ?   
          </button>
      { showwiner?  <Winnercard   score1={Team1score}  score2={Team2score}/>:null}
    </div>
    
  )
}

export default Home