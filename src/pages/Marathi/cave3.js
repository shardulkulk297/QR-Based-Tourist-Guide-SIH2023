import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const cave3 = () => {
    return (
        <div>

            <div>
                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave+3/cave3.jpg' height={200} width={400} alt='ajanta image' className="centered-image"></img>
            </div>

            <div className='audioShow'>
                <p className='listenSummary'>"Listen summary"</p>
                <audio src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave+3/Cave3+English.mp3' controls></audio>

            </div>

            <div className='TextShow'>
            <p>
                Cave 3 at Ajanta was a project that didn't get very far. It was like starting to build a house but only digging the foundation and making the frame, without completing the rooms or adding any detailed decorations. Among all the caves at the site, this one was started last. They began making it around 477 CE, just before Emperor Harisena died. They stopped working on it after creating a basic entrance to the hall, not doing much more beyond that.

                Imagine starting to build a house but only managing to create the outline of the rooms and the porch. That's what happened with Cave 3 at Ajanta. It was the last cave they started making, and they began around 477 CE, but they didn't finish the excavation. They stopped after only making a rough entrance to the hall and never completed the other parts of the cave.

            </p>



            </div>

           
            <div>

                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/cave+path/c3.png' className='centered-image mapImage' height={200} width={400}  ></img>

            </div>

            <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

            <div className='exploreSection'>
                <h2>LET'S MOVE FORWARD.....</h2>

                <Link to="../cave4">
                    <h3 className="exploreTitle">
                        Cave4<span className="arrow">&rarr;</span>
                    </h3>
                </Link>

            </div>




            <Outlet />
        </div>
    )
}

export default cave3
