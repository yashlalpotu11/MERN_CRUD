import React, { useState } from "react";
import "./addStudent.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function addStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enrollNumber, setEnrollNumber] = useState("");


  const addStudent = async (e) => {
    e.preventDefault();
    try{
        const newStudent = await axios.post("http://localhost:5000/api/Students/", {
            name, 
            email,
            enrollNumber
        });
        toast("Student" + newStudent.data.newStudent.name + "creadted successfully", {type: toast.TYPE.SUCCESS, autoClose: 3000});
        console.log(newStudent);
    }
    catch(err){
        // toast(err.message ,{ type: toast.TYPE.ERROR, autoClose: 3000 });
        console.log(err);
    }
  }

  return (
    <>
      <div className="AddStudent-Wrapper">
        <h1>Add students</h1>
        <form onSubmit={addStudent}>
            <label htmlFor="name"></label>
            <input 
                type="text" 
                placeholder="Enter name"
                name = "name"
                onChange={(e) => setName(e.target.value)}
                className="Add-Student-Input"
                id="name"
                required
            />
            <label htmlFor="name"></label>
            <input 
                type="text" 
                placeholder="Enter Email"
                name = "email"
                onChange={(e) => setEmail(e.target.value)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="Add-Student-Input"
                id="email"
                required
            />
            <label htmlFor="name"></label>
            <input 
                type="number" 
                placeholder="1 to 100"
                name = "enrollnumber"
                onChange={(e) => setEnrollNumber(e.target.value)}
                className="Add-Student-Input"
                id="enrollnumber"
                required
            />
            <button type="submit" className="Add-Student-Submit fa-fa-plus"></button>
            <button type="reset" className="Add-Student-Reset fa-fa-refresh"></button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
