import { useEffect } from "react";
import Landing from "./Layout/Landing";
import Navigation from "./Layout/Navigation";
import Home from "./Layout/Home";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();

  return (
    <div className="bg-background-1 flex h-screen flex-col items-center justify-center pb-[150px]">
      <Navigation></Navigation>
      {!isLoading &&
        // Only render Home component if authenticated
        (isAuthenticated ? <Home user={user} /> : <Landing />)}
    </div>
  );
}

export default App;
