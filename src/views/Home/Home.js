import React, { useState } from 'react'
import './Home.css'
import Card from '../../components/cards/Card'
import imgking from '../../components/cards/king.png'
import shildimg from '../../components/cards/shield.png'


const Winnercard = ({score1,score2})=>{
  if (score1 == score2){
    return <div>it' a tid</div>
  }
  return(
    <div>
      
     { score1 > score2 ? "team 1 Won":"team 2 won "}

    </div>
  )
}




function Home() {
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

          <button type='button' className='app-btn '>
            Who won ?   
          </button>
          <Winnercard   score1={Team1score}  score2={Team2score}/>

    </div>
    
  )
}

export default Home