let maxId = 2;

export const addItem = (firstName, lastName, email) => {
  return{
    type:'ADD_ITEM',
    id: ++maxId,
    firstName, 
    lastName, 
    email
  }
}

export const deletePerson = (id) => {
  return{
    type: 'DELETE_ITEM',
    id
  }
}

export const logIn = (logged) => {
  return{
    type: 'LOG_IN',
    payload: logged
  }
}

export const editPersonTrue = () => {
  return{
    type:'EDIT_ITEM_TRUE',
  }
}

export const editPersonFalse = () => {
  return{
    type:'EDIT_ITEM_FALSE',
  }
}