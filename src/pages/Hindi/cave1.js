import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const cave1 = () => {
  return (
    <div>

      <div>
        <img src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave1/cave1+interior.jpg' height={200} width={400} alt='ajanta image' className="centered-image"></img>
      </div>

      <div className='audioShow'>
        <p className='listenSummary'>"Listen summary"</p>
        <audio src=' https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave1/Cave1+Hindi.mp3' controls></audio>

      </div>

      <div className='TextShow'>

        <p>अजिंठा येथील गुहा 1 ही शेवटची लेणी म्हणून खडकात कोरली गेली होती, जी सुरुवातीला थोडीशी लपलेली होती. ते पूजेसाठी पूर्णपणे वापरले जात नव्हते; दिवे किंवा पेंटिंगचे नुकसान झाल्याचा कोणताही पुरावा नाही. वाकटक सम्राट हरिशेनने कदाचित त्याच्या निर्मितीचे समर्थन केले असेल, जे त्याच्या शाही-थीम प्रतिमेत प्रतिबिंबित होते.

          उंच उतारामुळे गुहेला मोठे अंगण आहे, ज्यामध्ये विस्तृत दर्शनी भाग आणि बुद्धाचे जीवन आणि सजावटीच्या रचना दर्शविणारी शिल्पे आहेत. तेथे एक स्तंभीय प्रवेशद्वार असायचे जे कोसळले आणि निष्काळजीपणे टाकून दिले गेले. आत, खांबांसह एक हॉल, बुद्ध पुतळ्यासाठी मंदिर आणि भिंतींच्या बाजूने सेल आहे. भिंती आणि छत एकेकाळी पेंटिंग्जने सुशोभित केले होते, जरी ते कधीही पूर्ण झाले नाहीत.

          चित्रांमध्ये बुद्धाचे जीवन, शिकवण आणि पूर्वीच्या जीवनातील कथा दर्शविल्या जातात, ज्यांना जातक कथा म्हणून ओळखले जाते. उल्लेखनीय भित्तिचित्रांमध्ये पद्मपाणी आणि वज्रपाणी, मंदिराच्या प्रवेशद्वारावरील संरक्षक आकृत्या आणि सिबी, सांखपाला, महाजनका यासारख्या कथांचा समावेश आहे. ते माराचा प्रलोभन, श्रावस्ती चमत्कार, नंदाची कथा आणि सिद्धार्थ आणि यशोधराची कथा यासारख्या घटनांचे चित्रण देखील करतात.

        </p>


      </div>

      <div>

        <img src='https://ajantha.s3.ap-south-1.amazonaws.com/maps/Ajantha_Animated_2.png' className='centered-image mapImage' height={200} width={400}  ></img>

      </div>

      <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

      <div className='exploreSection'>
        <h2>LET'S MOVE FORWARD.....</h2>

        <Link to="cave2h">
          <h3 className="exploreTitle">
            Cave2<span className="arrow">&rarr;</span>
          </h3>
        </Link>

      </div>




      <Outlet />
    </div>
  )
}

export default cave1
