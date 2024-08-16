import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState :{
        items :[], 
    },
    reducers:{
        // mapping of action and reducer function 
        addItem :(state , action) =>{
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);


            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                state.items.push(newItem);
            }
            // console.log('Updated items (JSON):', JSON.parse(JSON.stringify(state.items)));
        },
        // it takes the state and modify's directly doesn't return anything .
        clearCart :(state) => {
            state.items = [];
            // we don't neeed action as we are not sending anything 
        },
        removeItem :(state,action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                if (state.items[itemIndex].quantity > 1) {
                    state.items[itemIndex].quantity -= 1;
                } else {
                    // state.items.pop();
                    state.items = state.items.filter((e)=>e.id != state.items[itemIndex].id);
                }
            }
            // console.log('Updated items (JSON):', JSON.parse(JSON.stringify(state.items)));
            // state.items.pop();
        },
        
    },
});

export const selectTotalQuantity = (state) => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const numberofitems = (state , itemID) =>{
    if(state.items.length !=0){
        const itemIndex = state.items.findIndex(item => item.id === itemID);

        if(itemIndex >0){
            return itemIndex.quantity;
        }
        else{
            return -1 ;
        }

    }
}

export const {addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer ;
