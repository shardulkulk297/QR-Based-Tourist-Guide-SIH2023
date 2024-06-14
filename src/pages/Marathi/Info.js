import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';







const Info = () => {
    return (


        <div>

            <div>
                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/Ajanta+info/Ajanta+Main+Image.jpg' height={200} width={400} alt='ajanta image' className="centered-image"></img>
            </div>

            <div className='audioShow'>
                <p className='listenSummary'>"Listen summary"</p>
                <audio src='https://ajantha.s3.ap-south-1.amazonaws.com/Ajanta+info/Ajanta+English.mp3' controls></audio>

            </div>

            <div className='TextShow'>


              <p>समद म्हणजे चोम</p>
            </div>

            <div>

                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/maps/Ajantha_Animated_2.png' className='centered-image mapImage' height={200} width={400}  ></img>

            </div>

            <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

            <div className='exploreSection'>
                <Link to="../cave1">
                    <h3 className="exploreTitle">
                        Cave1<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
                <Link to="../cave2">
                    <h3 className="exploreTitle">
                        Cave2<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
                <Link to="../cave3">
                    <h3 className="exploreTitle">
                        Cave3<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
                <Link to="../cave4">
                    <h3 className="exploreTitle">
                        Cave4<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
                <Link to="../cave5">
                    <h3 className="exploreTitle">
                        Cave5<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
               
            </div>

            




            <Outlet />
            <div className='footer'>
  QRQuesters
</div>

        </div>

        





    )
}

export default Info
