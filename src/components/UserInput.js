import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const languages = ["English", "Hindi", "French"];
const predefinedPlace = "Ajanta Caves";
const wordCounts = ["200", "300", "400"]; // Add your specific word count options

const UserInput = ({ updateRequest }) => {
  const [searchData, setSearchData] = useState({
    selectedLanguage: "",
    selectedWordCount: "300", // Default word count
  });

  const [audioSource, setAudioSource] = useState("");
  const [textGenerated, setTextGenerated] = useState(false);

  useEffect(() => {
    const generateText = async () => {
      if (searchData.selectedLanguage) {
        await updateRequest((state) => {
          const newState = { ...state };
          newState.request = `Please provide a detailed description of the [${predefinedPlace}] as if you were a tour guide narrating to a group of visitors. Tailor the description in a way that resonates with a(n) [${searchData.selectedLanguage}] audience, employing engaging language and suitable cultural references. Ensure the information is comprehensive, covering historical significance, notable landmarks, local customs, popular activities, and any other pertinent details. The description should be of a moderate length, between [${searchData.selectedWordCount}] words, maintaining an enthusiastic and informative tone throughout.`;
          newState.response = {};

          // Set the audio source based on the selected language
          setAudioSource(`https://ajantha.s3.ap-south-1.amazonaws.com/Ajanta+info/Ajanta+${searchData.selectedLanguage}.mp3`);
          setTextGenerated(true);

          return newState;
        });
      }
    };

    generateText();
  }, [searchData, updateRequest]);

  return (
    <div>
      <div className="inpbox" >
        <div>
          <b>Select Language: </b>{searchData.selectedLanguage}
        </div>
        <ul className="dropdown-list">
          {languages.map((language) => (
            <li key={language} onClick={() => setSearchData({ ...searchData, selectedLanguage: language })}>
              {language}
            </li>
          ))}
        </ul>
      </div>

      <div className= "inpbox below-element" >
        <div ><b>Summarize in words: </b>{searchData.selectedWordCount}</div>
        <ul className="dropdown-list" >
          {wordCounts.map((count) => (
            <li key={count}  onClick={() => setSearchData({ ...searchData, selectedWordCount: count })}>
              {count}
            </li>
          ))}
        </ul>
      </div>

      {textGenerated && (
        <div>
          {/* Render your generated text here */}
          <div className="text-container">
            <p className="generated-text">{/* Your generated text */}</p>
          </div>


          {/* Render audio controls */}

          {audioSource && (
            <div className="centered-content">
              
              <audio controls className="AudioEd">
                <source src={audioSource} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          <div>
            <img src="https://ajantha.s3.ap-south-1.amazonaws.com/caves/Ajanta+Cave1/cave1+interior.jpg" className="centered-image" height={300} width={700}></img>
          </div>






        </div>
      )}


    </div>
  );
};

export default UserInput;
