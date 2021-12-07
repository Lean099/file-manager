import { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faFileVideo, faFile, faFileImage, faFilter, faList, faTh, faSyncAlt} from '@fortawesome/free-solid-svg-icons'
import { useAuth0 } from "@auth0/auth0-react";

import {Context} from './FileManager'
import {TYPES} from '../actions/viewAction'

import { useMutation } from '@apollo/client'
import { UPLOAD_IMAGE } from '../graphql/mutation'

export const NavDrive = ()=>{

  const { user } = useAuth0()
  const [uploadImage, {data}] = useMutation(UPLOAD_IMAGE)
  const [newImage, setNewImage] = useState(null)
  const context = useContext(Context);

  const saveImageState = (e)=>{
    setNewImage(e.target.files[0])
  }

  const resetInputFile = (e)=>{
    document.getElementById("fileInput").value = "";
  }

  const sendFileBackend = (e)=>{
    e.preventDefault()
    uploadImage({variables: {
      file: newImage,
      id: user.sub.replace('auth0|', '')
    }})
  }

  return(
    <div class="row">
      <div class="d-flex justify-content-between my-2">
        <h4 class="">My Drive</h4>
        <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon icon={faPlus} className="me-1"/>Upload New File</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New File</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <div class="col">
                      <label for="image" class="form-label">Select the file you want to upload.</label>
                      <div class="input-group mt-2">
                          <input type="file" class="form-control" onChange={saveImageState} id="fileInput" aria-describedby="img" aria-label="Upload"/>
                          <button class="btn btn-dark" onClick={resetInputFile} type="button" id="fileInput">
                              <div class="btn-close btn-close-white"></div>
                          </button>
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={sendFileBackend} class="btn btn-primary">Upload</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="d-flex justify-content-between mb-2">

        <div class="d-flex">

          <div class="btn-group me-2">
            <button class="btn btn-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              All Items
            </button>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item btn"><FontAwesomeIcon icon={faFile} className="me-1" />Documentos</button></li>
              <li><button class="dropdown-item btn"><FontAwesomeIcon icon={faFileImage} className="me-1" />Imagenes</button></li>
              <li><button class="dropdown-item btn"><FontAwesomeIcon icon={faFileVideo} className="me-1" />Videos</button></li>
            </ul>
          </div>

          <div class="btn-group me-2">
            <button class="btn btn-dark btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faFilter} className="me-1" />Sort
            </button>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item btn">Nuevos Primero</button></li>
              <li><button class="dropdown-item btn">Viejos Primero</button></li>
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
