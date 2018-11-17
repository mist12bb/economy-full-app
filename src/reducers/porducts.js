import {PRO_UPDATE} from "../actions/porduts-action"
const productsReducer = (state=[], {type, payload}) =>{

    switch(type) {
        case PRO_UPDATE: {
            return payload.name;
        
        }
        default: {return state}
}}

export default productsReducer;