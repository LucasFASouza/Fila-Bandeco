import React from "react";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshTokenSetup";
import { useAuth } from "./authProvider";

const Login: React.FC = () => {
  const clientId =
    "299622886832-383aih5m68s667dt93ppjiv5uja13j6a.apps.googleusercontent.com";

  const { user, setUser } = useAuth();

  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const response = res as GoogleLoginResponse;
    console.log("Login Success");

    refreshTokenSetup(response);
    setUser(response);
  };

  const onFailure = (res: GoogleLoginResponse) => {
    console.log("Login failed: res:", res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn={true}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="bg-white text-usp p-3 rounded-lg drop-shadow">
          Login
        </button>
      )}
    />
  );
};

export default Login;
