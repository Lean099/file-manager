import {TYPES} from '../actions/viewAction'

export const initialState = {
  files: [],
  filterFiles: [],
  email: '',
  username: '',
  occupation: '',
  avatar: '',
  grid_view: true,
  list_view: false,
  new_files_first: true,
  old_files_first: false,
  only_documents: false,
  only_multimedia: false
}

export function viewReducer(state, action){
  switch(action.type){
    case TYPES.GET_FILES_USER:{
      return {...state, files: action.payload}
    }
    case TYPES.NEW_FILE_UPLOADED:{
      return {...state, files: [...state.files, action.payload]}
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
    case TYPES.NEW_FILES_FIRST:{
      let newArr = action.payload.sort((a,b)=> new Date(b.date)-new Date(a.date))
      return {...state, filterFiles: newArr, new_files_first: true, old_files_first: false}
    }
    case TYPES.OLD_FILES_FIRST:{
      let newArr = action.payload.sort((a,b)=> new Date(a.date)-new Date(b.date))
      return {...state, filterFiles: newArr, old_files_first: false, new_files_first: false}
    }
    case TYPES.ONLY_DOCUMENTS:{
      const formats = ['xlss', 'docx', 'pdf', 'txt', 'pptx', 'doc']
      const isDocument = (value)=>{
        for(let x = 0; x<formats.length ;x++){
          if(value.format===formats[x]){
            return true
          }
        }
      }
      const newFilterArr = action.payload.filter(isDocument)
      return {...state, filterFiles: newFilterArr, only_documents: true, only_multimedia: false}
    }
    case TYPES.ONLY_MULTIMEDIA:{
      const formats = ['mp4', 'avi', 'wmv', 'mkv', 'jpg', 'png', 'jpeg', 'gif', 'svg']
      const isDocument = (value)=>{
        for(let x = 0; x<formats.length ;x++){
          if(value.format===formats[x]){
            return true
          }
        }
      }
      const newFilterArr = action.payload.filter(isDocument)
      return {...state, filterFiles: newFilterArr, only_multimedia: true, only_documents: false}
    }
    case TYPES.RESET:{
      return initialState
    }
    default:
      return state
  }
}
