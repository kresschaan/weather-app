import { useAuth0 } from "@auth0/auth0-react";
import Home from "../Layout/Home";
import App from "../App";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated === true) {
    return <Home />;
  } else {
    return <App />;
  }
};

export default ProtectedRoute;
