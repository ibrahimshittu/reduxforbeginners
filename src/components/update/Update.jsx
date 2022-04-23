import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import updateUser from "../../redux/apiCalls";

export default function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {userInfo, pending, error} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    updateUser({ "email": name, "password": email}, dispatch);

    setName(" ");
    setEmail(" ");
  }

  const handleDelete = e => {
    e.preventDefault();
    
  }


  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete} >Delete Account</button>
        <div className="updateContainer">
          <form onSubmit={handleSubmit}>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              className="updateButton" type="submit" disabled={pending}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
