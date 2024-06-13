import { GoogleAuthProvider } from "firebase/auth";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router-dom";

function Login() {
  const { signWithGoogle } = useRegister();

  return (
    <div className="bg-gray-500 h-full min-h-screen pt-20">
      <div className="flex flex-col justify-center items-center mx-auto p-10 bg-white w-[530px]">
        <h1 className="text-3xl mb-5">Login</h1>
        <div className="flex items-center justify-between w-full gap-5">
          <button className="btn btn-primary w-[125px]" onClick={signWithGoogle}>
            Google
          </button>
          <Link to="/register">
            <button className="btn btn-secondary w-[125px]">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
