const initialState={
    userData: null

}
export const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "user":
            return {...state,userData:action.payload}
    
        default:
            return state
    }

}