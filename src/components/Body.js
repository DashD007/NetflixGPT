import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import SignIn from './SignIn';
import Browse from './Browse';
import GPTSearch from './GPTSearch';

// import {useEffect} from "react";
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from 'firebase';
// import {addUser, removeUser} from "../utils/userSlice"
// import { useDispatch } from 'react-redux';
// import firebase from 'firebase/compat/app';

const Body = () => {
    // const dispatch = useDispatch();
    // useEffect(()=>{
        // onAuthStateChanged(auth, (user) => {
        // if (user) {
        //     const {uid,email,displayName} = user;
        //     dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        // } else {
        //     dispatch(removeUser());
        // }
        // });
        // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //       // User is signed in, see docs for a list of available properties
        //       // https://firebase.google.com/docs/reference/js/v8/firebase.User
        //         // const {uid,email,displayName} = user;
        //         // dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        //     } else {
        //       // User is signed out
        //       // ...
        //     }
        //   });
    // },[])

    const appRoute = createBrowserRouter([
        {
            path:"/",
            element:<SignIn/>,
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/gpt",
            element:<GPTSearch/>
        }
    ]);

  return (
    <div className="bg-gradient-to-b from-black">
        
        <RouterProvider router={appRoute}/>
        {/* <img className="h-[100vh] w-[100vw] -z-10 bg-gradient-to-b from-black absolute" src={BACKGROUND_URL} alt='background img'/> */}
    </div>
  )
}

export default Body