import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const cave5 = () => {
    return (
        <div>

            <div>
                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave5/cave5.jpg
' height={200} width={400} alt='ajanta image' className="centered-image"></img>
            </div>

            <div className='audioShow'>
                <p className='listenSummary'>"Listen summary"</p>
                <audio src=' https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave5/Cave5+English.mp3' controls></audio>

            </div>

            <div className='TextShow'>
                <p>Cave 5 at Ajanta was initially planned as a monastery but remains unfinished. Measuring 10.32 × 16.8 meters, it lacks sculptures and architectural elements except for an ornate door frame featuring female figures and mythical makara creatures, common in ancient Indian art. Construction began around 465 CE but was abandoned due to geological flaws in the rock. Resumed in 475 CE by the Asmakas, it was again abandoned as focus shifted to an expanded Cave 6 adjacent to Cave 5.</p>


            </div>

            <div>

                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/cave+path/c5.png' className='centered-image mapImage' height={200} width={400}  ></img>

            </div>

            <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

            <div className='exploreSection'>
                <h2>LET'S MOVE FORWARD.....</h2>

                <Link to="../HOME">
                    <h3 className="exploreTitle">
                        EXPLORE MORE ABOUT US<span className="arrow">&rarr;</span>
                    </h3>
                </Link>

            </div>




            <Outlet />
        </div>
    )
}

export default cave5
