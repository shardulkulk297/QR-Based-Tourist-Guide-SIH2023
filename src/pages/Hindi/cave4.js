import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const cave4 = () => {
    return (
        <div>

            <div>
                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave4/Cave4+Hindi.mp3' height={200} width={400} alt='ajanta image' className="centered-image"></img>
            </div>

            <div className='audioShow'>
                <p className='listenSummary'>"Listen summary"</p>
                <audio src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave4/Cave4+English.mp3' controls></audio>

            </div>

            <div className='TextShow'>
                <p> गुफा 4 को मथुरा नामक एक धनी भक्त द्वारा वित्त पोषित किया गया था और यह अजंता की पहली गुफाओं में सबसे बड़ा मठ है। कुलीन न होने के बावजूद, मथुरा की संपत्ति ने इस भव्य निर्माण की अनुमति दी। उच्च स्तर पर स्थित, ऐसा माना जाता है कि इस स्थान को बेहतर चट्टान की गुणवत्ता के कारण या बाईं ओर एक और बड़े हौज के साथ अधिक रहने की जगह बनाने की योजना के कारण चुना गया था।

                    इसकी उम्र के बारे में थोड़ी बहस है - आधिकारिक तौर पर 6वीं शताब्दी ईस्वी पूर्व की है, लेकिन कुछ विशेषज्ञों का सुझाव है कि इसका उद्घाटन 463 ईस्वी के आसपास हुआ होगा। संभवतः गुफा की विशालता और भूवैज्ञानिक मुद्दों के कारण, गुफा के केंद्रीय हॉल में एक बड़ी छत ढह गई। बाद में कलाकारों ने छत की ऊंचाई बढ़ाने के लिए चट्टान की गहराई तक खुदाई करके इसे ठीक करने का प्रयास किया

                </p>


            </div>

            <div> 

                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/cave+path/c3.png' className='centered-image mapImage' height={200} width={400}  ></img>

            </div>

            <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

            <div className='exploreSection'>
                <h2>LET'S MOVE FORWARD.....</h2>

                <Link to="/cave5h">
                    <h3 className="exploreTitle">
                        Cave5<span className="arrow">&rarr;</span>
                    </h3>
                </Link>

            </div>




            <Outlet />
        </div>
    )
}

export default cave4
