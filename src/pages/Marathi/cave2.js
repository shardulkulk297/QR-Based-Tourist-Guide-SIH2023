import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Cave2 = () => {
    return (
        <div>

            <div>
                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave2/cave2+interior.jpg' height={200} width={400} alt='ajanta image' className="centered-image"></img>
            </div>

            <div className='audioShow'>
                <p className='listenSummary'>"Listen summary"</p>
                <audio src='https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave2/Cave2+English.mp3' controls></audio>

            </div>

            <div className='TextShow'>
                <p>
                    Cave 2, next to Cave 1, is renowned for its preserved paintings and intricate rock carvings. Though similar to Cave 1, it's in better shape. This cave stands out for its feminine themes and artwork but is unfinished and lacks consistency.

                    Construction likely began in the 460s but was mostly done between 475 and 477 CE, probably supported by someone close to Emperor Harisena, possibly a woman. It features a different porch and facade carvings compared to Cave 1, supported by sturdy pillars adorned with various designs. The hall has four colonnades forming a square in the center, with aisles between them.

                    Noteworthy carvings include that of goddess Hariti, once a demoness transformed by Buddha into a protector of childbirth and children. The paintings illustrate various stories like Hamsa, Vidhurapandita, Ruru, Kshanti Jataka tales, and the Purna Avadhana. They also depict scenes like the miracle of Sravasti, Ashtabhaya Avalokitesvara, and Maya's dream.

                    What sets Cave 2 apart are its depictions of noble and powerful women in prominent roles, suggesting an unknown woman might have been the patron. The porch has a central doorway leading to the hall, flanked by square-shaped windows brightening the interior

                </p>


            </div>

            <div>

                <img src='https://ajantha.s3.ap-south-1.amazonaws.com/cave+path/c2.jpg' className='centered-image mapImage' height={200} width={400}  ></img>

            </div>

            <p className='listenSummary SmallText'>Let's Explore Ajanta:</p>

            <div className='exploreSection'>
                <h2>LET'S MOVE FORWARD.....</h2>

                <Link to="../cave3">
                    <h3 className="exploreTitle">
                        Cave3<span className="arrow">&rarr;</span>
                    </h3>
                </Link>

            </div>




            <Outlet />
        </div>
    )
}

export default Cave2
