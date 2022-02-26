import '../sidebar.css'
import { useContext, useEffect } from "react";
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUserCog, faFile } from '@fortawesome/free-solid-svg-icons'
import { LogoutButton } from './LogoutButton'
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/query";
import { TYPES } from "../actions/viewAction";
import { Context } from "./FileManager";

export const SidebarProfile = ()=>{

  const context = useContext(Context)
  const { user } = useAuth0()
  const { loading, error, data } = useQuery(GET_USER, {variables:{id: user.sub.replace('auth0|', '')}})
  useEffect(()=>{
    if(typeof data!=='undefined'){
      context.viewDispatch({type: TYPES.SET_PERSONAL_DATA, payload: data.getUser})
      context.viewDispatch({type: TYPES.SET_AVATAR_USERNAME_OCCUPATION, payload: data.getUser})
    }
  }, [data])

  const phone = useMediaQuery({ query: '(max-width: 454px)' })

  return(
    <div class="card mt-1" id="side">
      <img src={ context.filesViewState.avatar!=='' ? context.filesViewState.avatar : "https://res.cloudinary.com/lean99/image/upload/v1645893281/Portfolio/DefaultPhoto_eyiivp.png"} class="mx-auto d-block" id="imgProfile"  alt="imgUser"/>
      <div class="card-body">
        <h5 class="card-title text-center">{ context.filesViewState.username!=='' ? context.filesViewState.username : "UsernameExample" }</h5>
        <p class="text-center mb-1"><span class="badge bg-info text-dark">{ context.filesViewState.occupation!=='' ? context.filesViewState.occupation : "OccupationExample" }</span></p>
        <p class="font-monospace text-center mb-1">{ context.filesViewState.email!=='' ? context.filesViewState.email : "Example@mail.com" }</p>
        <div class="d-grid gap-2 mb-1">
          <LogoutButton/>
        </div>
        {
          phone && <div class="d-grid gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#list-tab" aria-expanded="false" aria-controls="collapseExample">
          <button class="btn btn-dark btn-sm"><FontAwesomeIcon icon={faCaretDown}/></button>
        </div>
        }
        
      </div>
      {
        phone && <div class="collapse" id="list-tab">
        <div class="list-group list-group-flush" id="" role="tablist">
            <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"><FontAwesomeIcon icon={faFile} /><span class="ms-2">Files</span></a>
            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"><FontAwesomeIcon icon={faUserCog} /><span class="ms-2">Settings</span></a>
        </div>
      </div>
      }
      {
        !phone && <div class="list-group list-group-flush" id="list-tab" role="tablist">
          <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home"><FontAwesomeIcon icon={faFile} /><span class="ms-2">Files</span></a>
          <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings"><FontAwesomeIcon icon={faUserCog} /><span class="ms-2">Settings</span></a>
        </div>
      }
</div>
  )
}
