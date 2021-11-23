import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFileVideo, faFile, faFileImage, faFilter, faList, faTh, faSyncAlt} from '@fortawesome/free-solid-svg-icons'

import {Context} from '../App'
import {TYPES} from '../actions/viewAction'

export const NavDrive = ()=>{

  const context = useContext(Context);

  return(
    <div class="row">
      <div class="d-flex justify-content-between my-2">
        <h4 class="">My Drive</h4>
        <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faPlus} className="me-1"/>Upload New File</button>
      </div>
      <div class="d-flex justify-content-between mb-2">

        <div class="d-flex">

          <div class="btn-group me-2">
            <button class="btn btn-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Items 
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faFile} className="me-1" />Documentos</a></li>
              <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faFileImage} className="me-1" />Imagenes</a></li>
              <li><a class="dropdown-item" href="#"><FontAwesomeIcon icon={faFileVideo} className="me-1" />Videos</a></li>
            </ul>
          </div>

          <div class="btn-group me-2">
            <button class="btn btn-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faFilter} className="me-1" />Sort
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Nuevos Primero</a></li>
              <li><a class="dropdown-item" href="#">Viejos Primero</a></li>
            </ul>
          </div>

          <button class="btn btn-outline-dark btn-sm"><FontAwesomeIcon icon={faSyncAlt}/></button>

        </div>

        <div class="d-flex">

          <p style={{margin: '0', alignSelf: 'center'}} class="me-1">View:</p>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" onClick={()=>{context.viewDispatch({type: TYPES.GRID_VIEW})}} class="btn btn-dark btn-sm"><FontAwesomeIcon icon={faTh}/></button>
            <button type="button" onClick={()=>{context.viewDispatch({type: TYPES.LIST_VIEW})}} class="btn btn-dark btn-sm"><FontAwesomeIcon icon={faList}/></button>
          </div>
          
        </div>
          
      </div>
    </div>
  )
}