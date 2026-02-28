import React from 'react'
import './Events.css'
const Events = () => {
  return (
    <div className='eventSection'>
      {/* Left section */}
      <div className="discoverContainer">
        <p>Eve<span>nts & Activites</span></p>
        <h2>DISCOVER WHAT'S HAPPENING</h2>
      </div>

      {/* Right Section */}

      <div className="eventsImgsContainer">

      {/* Images Container  */}

        <div className="eventImages">
          <div className="imgBox firstImage">
            <img src="../../../src/assets/img1.png" alt="school Image" />
            <div className="eventDate">
              <h3>Dec. 2024</h3>
              <div className="eventDay">
                <h4>Haryana</h4>
                <p>Day</p>
              </div>
            </div>
          </div>
          <div className="imgBox secondImage">
            <img src="../../../src/assets/img2.png" alt="school Image" />
            <div className="eventDate">
              <h3>Nov. 2024</h3>
              <div className="eventDay">
                <h4>Haryana</h4>
                <p>Day</p>
              </div>
            </div>
          </div>
          <div className="imgBox thirdImage">
            <img src="../../../src/assets/img3.png" alt="school Image" />
            <div className="eventDate">
              <h3>April. 2024</h3>
              <div className="eventDay">
                <h4>Haryana</h4>
                <p>Day</p>
              </div>
            </div>
          </div>
        </div>

        {/* Show more Events button */}

        <div className="eventBtn">
          <button className='allEvents'>View All Events -</button>
        </div>
      </div>
    </div>
  )
}

export default Events
