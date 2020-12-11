import Axios from "axios"

export const userAction=()=>{
    return async (dispatch)=>{
        Axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => dispatch({ type: "user", payload: data }))
      .catch((err) => console.log(err))
        
    }
}