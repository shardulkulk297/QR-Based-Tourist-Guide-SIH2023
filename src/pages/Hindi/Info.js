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
                <audio src='https://ajantha.s3.ap-south-1.amazonaws.com/Ajanta+info/Ajanta+English.mp3https://ajantha.s3.ap-south-1.amazonaws.com/Ajanta+info/Ajanta+Hindi.wav' controls></audio>

            </div>

            <div className='TextShow'>


                <p>भारत के महाराष्ट्र में यूनेस्को की विश्व धरोहर स्थल, अजंता गुफाएँ, दूसरी शताब्दी ईसा पूर्व से लगभग 480 ईस्वी तक की 29 रॉक-कट बौद्ध गुफा स्मारकों से बनी हैं। इन गुफाओं को बौद्ध धार्मिक कला की उत्कृष्ट कृतियों के रूप में प्रतिष्ठित किया जाता है, जिनमें पेंटिंग और मूर्तियां हैं जिन्हें प्राचीन भारतीय कला के बेहतरीन उदाहरणों में से एक माना जाता है। निर्माण के दो चरणों में विभाजित, वे चट्टान की 75 मीटर की दीवार में उकेरे गए मठों और पूजा कक्षों के रूप में काम करते हैं।

                    गुफाओं में हावभाव और रूप के माध्यम से भावनाओं को चित्रित करने वाली अभिव्यंजक पेंटिंग, बुद्ध के पिछले जीवन और पुनर्जन्म, जातकमाला की कथाएं और बौद्ध देवताओं की मूर्तियां प्रदर्शित हैं। ऐतिहासिक अभिलेख प्राचीन भारत में भिक्षुओं के लिए मानसून विश्राम स्थल और यात्रियों के लिए विश्राम स्थल के रूप में इसके उपयोग का सुझाव देते हैं।

                    जंगल के बीच छुपी होने के बावजूद गुफाओं की खोज गलती से 1819 में कैप्टन जॉन स्मिथ ने कर ली थी। वे वाघुर नदी के किनारे एक यू-आकार की घाटी में स्थित हैं, जहाँ नदी के उच्च स्तर के दौरान झरने की आवाज़ सुनाई देती है। अजंता, एलोरा गुफाओं के साथ, महाराष्ट्र में एक प्रमुख पर्यटक आकर्षण है, जो जलगांव से लगभग 59 किलोमीटर, औरंगाबाद से 104 किलोमीटर और मुंबई से 350 किलोमीटर दूर स्थित है। विशिष्ट अजंता शैली एलोरा, एलीफेंटा, औरंगाबाद, शिवलेनी गुफाओं और कर्नाटक गुफा मंदिरों में भी मौजूद है।</p>


            </div>

            <div>

                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/maps/Ajantha_Animated_2.png' className='centered-image mapImage' height={200} width={400}  ></img>

            </div>

            <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

            <div className='exploreSection'>
                <Link to="/cave1h">
                    <h3 className="exploreTitle">
                        Cave1<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
                <Link to="/cave2h">
                    <h3 className="exploreTitle">
                        Cave2<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
                <Link to="/cave3h">
                    <h3 className="exploreTitle">
                        Cave3<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
                <Link to="/cave4h">
                    <h3 className="exploreTitle">
                        Cave4<span className="arrow">&rarr;</span>
                    </h3>
                </Link>
                <Link to="/cave5h">
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
