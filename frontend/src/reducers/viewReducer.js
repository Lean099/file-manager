import {TYPES} from '../actions/viewAction'

export const initialState = {
  files: [],
  email: '',
  occupation: '',
  grid_view: true,
  list_view: false
}

export function viewReducer(state, action){
  switch(action.type){
    case TYPES.GET_FILES_USER:{
      return {...state, files: action.payload}
    }
    case TYPES.GRID_VIEW:{
      return {grid_view: true, last_view: false}
    }
    case TYPES.LIST_VIEW:{
      return {grid_view: false, last_view: true}
    }
    default:
      return state
  }
}
