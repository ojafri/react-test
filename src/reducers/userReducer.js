export default function reducer(state={
    user: {}, //init user object here
    fetching: false, //boolean state obj's to let components know if data received or errored out
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
    }
    // Any other status to get other user action types covered
 return state
}