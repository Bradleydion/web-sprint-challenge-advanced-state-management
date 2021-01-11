
export const initialState = {
    smurf:[],
    loading: false,
    adding:false,
    error:""
}

const reducer = (state= initialState, action)=>{
    switch(action.type){
        case "CALLING_SMURF":
            return{
                ...state,
                loading:true,
            }
        case "CALLING_SMURF_SUCCESS":
            return{
                ...state,
                loading:false,
                error:"",
                smurf:action.payload,
                
            }
        case  "FAILED_CALL":
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case "ADD_SMURF":
            return{
                ...state,
                adding:true
            }
        case "ADD_SMURF_SUCCESS":
            return{
                ...state,
                adding:false,
                smurfs:action.payload
            }
        case "FAILED_TO_ADD_SMURF":
            return{
                ...state,
                error:action.payload
            }
        case "UPDATE_FORM_ERROR":
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}
export default reducer

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary