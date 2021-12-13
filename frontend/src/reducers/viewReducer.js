import {TYPES} from '../actions/viewAction'

export const initialState = {
  files: [],
  email: '',
  username: '',
  occupation: '',
  avatar: '',
  grid_view: true,
  list_view: false
}

export function viewReducer(state, action){
  switch(action.type){
    case TYPES.GET_FILES_USER:{
      return {...state, files: action.payload}
    }
    case TYPES.SET_AVATAR_USERNAME_OCCUPATION:{
      console.log(action)
      return {
        ...state,
        username: action.payload.updatePersonalData.username,
        avatar: action.payload.updatePersonalData.avatar, 
        occupation: action.payload.updatePersonalData.occupation}
    }
    case TYPES.SET_EMAIL_OR_PASSWORD:{
      console.log(action)
    }
    case TYPES.GRID_VIEW:{
      return {grid_view: true, last_view: false}
    }
    case TYPES.LIST_VIEW:{
      return {grid_view: false, last_view: true}
    }
    case TYPES.RESET:{
      return initialState
    }
    default:
      return state
  }
}
