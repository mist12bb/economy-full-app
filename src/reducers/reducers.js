import {createStore} from "redux";
import productsReducer from "./porducts"
import enitrngReducer from "./enitring-reducer";
import { RESIVED_ENTRING} from "../actions/entring-action"
import userReducer from  "./users-reducer"

import axios from "axios"

import {combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
 const reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    entring: enitrngReducer
})

const middleware = applyMiddleware( thunk)



export const RootStore = createStore(reducers, 
    middleware,
    window.devToolsExtension && window.devToolsExtension()
);
//fetch_entring()
RootStore.dispatch(dispatch=>{
    axios.get("http://localhost:1482/entering").then(res=>{
             dispatch ({type: RESIVED_ENTRING, payload: res.data});
        })
})
console.log("root store state",RootStore.getState())
/* let action = {
    type: "UPDATE_USER", payload: "odel"
}
RootStore.dispatch(fetch_entring()); */
console.log("way",RootStore.getState());

