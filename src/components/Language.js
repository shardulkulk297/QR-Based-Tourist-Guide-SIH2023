import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const languages = ["Hindi", "English", "French", "Telugu"];

const LanguageSelection = ({ updateRequest }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageSelect = () => {
    if (selectedLanguage) {
      // Update the request data with the selected language
      updateRequest((state) => ({
        ...state,
        request: `Please provide a detailed description of the [${state.request}] in ${selectedLanguage}.`,
        response: {},
      }));

      // Redirect to the generated text page
      return <Navigate to="/generated-text" />;
    }
  };

  return (
    <div>
      <h2>Select Language:</h2>
      <ul>
        {languages.map((language) => (
          <li key={language} onClick={() => setSelectedLanguage(language)}>
            {language}
          </li>
        ))}
      </ul>
      <button onClick={handleLanguageSelect}>Continue</button>
    </div>
  );
};

export default LanguageSelection;
