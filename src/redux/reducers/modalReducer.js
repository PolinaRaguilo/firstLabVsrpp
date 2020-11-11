const initialState = {
  editing: false
}

const modalReducer = (state=initialState, action) => {
  switch(action.type){
      case 'EDIT_ITEM_TRUE':
        return {...state,  
          editing: true
        };
      case 'EDIT_ITEM_FALSE':
        return {...state,  
            editing: false
          };
    default:
      return state;
  }
}

export {modalReducer}