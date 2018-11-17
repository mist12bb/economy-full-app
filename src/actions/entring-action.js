import { RootStore } from "../reducers/reducers";
export const FETCH_ENTRING = "ENTRING:FETCH_ENTRING";
export const RESIVED_ENTRING = "ENTRING:RESIVED_ENTRING";
export const FETCH_ENTRING_ERROR = "ENTRING:ERROR";

export const init_state = {
    entring:[],
    "fetch":null,
    "FETCHING":null
}

/* export function fetch_entring() {
        axios.get("http://localhost:1482/entering").then(res=>{
            return {type: RESIVED_ENTRING, payload: res.data};
        })
};
axios.get("http://localhost:1482/entering").then(res=>{
    console.log(res.data)
}) */
/* RootStore.dispatch( (dispatch=>{
    dispatch({type: FETCH_ENTRING})
    axios.get("http://localhost:1482/entring").then(res=>{
        dispatch({type: RESIVED_ENTRING, payload: res.data})
    }).catch(err=>{
        dispatch({type: FETCH_ENTRING_ERROR , payload: err})
    })
})

) */
console.log(RootStore)