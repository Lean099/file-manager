import {TYPES} from '../actions/viewAction'

export const initialState = {
  grid_view: true,
  list_view: false
}

export function viewReducer(state, action){
  switch(action.type){
    case TYPES.GRID_VIEW:{
      return {grid_view: true, last_view: false}
    }
    case TYPES.LIST_VIEW:{
      return {grid_view: false, last_view: true}
    }
    default: state
  }
} 