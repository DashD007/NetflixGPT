export const formValidate = (email, password,fullname) =>{
    console.log(email, password,fullname)
    const IsValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const IsValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!IsValidEmail) return "Email is invalid. "
    if(!IsValidPassword) return "Password is invalid."
    if(fullname){
        const IsValidFullname = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname);
        if(!IsValidFullname) return "Invalid Fullname"
    }
    return null;
}