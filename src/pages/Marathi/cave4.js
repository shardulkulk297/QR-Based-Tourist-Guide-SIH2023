import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const cave4 = () => {
    return (
        <div>

            <div>
                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave4/cave4+interior.jpg' height={200} width={400} alt='ajanta image' className="centered-image"></img>
            </div>

            <div className='audioShow'>
                <p className='listenSummary'>"Listen summary"</p>
                <audio src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave4/Cave4+English.mp3' controls></audio>

            </div>

            <div className='TextShow'>
                <p> <p>Cave 4 was funded by a wealthy devotee named Mathura and is the biggest monastery among the first caves at Ajanta. Despite not being a noble, Mathura's wealth allowed for this grand construction. Placed at a higher level, it's believed this location was chosen due to better rock quality or for plans to create more living space with another large cistern on the left side.

                    There's a bit of a debate about its age—officially dated to the 6th century CE but some experts suggest it might have been inaugurated around 463 CE. The cave faced a major ceiling collapse in the central hall, likely due to the cave's vastness and geological issues. Artists later tried to fix this by excavating the rock deeper to raise the ceiling height
                </p></p>


            </div>

            <div>

                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/cave+path/c4.jpg' className='centered-image mapImage' height={200} width={400}  ></img>

            </div>

            <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

            <div className='exploreSection'>
                <h2>LET'S MOVE FORWARD.....</h2>

                <Link to="../cave2">
                    <h3 className="exploreTitle">
                        Cave2<span className="arrow">&rarr;</span>
                    </h3>
                </Link>

            </div>




            <Outlet />
        </div>
    )
}

export default cave4
