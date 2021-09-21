import HomeDataItem from "../HomeData";

const initialState = [];

const updateCart = (state = initialState, action) =>{
    if(action.type === "ADDINCART"){
        const addItem = HomeDataItem.filter((cur, index, arr)=>{
            return(cur.id == action.payload);
        });
        
        let isTrue = false;
        for (let i = 0; i < state.length; i++) {
            if(state[i].id === action.payload){
                isTrue = true;
                break;
            }                
        }

        if(isTrue){
            window.alert("Already Added to cart.");
            return state;
        }else{    
            console.log(state);
            return [addItem[0], ...state];
        }

        
    }


    if(action.type === "DELFROMCART"){
        const itemInCart = state.filter((cur, index, array)=>{
            return(cur.id !== action.payload);
        });

        return itemInCart;
    }

    return state;
}

export default updateCart;