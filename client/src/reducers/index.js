
export const initialState = {
    smurf:{
        name:"",
        position:"",
        nickname:"",
    },
    loading: false,
    error:""
}

export default function reducer(state= initialState, action){
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
                smurf:{
                    ...state.smurf,
                    name:action.payload.name,
                    position:action.payload.position,
                    nickname:action.payload.nickname,
                }
            }
        case  "FAILED_CALL":
            return{
                ...state,
                loading:false,
                error:"OH NO SOMETHING WENT WRONG!!!"
            }
    }

}

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