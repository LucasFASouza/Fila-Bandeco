import React from "react";
import { GoogleLogout } from "react-google-login";
import { useAuth } from "./authProvider";

const clientId =
  "299622886832-383aih5m68s667dt93ppjiv5uja13j6a.apps.googleusercontent.com";

function Logout() {
  const { user, setUser } = useAuth();
  
  const onSuccess = () => {
    console.log("Logout Success");
    setUser(undefined);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Logout
          </button>
        )}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
