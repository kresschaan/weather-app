import { useAuth0 } from "@auth0/auth0-react";

function Landing() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="mx-20 xl:mx-10">
      <h2 className="pb-2 text-xl">
        Welcome to the weather forecast web application. Please login with your
        Github user to use the application and view the weather in your city.
      </h2>
      <div className="justify-center">
        <button
          className="mt-10 h-12 rounded-[14px] bg-sky-900 px-16 text-white"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Landing;
