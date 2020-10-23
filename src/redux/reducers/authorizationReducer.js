const auth = {
  logged: false
}


const authorizationReducer = (state=auth, action) => {
  switch(action.type){
    case 'LOG_IN':
      return {
        ...state, 
        logged: action.payload
      }
    default:
      return state;
  }
}

export {authorizationReducer};