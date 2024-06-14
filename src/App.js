import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Language from "./components/Language";
import NavigationBar from "./components/NavigationBar";
import RestaurantCard from './components/RestaurantCard';
import Info from "./pages/English/Info";
import HindiInfo from "./pages/Hindi/Info";
import Cave1 from "./pages/English/cave1";
import Cave2 from "./pages/English/cave2";
import Cave3 from "./pages/English/cave3";
import Cave4 from "./pages/English/cave4";
import Cave5 from "./pages/English/cave5";
import Cave1h from './pages/Hindi/cave1';
import Cave2h from './pages/Hindi/cave2';
import Cave3h from './pages/Hindi/cave3';
import Cave4h from './pages/Hindi/cave4';
import Cave5h from './pages/Hindi/cave5';

import UserInput from "./components/UserInput";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState({ request: "", response: {} });
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const getSearch = async () => {
    const rawResponse = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDreUEadou6XMBgT1huiHHkZ2FDjNH5074",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: data.request }] }],
          generationConfig: {
            stopSequences: ["Title"],
            temperature: 1.0,
            maxOutputTokens: 800,
            topP: 0.8,
            topK: 10,
          },
        }),
      }
    );
    const content = await rawResponse.json();
    setData({ request: data.request, response: content });
  };

  useEffect(() => {
    if (data.request && Object.keys(data.response).length === 0) {
      getSearch();
    }
  }, [data]);

  const renderContent = () => {
    const contentList = data?.response?.candidates[0]?.content?.parts;
    return contentList?.map((data, index) => (
      <p key={index} className="paragraph">
        {data.text}
      </p>
    ));
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Router>
      <div className="base-app">
        <NavigationBar />

        <Header />


        <Routes>
          <Route
            path="/"
            element={

              <>
                <UserInput updateRequest={setData} />
                {data.request && Object.keys(data.response).length === 0 ? (
                  <Loader loaderMessage="Wait a moment we're getting your place!" />
                ) : null}
                {data.request && Object.keys(data.response).length > 0 ? (
                  <div className="GenText">
                   
                    {renderContent()}

                   
                    <div className="exploreSection">
                      {/* Link to Cave1 page based on selected language */}
                      <Link to={`/${handleLanguageSelect === "Hindi" ? "Hindi" : "English"}/cave1`}>
                        <h3 className="exploreTitle">
                          {selectedLanguage === "Hindi" ? "हम Cave1 को जाते हैं" : "Let's Go to Cave1"}
                          <span className="arrow">&rarr;</span>
                        </h3>
                      </Link>
                     
                    </div>

                    <div className="restaurant-container">
                    <RestaurantCard
                      imageUrl="/img/h1.jpg"
                      name="Hotel Padmapani Park"
                      rating="4.5/5"

                    />
                    <RestaurantCard
                      imageUrl="/img/h2.jpg"
                      name="Hotel Ajanta Green"
                      rating="4.2/5"

                    />
                    
                    <RestaurantCard
                      imageUrl="/img/h3.jpg"
                      name="MTDC Guest House"
                      rating="4.1/5"

                    />
               
                      

                    </div>
                    
                   

                   
                  </div>
                ) : null}
              </>
            }
          />
          <Route path="/" element={<Language />} />
          {/* English Routes */}
          <Route path="/English/info" element={<Info />} />
          <Route path="/English/cave1" element={<Cave1 />} />
          <Route path="/English/cave2" element={<Cave2 />} />
          <Route path="/English/cave3" element={<Cave3 />} />
          <Route path="/English/cave4" element={<Cave4 />} />
          <Route path="/English/cave5" element={<Cave5 />} />
          {/* Hindi Routes */}
          <Route path="/Hindi/info" element={<HindiInfo />} />
          <Route path="/Hindi/cave1" element={<Cave1h />} />
          <Route path="/Hindi/cave2" element={<Cave2h />} />
          <Route path="/Hindi/cave3" element={<Cave3h />} />
          <Route path="/Hindi/cave4" element={<Cave4h />} />
          <Route path="/Hindi/cave5" element={<Cave5h />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
