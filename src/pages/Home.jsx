import { useState } from "react";
import { useCollection } from "../hooks/useCollection";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../firebase/firebaseConfig";

function Home() {
  const { user } = useSelector((state) => state.currentUser);
  const { data } = useCollection("tasks", ["uid", "==", user.uid]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      uid: user.uid,
      id: Math.random(),
    };

    await addDoc(collection(db, "tasks"), newTask)
      .then(() => {
        toast.success("add successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error);
      });
  };

  return (
    <div className="mt-5 w-[800px] mx-auto">
      <h1 className="text-2xl font-bold mb-5">Add New Date:</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-3"
      >
        <div className="flex flex-col">
          <label className="mb-3">Title:</label>
          <input
            className="input input-bordered input-accent w-full min-w-sm max-w-xl"
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </div>
        <br />
        <br />
        <div className="flex flex-col">
          <label className="mb-3">Description:</label>
          <input
            className="input input-bordered input-accent w-full max-w-xs"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </div>
        <br />
        <br />
        <button className="btn btn-accent mt-9">Submit</button>
      </form>

      <div className="mt-10 mb-10">
        <ul className="flex flex-col gap-5">
          {data &&
            data.map((task) => {
              return (
                <li className="bg-slate-300 py-5 px-14" key={task.id}>
                  <h1>Title: <strong>{task.title}</strong></h1>
                  <p>Description: <strong>{task.description}</strong></p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
