import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NavItem from "../Components/NavItem";

function Navigation() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const handleReturnHome = () => {
    navigate("/home");
  };

  return (
    <div className="fixed top-0 z-30 flex w-screen justify-between bg-slate-700 p-8 backdrop-blur-lg lg:px-8">
      <h1
        className="flex text-xl font-bold text-white hover:cursor-pointer"
        onClick={handleReturnHome}
      >
        Weather Forecast
      </h1>

      {isAuthenticated && <NavItem></NavItem>}
    </div>
  );
}

export default Navigation;
