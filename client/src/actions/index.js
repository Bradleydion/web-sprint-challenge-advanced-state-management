import axios from 'axios';
export const fetchSmurf = () => (dispatch)=>{
    dispatch({type:"CALLING_SMURF"})
    axios.get ("http://localhost:3333/smurfs")
    .then(res=>{
        dispatch({type:"CALLING_SMURF_SUCCESS", payload: res.data})
    })
    
    .catch(err=>{
        dispatch({type:"FAILED_CALL", payload:"OH NO, something went wrong"})
        console.log(err)
    })
}
export const addSmurf = (smurfs) => dispatch => {
    dispatch({type:"ADD_SMURF"})
    axios
        .post("https://localhost:3333/smurfs", smurfs)
        .then((res)=> {
            dispatch({type: "ADD_SMURF_SUCCESS", payload: res.data})
        })
        .catch((err)=>{
            dispatch({
                type:"FAILED_TO_ADD_SMURF",
                payload:"OH NO, something went wrong!"
            })
        })
}
export const updateFormError = (error)=>{
    return{
        type:"UPDATE_FORM_ERROR",
        payload:error
    }
}
//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.