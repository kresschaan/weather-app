import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Home from "../Layout/Home";
import App from "../App";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (isAuthenticated === true) {
    return <Home />;
  } else {
    return <App />;
  }
};

export default ProtectedRoute;
