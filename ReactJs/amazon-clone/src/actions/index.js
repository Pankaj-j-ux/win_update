export const addInCart = (id) => {
    return(
        {
            type : "ADDINCART",
            payload : id 
        }
    );
};

export const deleteFromCart = (id) => {
    return(
        { 
            type : "DELFROMCART",
            payload : id
        }
    );
};

export const logIn = (data) => {
    return(
        { 
            type : "LOGINDATA",
            payload : data
        }
    );
};

export const signUp = (data) => {
    return(
        { 
            type : "SIGNUPDATA",
            payload : data
        }
    );
};

export const logOut = () => {
    return(
        { 
            type : "LOGOUT"
        }
    );
};