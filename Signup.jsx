import Input from "./Input"
import { useState } from "react"
import { Link } from "react-router-dom"
import Login from "./Login"
import {createAuthUserWithEmailAndPassword, createuserdocfromAuth} from './utils/firebase'
function Signup() {
  
  const [contact, setcontact] =useState({
    Enter_Name:'',
    Email:'',
    Password:'',
    Confirm_password:''
  })

  const {Enter_Name,Email,Password,Confirm_password} =contact
  console.log(contact)
  async function handleClick(event)
  {
   if(Password!==Confirm_password)
   {  
    alert('Password do not match')
    return;
   }
    try{
    const {user} = await createAuthUserWithEmailAndPassword(Email,Password)
    await createuserdocfromAuth(user,{Enter_Name})
    console.log(user)
    } 
    catch(error){
    console.log('error in creation', error.message)
    }
  }
   function handlepass(event)
  {
    const value =event.target.value
    const name =event.target.name
    
     setcontact( (prevalue)=>
     {
      return{
        ...prevalue,
        [name]:value

            }
        })
  }
  return (
    <div className="header" >
     
      <Input
        name = 'Enter_Name'
        type='text'
        placeholder='Name'
        onChange ={handlepass}
      />
      <br></br>
      <Input
        name = 'Email'
        type='Email'
        placeholder='Email'
        onChange ={handlepass}
      />
      <br></br>
      <Input
        name= 'Password'
        type='Password'
        placeholder='Password'
        onChange ={handlepass}
        />
      <br></br>
    
      <Input
        name= 'Confirm_password'
        type='Password'
        placeholder='Confirm your password'
        onChange ={handlepass}
        />
      <br></br>
      <button onClick={handleClick}>
      Sign Up
      </button>
             <br></br>
             <br></br>
      <Link to ='/login'>
      Login
      </Link>
    </div>
)}
export default Signup