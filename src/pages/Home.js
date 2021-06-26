import React from 'react';
import './../App.css';
import'./Home.css';
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import bnb from '../images/bnb2.png';
import money from '../images/money.png';


function Home() {
  return (
    <div className='home'>
      <div className="home-wrapper">
        
        <h2 className="heading">BulleX Earnings Manager</h2>
        
        
        <div className="info">
          <div>

          </div>
          <p>
            Please enter your address above
          </p>
          <p>
            Buy Tikki
          </p>
        </div>

        <div class="wrapper-2">
          <div class="wrapper-box">
            <div>
              <img className="image-upper" src={image1}/>
            </div>
            
            <div>
              <p className="font-color-grey">Your BulleX Holdings</p>
              <p className="font-color-white">0 BulleX</p>
            </div>
          </div>
          <div class="wrapper-box">
            <div>
              <img className="image-upper" src={image2}/>
            </div>
            
            <div>
              <p className="font-color-grey">Total BNB Paid</p>
              <p className="font-color-white">0.0000 BNB</p>
            </div>
          </div>
          <div class="wrapper-box">
            <div>
              <img className="image-upper" src={image3}/>
            </div>
            
            <div>
              <p className="font-color-grey">Last Payout Time</p>
              <p className="font-color-white">Never</p>
            </div>
          </div>
          <div class="wrapper-box">
            <div>
              <img className="image-upper" src={image4}/>
            </div>
            
            <div>
              <p className="font-color-grey">Next Payout Loading</p>
              <p className="font-color-white">Processing | 0%</p>
            </div>
          </div>
        </div>

        <div className="wrapper-3">
          <div class="box-wrapper-2">
              Payout is Processing
          </div>
          <div class="box-wrapper-3">
              You Donot have enough BulleX to reinvest
          </div>
        </div>


        <div className="wrapper-4">
          <div>
            <img className="image-bnb" src={bnb}/>
          </div>
          <h2 className="heading">Total BNB Paid To BulleX Holders</h2>
          <div >
            <span className="text-big-yellow">
              15,568 
            </span>
            <span className="text-big-green">
              BNB
            </span>
          </div>
          <div>
            <span className="text-big-green">
              = $4,414,597
            </span>
          </div>

        </div>
        


        <div className="wrapper-5">
          <div className="box-wrapper-5">
            <img className="money-wrapper-5" src={money}/>
            <h2 className="heading">Your 0 BulleX Earns:</h2>
            <div className="margin-wrapper-5">
              <span className="yellow-text">0.00 BNB</span>
              <span  className="green-text">($0.00)</span>
              <span  className="grey-text">Per Day</span>
            </div>

            <div>
              <span className="yellow-text">0.00 BNB</span>
              <span  className="green-text">($0.00)</span>
              <span  className="grey-text">Per Week</span>
            </div>

            <div>
              <span className="yellow-text">0.00 BNB</span>
              <span  className="green-text">($0.00)</span>
              <span  className="grey-text">Per Month</span>
            </div>

            <div>
              <span className="yellow-text">0.00 BNB</span>
              <span  className="green-text">($0.00)</span>
              <span  className="grey-text">Per Year</span>
            </div>

            <p className="grey-text-new"> Estimations are based on $2m trading volume</p>
          </div>
          <div className="hidden-bar">

          </div>
          <div className="box-wrapper-5">
            <img className="money-wrapper-5" src={money}/>
            <h2 className="heading">By Reinvesting Dividends Every Day, Your 0 BulleX Becomes:</h2>
            <div className="margin-wrapper-5">
              <span className="yellow-text">0 BulleX</span>
              <span  className="green-text">($0.00)</span>
              <span  className="grey-text">In a Week</span>
            </div>

            <div>
              <span className="yellow-text">0 BulleX</span>
              <span  className="green-text">(0x Earnings)</span>
              <span  className="grey-text">In a Month</span>
            </div>

            <div>
              <span className="yellow-text">0 BNB</span>
              <span  className="green-text">(0x Earnings)</span>
              <span  className="grey-text">In 2 Months</span>
            </div>

            <div>
              <span className="yellow-text">0 BNB</span>
              <span  className="green-text">(0x Earnings)</span>
              <span  className="grey-text">In 6 Months</span>
            </div>

            <p className="grey-text-new"> Estimations are based on $BulleX Price</p>
          </div>
        </div>

        


      </div>
    </div>
  );
}

export default Home;
