import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Adduser from "./components/Adduser";
import Profile from "./components/profile";
import Pendingrequest from "./components/Pendingrequest";
import Task from "./components/Task";
import {BrowserRouter, Routes,Route,Navigate} from "react-router-dom"
import ProfileDetails from "./components/ProfileDetails";
import Resetpassword from "./components/ResetPassword";
import { useState} from "react";

function App() {

  let [users,setUsers] =useState([
    {
      name : "rdkumar",
      email :"rdkumar881@gmail.com",
      mobile :"9564423454",
      dob:"1999-09-19",
    },
    {
      name : "kumar",
      email :"kumar@gamil.com",
      mobile :"9876535342",
      dob:"1988-09-18",
    },
    {
      name :"daniel",
      email :"dani@gmail.com",
      mobile :"9768523432",
      dob:"2000-12-12",
    },
    {
      name : "balu",
      email : "balu23@gmail.com",
      mobile :"9994445339",
      dob: "2001-12-13",
    }
  ])
  return <> 
  <BrowserRouter>
   <div id="wrapper">
    < Sidebar />
    <Routes>
      <Route path ="/dashboard" element = {<Dashboard  users ={users} setUsers={setUsers}/>}/>
      <Route path ="/add-user" element = {<Adduser  users ={users} setUsers={setUsers}/>}/>
      <Route path ="/edit-user/:id" element = {<Adduser  users ={users} setUsers={setUsers}/>}/>
      <Route path ="/profile" element = {<Profile/>}>
        <Route path = "profiledetails" element ={<ProfileDetails/>}/>
        <Route path = "password" element ={<Resetpassword/>}/>
      </Route>
      <Route path ="/pending-request" element = {<Pendingrequest/>}/>
      <Route path ="/task" element = {<Task/>}/>
      <Route path ="*" element = {<Navigate/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  </>
}

export default App;
