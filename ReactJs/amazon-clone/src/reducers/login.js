import firebase from "firebase";
const initialState = {Switcher : false};

const login = (state = initialState, action) => {
    if(action.type === "LOGINDATA"){
        const {Email, Password,History} = action.payload;
        if(Email != "" && Password != ""){
            const auth = firebase.auth();
            auth.signInWithEmailAndPassword(Email, Password).then(() => {
                History.push("/");
            }).catch((error) => {
                alert(error.message);    
                return state;        
            });
            
            return(
                {
                    ...action.payload,
                    Switcher : true
                }
            );

        }else{
            alert("Please Enter the Login Details");
            return state;
        }        
    }

    if(action.type === "LOGOUT"){

        const auth = firebase.auth();
        auth.signOut();

        return {Switcher : false};
    }
    return state;
}

export default login;