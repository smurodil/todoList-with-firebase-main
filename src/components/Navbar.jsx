import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clear } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("signOut successfully");
        dispatch(clear());
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="w-full bg-slate-500 py-5 px-10">
      <div className=" flex items-center justify-between">
        <h1 className="text-white btn btn-ghost text-3xl">Todo App</h1>
        <button className="btn btn-secondary" onClick={logOut}>SignOut</button>
      </div>
    </div>
  );
}

export default Navbar;
