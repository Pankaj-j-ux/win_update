import firebase from "firebase";
const initialState = {};

const signup = (state = initialState, action) =>{
    if(action.type === "SIGNUPDATA"){
        const {Name, Email, Password, CPassword, History} = action.payload;
        if(Email != "" && Name != ""  && Password != "" && CPassword != ""){
            if(Password === CPassword){
                
                const auth = firebase.auth();
                auth.createUserWithEmailAndPassword(Email,Password).then(()=>{
                    History.push("/login");         
                }).catch(E =>{
                    alert(E.message);
                })

                return action.payload;                
            }else{
                alert("Password not match");
                return state;
            }
        }else{
            alert("Please Enter the Details");
            return state;
        }
    }
    return state;
}

export default signup;