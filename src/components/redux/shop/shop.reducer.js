import { shop_Data } from "./shop.data"

const INITIAL_STATE = {
    collections: shop_Data
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}


export default shopReducer;