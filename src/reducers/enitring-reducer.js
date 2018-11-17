import {init_state, RESIVED_ENTRING} from "../actions/entring-action"


 const enitrngReducer = (state =init_state, {type , payload}) =>{

    switch (type) {
    /*     case FETCH_ENTRING:{
                return {...state, entring:payload, fetch:false , FETCHING: true};
            } */
            case RESIVED_ENTRING :{

                /* return {...state, FETCHING:false, fetch: true} */
                return payload
        }
        /* case FETCH_ENTRING_ERROR: {
            return {FETCHING: false, fetch: false}
        } */
        case "som":{
            return "hello world"
        }
        default: {
            return state;
        }
    }
}

export default enitrngReducer
