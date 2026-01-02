import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  function handleSigninClick() {
    if (userName && password) {
      const userData = {
        username: userName,
      };
      login(JSON.stringify(userData));
    }
  }

  return (
    <section id="login-form" className="w-full">
      <div className="w-full flex flex-col justify-center items-center bg-blue-700/80 border border-blue-700 rounded-xl py-10">
        <p className="font-bold text-4xl text-gray-50/90">Login</p>
        <form action="" className="w-full px-8">
          <div className="mt-5 w-full">
            <input
              id="username-field"
              placeholder="Username"
              type="text"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              maxLength={50}
              className="block w-full md:w-[70%] mx-auto bg-gray-100 border border-blue-700 rounded-md text-black font-semibold text-lg px-2 py-3 mb-4"
            />
          </div>
          <div className="mt-5 w-full">
            <input
              id="password-field"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              maxLength={50}
              className="block w-full md:w-[70%] mx-auto bg-gray-100 border border-blue-700 rounded-md text-black font-semibold text-lg px-2 py-3 mb-4"
            />
          </div>
          <p
            className="block w-full md:w-[70%] mx-auto text-gray-50/90  font-semibold text-2xl text-center border border-white rounded-full py-2 mt-9 active:bg-blue-700/60"
            onClick={handleSigninClick}
          >
            Signin
          </p>
        </form>
      </div>
    </section>
  );
}

export default LoginForm;
