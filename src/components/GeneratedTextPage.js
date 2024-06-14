import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GeneratedTextPage = ({ predefinedPlace, predefinedWordCount, updateRequest }) => {
  const { language } = useParams();
  const [audioSource, setAudioSource] = useState("");
  const [textGenerated, setTextGenerated] = useState(false);

  useEffect(() => {
    const generateText = async () => {
      // Assuming `searchData` is a part of the component's state
      if (language) {
        await updateRequest((state) => {
          const newState = { ...state };
          newState.request = `Please provide a detailed description of the [${predefinedPlace}] as if you were a tour guide narrating to a group of visitors. Tailor the description in a way that resonates with a(n) [${language}] audience, employing engaging language and suitable cultural references. Ensure the information is comprehensive, covering historical significance, notable landmarks, local customs, popular activities, and any other pertinent details. The description should be of a moderate length, between [${predefinedWordCount}] words, maintaining an enthusiastic and informative tone throughout.`;
          newState.response = {};

          // Set the audio source based on the selected language
          setAudioSource(`https://ajantha.s3.ap-south-1.amazonaws.com/Ajanta+info/Ajanta+${language}.mp3`);
          setTextGenerated(true);

          return newState;
        });
      }
    };

    generateText();
  }, [language, predefinedPlace, predefinedWordCount, updateRequest]);

  return (
    <div>
      {textGenerated && (
        <div>
          <div className="GenText">
          {/* Render your generated text here */}
          <p>{/* Your generated text */}</p>
          </div>

          {/* Render audio controls */}
          <h4>"Listen Summary"</h4>
          {audioSource && (
            <audio controls className="AudioEd">
              <source src={audioSource} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          )}
          <div>
            <img src="https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave1/cave1+interior.jpg" className="centered-image" height={200} width={400}></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneratedTextPage;
