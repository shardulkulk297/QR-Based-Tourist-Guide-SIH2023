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
                <audio src=' https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave5/Cave5+Hindi.mp3' controls></audio>

            </div>

            <div className='TextShow'>
               <p>अजंता की गुफा 5 की योजना शुरू में एक मठ के रूप में बनाई गई थी लेकिन अधूरी रह गई। 10.32 × 16.8 मीटर माप में, इसमें मूर्तिकला और वास्तुशिल्प तत्वों का अभाव है, सिवाय एक अलंकृत दरवाजे के फ्रेम के, जो महिला आकृतियों और पौराणिक ड्रैगन जानवर को दर्शाता है, जो प्राचीन भारतीय कला में आम है। निर्माण 465 ई.पू. के आसपास शुरू हुआ लेकिन चट्टान में भूवैज्ञानिक दोषों के कारण इसे छोड़ दिया गया। 475 ई. में अस्माकों द्वारा इसे फिर से शुरू किया गया, इसे फिर से छोड़ दिया गया क्योंकि उनका ध्यान गुफा 5 के निकट विस्तारित गुफा 6 पर था।</p>
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
