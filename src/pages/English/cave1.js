import React from 'react'
import { Link, Outlet } from 'react-router-dom';



const cave1 = () => {
  return (
    <div>

     
      <div>

        
      

        <img src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave1/cave1+interior.jpg' height={300} width={500} alt='ajanta image' className="centered-image"></img>
      </div>

      <div className='audioShow'>
        <p className='listenSummary'>"Listen summary"</p>
        <audio src=' https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave1/Cave1+English.mp3' controls></audio>

      </div>

      
      <div className='TextShow'>

        <p>Cave 1 at Ajanta was carved into the rock as one of the last caves, slightly hidden at first. It wasn't fully used for worship; there's no evidence of lamps or damage to the paintings. The Vākāṭaka Emperor Harishena likely supported its creation, reflected in its royal-themed imagery.

          The cave has a large courtyard due to the steep slope, with an elaborate facade and sculptures showcasing the Buddha's life and decorative designs. There used to be a columned entrance that collapsed and was carelessly discarded. Inside, there's a hall with pillars, a shrine for a Buddha statue, and cells along the walls. The walls and ceilings were once adorned with paintings, although they were never completed.

          The paintings depict stories from the Buddha's life, teachings, and former lives, known as Jataka tales. Notable frescoes include Padmapani and Vajrapani, protective figures at the shrine entrance, and stories like Sibi, Sankhapala, Mahajanaka, among others. They also depict events like the Temptation of Mara, the Sravasti miracle, Nanda's story, and Siddhartha and Yasodhara's
        </p>


      </div>

      <div className='Mapp'>

      <iframe className='inlineCss'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.98362928417015!2d75.70218840034646!3d20.552538778998173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd97f707663643d%3A0x8da94f956a9e0d23!2sCaves%2C%20Maharashtra%20431117!5e0!3m2!1sen!2sin!4v1708063001708!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: '0' }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

        


      </div>

      <div>
         <h5>MAP OF AJANTHA CAVE1</h5>
      </div>


      <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

      <div className='exploreSection'>
        <h2>LET'S MOVE FORWARD.....</h2>

        <Link to="/English/cave2">
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
