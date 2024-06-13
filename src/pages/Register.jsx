import { useRegister } from "../hooks/useRegister";

function Register() {
  const { signWithGoogle, isPending } = useRegister();
  return (
    <div className="bg-gray-500 flex flex-col items-center justify-center h-full min-h-screen">
      <div className="bg-white p-10 w-[530px] flex flex-col justify-around h-[300px] text-center">
        <h1 className="text-3xl font-bold mb-10">Register</h1>
        {isPending && <p>Loading...</p>}
        <button className="btn btn-primary w-full" onClick={signWithGoogle}>Google</button>
      </div>
    </div>
  );
}

export default Register;
