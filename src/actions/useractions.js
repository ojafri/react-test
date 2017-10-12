//All user related actions go here
import axios from "axios";

export function fetchUsers(){
    return function(dispatch) {
        dispatch({type: "FETCH_USERS"}); 
        axios.get("/api/react-test/users")
            .then((response) => {
                dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_USERS_REJECTED", payload: err})
            })
        }
    }
//Other CRUD operations go here...