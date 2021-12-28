import { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faCaretDown, faDownload, faEye, faTrashAlt, faFileSignature, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import dateformat from "dateformat";
import { formatBytes } from 'bytes-formatter';
import { Countdown } from './Countdown'

import { useMutation } from '@apollo/client'
import { UPDATE_NAME_FILE } from '../graphql/mutation'

import { Context } from './FileManager'
import { TYPES } from '../actions/viewAction'

export const Card = ({file})=>{

	const context = useContext(Context)
	const [ newName, setNewName ] = useState(file.name)
	const [ rnmFile, {data, reset} ] = useMutation(UPDATE_NAME_FILE)

	useEffect(()=>{
		if(typeof data!== 'undefined'){
			context.viewDispatch({type: TYPES.RENAME_FILE, payload: data.updateNameFile})
			context.viewDispatch({type: TYPES.COUNTDOWN})
			reset()
		}
	}, [data])
	
	const resetInput = (id)=>{
    	document.getElementById(id).value=""
  	}

  	const handleChange = (e)=>{
  		setNewName(e.target.value)
  	}

  	const renameFile = (idFile)=>{
  		rnmFile({variables: {
  			id: idFile,
  			name: newName
  		}})
  	}

	return(
		<div class="col-lg-3 col-md-4 col-sm-6 mt-2" key={file._id}>
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target={`#btn${file._id}`} aria-expanded="false" aria-controls={`btn${file._id}`}><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id={`btn${file._id}`}>
                    <div class="btn-group-vertical">
                      <a class="btn btn-success btn-sm" id="firstbtn" href={file.url} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEye}/></a>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
                      <button type="button" data-bs-toggle="modal" data-bs-target={`#modal${file._id}`} class="btn btn-secondary btn-sm"><FontAwesomeIcon icon={faFileSignature}/></button>
                    </div>
                  </div>

                  <div class="modal fade" id={`modal${file._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Rename File</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <div class="input-group">
                                <input type="text" onChange={handleChange} class="form-control" id={file._id} value={newName}/>
                                <button onClick={()=>{ resetInput(file._id) }} class="btn btn-dark" type="button" id="fileInput">
                                    <div class="btn-close btn-close-white"></div>
                                </button>
                              </div>
                              {
                              	context.filesViewState.countdown && (
                              		<div class="alert alert-success my-2 p-2 d-flex justify-content-between" role="alert">
				                      <div >
				                      <FontAwesomeIcon icon={faCheckCircle} className="me-1" />The file was renamed successfully
				                      </div>
				                      <Countdown/>
				                    </div>
                              	)
                              }
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <button onClick={()=>{ renameFile(file._id) }} type="button" class="btn btn-primary">Rename</button>
                            </div>
                          </div>
                        </div>
                     </div>

                </div>
                
                <div class="card-img-top">
                  <FontAwesomeIcon class="card-img-top mx-auto d-block my-4" style={{width: '35px'}} icon={faFilePdf}/>
                </div>
                <div class="card-body">
                <p class="card-title h6">{file.name}.{file.format}</p>
               
                  <small class="d-flex justify-content-between"><span class="text-primary">Size: {formatBytes(file.size)}</span><span class="text-muted">{dateformat(file.createdAt, "mmm dd, yyyy")}</span></small>
               
                 
              </div>
            </div>
          </div>
	)
}