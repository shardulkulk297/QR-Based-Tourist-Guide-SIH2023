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
                    गुफा 2, गुफा 1 के बगल में, अपनी संरक्षित पेंटिंग और जटिल रॉक नक्काशी के लिए प्रसिद्ध है। हालाँकि गुफा 1 के समान, यह बेहतर स्थिति में है। यह गुफा अपने स्त्री प्रसंगों और कलाकृति के लिए जानी जाती है, लेकिन अधूरी है और इसमें निरंतरता का अभाव है।

                    निर्माण संभवतः 460 के दशक में शुरू हुआ था, लेकिन ज्यादातर 475 और 477 ईस्वी के बीच किया गया था, संभवतः सम्राट हरिसेना के किसी करीबी, संभवतः एक महिला द्वारा समर्थित था। इसमें गुफा 1 की तुलना में एक अलग बरामदा और सामने की नक्काशी है, जो विभिन्न डिजाइनों से सजाए गए मजबूत स्तंभों द्वारा समर्थित है। हॉल में केंद्र में एक वर्ग बनाते हुए चार स्तंभ हैं, जिनके बीच में गलियारे हैं।

                    उल्लेखनीय नक्काशियों में देवी हरिति की मूर्ति शामिल है, जो एक राक्षसी थी जिसे बुद्ध ने प्रसव और बच्चों की रक्षक में बदल दिया था। पेंटिंग्स हम्सा, विधुरपंडिता, रुरु, क्षांति जातक कथाएँ और पूर्ण अवधना जैसी विभिन्न कहानियों को चित्रित करती हैं। वे श्रावस्ती के चमत्कार, अष्टभय अवलोकितेश्वर और माया के स्वप्न जैसे दृश्यों का भी चित्रण करते हैं।

                    गुफा 2 को जो चीज़ अलग करती है, वह है इसमें प्रमुख भूमिकाओं में महान और शक्तिशाली महिलाओं का चित्रण, यह सुझाव देता है कि एक अज्ञात महिला संरक्षक रही होगी। बरामदे में एक केंद्रीय द्वार है जो हॉल की ओर जाता है, जिसके दोनों ओर चौकोर आकार की खिड़कियां हैं जो आंतरिक भाग को रोशन करती हैं


                </p>



            </div>


            <div>

                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/cave+path/c4.jpg' className='centered-image mapImage' height={200} width={400}  ></img>

            </div>

            <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

            <div className='exploreSection'>
                <h2>LET'S MOVE FORWARD.....</h2>

                <Link to="/cave4h">
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
