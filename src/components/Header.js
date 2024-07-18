import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { signOut } from 'firebase/auth'
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '../utils/userSlice'
import { useSelector } from 'react-redux';
import icon from "../assets/netflix-user.jpg";
import { useState } from 'react'

const Header = () => {
  const [IsGPTSearch, setISGPTSearch] = useState(true);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGPTSearch = () =>{
    setISGPTSearch(!IsGPTSearch);
    console.log(IsGPTSearch)
    IsGPTSearch ? navigate("/gpt") : navigate("/browse");
  }
  // 
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  return (
    <div className="w-[100%] flex justify-center bg-transparent z-10 absolute top-0 left-0 bg-gradient-to-b from-black">
        <div className="w-[1200px] flex justify-between items-center">
            <img src={LOGO_URL} alt="logo" className="w-[12vw] min-w-[150px]"/>
            {
              user ? (<div className="flex gap-5 items-center">
                
                <div className="flex flex-col justify-center items-center pt-6">
                  <img src={icon} alt="user profile" className='w-10 h-10 rounded-md'/>
                  <p className='text-white text-md'>{user.displayName}</p>
                </div>
                <button onClick={handleGPTSearch} className="text-white border-none text-md bg-red-600 px-3 py-2 rounded-md">GPT Search</button>
                <button onClick={handleSignOut} className="text-white border-none text-md bg-red-600 px-3 py-2 rounded-md">Sign out</button>
              </div>) : null
            }
              
        </div>
    </div>
  )
}

export default Header