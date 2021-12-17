import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faCaretDown, faDownload, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import dateformat from "dateformat";
import { formatBytes } from 'bytes-formatter';

import {Context} from './FileManager'

export const GridViewFiles = ()=>{

  const context = useContext(Context)
  
  return(
    <div class="container" id="gridviewcont">
      <div class="row clearfix pb-2">

        {
          context.filesViewState.only_documents ? context.filesViewState.filterFiles.map(file=>(
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2" key={file._id}>
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target={`#btn${file._id}`} aria-expanded="false" aria-controls={`btn${file._id}`}><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id={`btn${file._id}`}>
                    <div class="btn-group-vertical">
                      <a class="btn btn-success btn-sm" href={file.url} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEye}/></a>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
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
          )) : context.filesViewState.only_multimedia ? context.filesViewState.filterFiles.map(file=>(
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2" key={file._id}>
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target={`#btn${file._id}`} aria-expanded="false" aria-controls={`btn${file._id}`}><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id={`btn${file._id}`}>
                    <div class="btn-group-vertical">
                      <a class="btn btn-success btn-sm" href={file.url} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEye}/></a>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
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
          )) : context.filesViewState.files.map(file=>(
            <div class="col-lg-3 col-md-4 col-sm-6 mt-2" key={file._id}>
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target={`#btn${file._id}`} aria-expanded="false" aria-controls={`btn${file._id}`}><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id={`btn${file._id}`}>
                    <div class="btn-group-vertical">
                      <a class="btn btn-success btn-sm" href={file.url} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faEye}/></a>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
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
          ))
        }

      </div>
    </div>
  )
}