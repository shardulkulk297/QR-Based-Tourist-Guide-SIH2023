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


                <p>The Ajanta Caves, a UNESCO World Heritage Site in Maharashtra, India, consist of 29 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE. These caves are revered as masterpieces of Buddhist religious art, featuring paintings and sculptures that are considered among the finest examples of ancient Indian art. Divided into two phases of construction, they serve as monasteries and worship halls carved into a 75-meter wall of rock.

                    The caves showcase expressive paintings portraying emotions through gesture and form, depicting the past lives and rebirths of Buddha, narratives from Jatakamala, and sculptures of Buddhist deities. Historical records suggest their use as monsoon retreats for monks and resting sites for travelers in ancient India.

                    Though hidden in jungle cover, the caves were accidentally discovered in 1819 by Captain John Smith. They're situated in a U-shaped gorge along the river Waghur, with waterfalls audible during high river levels. Ajanta, along with Ellora Caves, is a major tourist attraction in Maharashtra, located about 59 kilometers from Jalgaon, 104 kilometers from Aurangabad, and 350 kilometers from Mumbai. The distinctive Ajanta style is also present in Ellora, Elephanta, Aurangabad, Shivleni Caves, and Karnataka cave temples.</p>


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
