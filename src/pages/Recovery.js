import React from 'react';
import './../App.css';
import'./Home.css';
import money from '../images/money.png';


function Recovery() {
  return (
    <div className='home'>
      
      <div className="wrapper-5-new">
          <div className="box-wrapper-5">
            <img className="money-wrapper-5" src={money}/>
            <h2 className="heading">Claimable Balance:</h2>
            <p className="grey-text-new">Your currently claimable BNB balance from the recovery protocol is:</p>
            <p className="yellow-text">CONNECT YOUR WALLET</p>
            <p className="grey-text-new">Click HERE to claim your pending balance.</p>
          </div>
          <div className="hidden-bar">
          </div>

          <div className="box-wrapper-5">
            <img className="money-wrapper-5" src={money}/>
            <h2 className="heading">Remaining Balance:</h2>
            
            <p className="grey-text-new">You have claimed CONNECT YOUR WALLET from the recovery protocol. Your total amount to be paid from the recovery protocol is CONNECT YOUR WALLET. Please continue  to check here as the claimable balance grows to meet your full loss.</p>
          </div>

        </div>
    </div>

    
  )
}

export default Recovery;
