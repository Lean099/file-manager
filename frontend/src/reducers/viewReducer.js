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
      return {
        ...state,
        username: action.payload.username,
        avatar: action.payload.avatar, 
        occupation: action.payload.occupation,
        email: action.payload.email
      }
    }
    case TYPES.SET_EMAIL_OR_PASSWORD:{
      return {
        ...state,
        email: action.payload.email
      }
    }
    case TYPES.GRID_VIEW:{
      return {...state, grid_view: true, last_view: false}
    }
    case TYPES.LIST_VIEW:{
      return {...state, grid_view: false, last_view: true}
    }
    case TYPES.RESET:{
      return initialState
    }
    default:
      return state
  }
}
