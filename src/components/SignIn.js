import {useState, useRef} from "react";
import { formValidate } from "../utils/formValidate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from './Header';
import { BACKGROUND_URL } from "../utils/constants";
const SignIn = () => {
    const [IsSignInForm, setIsSignInFor] = useState(true);
    const [ErrorMessage, setErrorMessage] = useState(null);
    const Navigate = useNavigate();
    const toggleSignIn = () =>{
        setIsSignInFor(!IsSignInForm);
    }
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const dispatch = useDispatch();
    const handleButtonClick = () => {
        //form validation
        const message = formValidate(email.current.value ,password.current.value,(!IsSignInForm && name.current.value));
        setErrorMessage(message);
        if(message) return;

        //sign in sign up authentication
        if(!IsSignInForm){
            // sign up form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value
                    })
                    .then(()=> {
                        const {uid,email,displayName}= auth;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                        Navigate("/browse")
                    })
                    .catch((error) => {
                        setErrorMessage("error at line 46" + error.message)
                    });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode +" "+ errorMessage);
                });
        }

        else{
            // sign in form
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const {uid,email,displayName}= user;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                    Navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode +" "+ errorMessage);
                });
            }

    }

    return (
        <div style={{backgroundImage:`url(${BACKGROUND_URL})`,}} className="bg-cover bg-center h-[100vh] min-w-[1000px] pb-4">
            <Header/>
            <div className="flex items-center justify-center w-[100%] h-[100vh]" >
                <div className="bg-black bg-opacity-[0.8] min-w-[400px] w-4/12 p-14 flex flex-col gap-20 max-h-[90vh] absolute top-20">
                    <div>
                        <h2 className="text-white text-3xl font-bold mb-7">{IsSignInForm? "Sign In" : "Sign Up"}</h2>
                        <form className="flex flex-col gap-4" onSubmit={(e) => {e.preventDefault()}}>
                            {!IsSignInForm ? <input ref={name} type="text" placeholder="Full Name" className="p-3 placeholder-slate-300 text-white border border-gray-400 bg-opacity-30 bg-black rounded-md"/> : null}
                            <input ref={email} type="text" placeholder="Email or phone number" className="p-3 placeholder-slate-300 text-white border border-gray-400 bg-black bg-opacity-30 rounded-md"/>
                            <input ref={password} type="password" placeholder="Password" className="p-3 placeholder-slate-300 text-white border border-gray-400 bg-opacity-30 bg-black rounded-md" />
                            <p className="text-red-600 font-bold text-lg">{ErrorMessage}</p>
                            <button type="submit" className="text-center text-white bg-red-600 rounded-md py-2" onClick={handleButtonClick}>{IsSignInForm? "Sign In" : "Sign Up"}</button>
                            <a href="/#" className="hover:underline text-white text-center">Forget password?</a>
                        </form>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div>
                            <input type="checkbox" id="rememberme"/> 
                            <label htmlFor="rememberme" className="ml-3 text-white">Remember me</label>
                        </div>
                        <p className="text-gray-400">{IsSignInForm ? "New to Netflix? " : "Already have account? "}<span className="hover:underline text-white" onClick={toggleSignIn} >{IsSignInForm ? "Sign Up now." : "Sign In now."}</span></p>
                        <p className="text-sm text-gray-300">This page is protected by Google reCAPTCHA to ensure you'r not a bot. <a href="/#">Learn more</a> </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default SignIn;