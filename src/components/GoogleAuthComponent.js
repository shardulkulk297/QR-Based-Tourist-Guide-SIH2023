import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useGoogleLogin } from 'react-oauth/google';
import { useHistory } from "react-router-dom";

const GoogleAuthComponent = () => {
  const history = useHistory();

  // Google OAuth configuration
  const { authorize, user, error } = useGoogleLogin({
    clientId: '840853017612-9gta57ckvmqtaj422elb8t3g0h525354.apps.googleusercontent.com',
    redirectUri: 'https://your-redirect-uri.com', // Replace with your redirect URI
  });

  useEffect(() => {
    // Additional initialization code for Google Sign-In can go here
    // This will be executed once the component is mounted
  }, []);

  useEffect(() => {
    // Check if the user object has been populated
    if (user) {
      // Redirect to UserInput component after successful authentication
      history.push("/user-input");
    } else if (error) {
      // Handle authentication failure
      console.error("Google authentication failed:", error);
    }
  }, [user, error, history]);

  return (
    <>
      <Helmet>
        {/* Add Google Sign-In API script to the head */}
        <script src="https://apis.google.com/js/platform.js" async defer></script>
      </Helmet>

      {/* Your component content goes here */}
      <div>
        <button onClick={() => authorize()}>Login with Google</button>
      </div>
    </>
  );
};

export default GoogleAuthComponent;
