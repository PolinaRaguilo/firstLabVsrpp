
const initialState =[
  {id:1, firstName: 'Polina', lastName: 'Raguilo', email: 'polina2020@mail.ru'},
  {id:2, firstName: 'Julia', lastName: 'Ivanova', email: 'Julia2020@mail.ru'}
]

const tableReducer = (state=initialState, action) => {
  switch(action.type){
    case 'ADD_ITEM':
      return [...state,{
        id: action.id,
        firstName: action.firstName, 
        lastName: action.lastName, 
        email: action.email
      }]
      case 'DELETE_ITEM':
        return state.filter((user) => user.id !== action.id)
    default:
      return state;
  }
}

// return [...state.slice(0, action.id), ...state.slice(action.id + 1)]

export default tableReducer;