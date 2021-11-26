import '../sidebar.css'
import { useMediaQuery } from 'react-responsive'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUserCog, faFile } from '@fortawesome/free-solid-svg-icons'
import { LogoutButton } from './LogoutButton'

export const SidebarProfile = ()=>{

  const phone = useMediaQuery({ query: '(max-width: 454px)' })

  return(
    <div class="card mt-1" id="side">
      <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="mx-auto d-block" id="imgProfile"  alt="imgUser"/>
      <div class="card-body">
        <h5 class="card-title text-center">Nombre Usuario</h5>
        <p class="text-center mb-1"><span class="badge bg-info text-dark">Backend Developer</span></p>
        <p class="font-monospace text-center mb-1">email@example.com</p>
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