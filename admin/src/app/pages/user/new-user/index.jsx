import React, { useState, useEffect } from "react";
import "./new-user.css";
import { genderData } from "./data";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../../firebase";
import { addUserStart } from "../../../../features/user/userSlice";
import { useDispatch } from "react-redux";

export default function NewUser() {
  const [file, setFile] = useState("");
  const [inputs, setInputs] = useState({});
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.value === "yes"
            ? true
            : e.target.value === "no"
            ? false
            : e.target.value,
      };
    });
  };

  console.log(inputs);

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const user = { ...inputs, img: downloadURL, gender };

          dispatch(addUserStart(user));
        });
      }
    );
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="john"
          />
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="John Smith"
          />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="password"
          />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input
            name="phone"
            onChange={handleChange}
            type="text"
            placeholder="+1 123 456 78"
          />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input
            name="address"
            onChange={handleChange}
            type="text"
            placeholder="New York | USA"
          />
        </div>

        <div className="newUserItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            {genderData.map((item, index) => (
              <div key={index}>
                <input
                  onClick={() => setGender(item.type)}
                  type="radio"
                  name="gender"
                  id={item.type}
                  value={item.type}
                />
                <label htmlFor={item.type}>{item.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="newUserItem">
          <label>Admin</label>
          <select
            name="isAdmin"
            onChange={handleChange}
            className="newUserSelect"
            id="active"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <button onClick={handleClick} className="newUserButton">
          Create
        </button>
      </form>
    </div>
  );
}
