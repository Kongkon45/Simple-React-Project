import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../Firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !password) {
      setErr("Enter your all details!");
    } else if (!name) {
      setErr("Enter your name!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (password.length < 8) {
      setErr("Password need minimum 8 character!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              setErr("");
              navigate("/");
            })
        })
        .catch((error) => {
        //   console.log(error.code);
          if(error.code == "auth/email-already-in-use"){
            setErr("Email Already in use!")
          }
          else{
            setErr("");
          }
        });
    }
  };

  
  
  return (
    <div className="w-1/3 mx-auto shadow-2xl p-10 rounded-2xl my-12">
      <h2 className="text-2xl text-center font-bold py-5">Create a Account</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-md font-bold" htmlFor="name">
          Name :
        </label>
        <input
          className="w-full py-2 px-6 mb-5 border-2 rounded-xl mt-2"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="text-md font-bold" htmlFor="email">
          Email :
        </label>
        <input
          className="w-full py-2 px-6 mb-5 border-2 rounded-xl mt-2"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-md font-bold" htmlFor="password">
          Password :
        </label>
        <input
          className="w-full py-2 px-6 mb-2 border-2 rounded-xl mt-2"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-center">{err}</p>
        <input
          className="w-full bg-orange-400 rounded-2xl text-white py-2 mt-4 text-2xl font-bold cursor-pointer"
          type="submit"
          value="SignUp"
        />
        <p className="text-center">
          <Link to="/signin">You have already account? SignIn</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
