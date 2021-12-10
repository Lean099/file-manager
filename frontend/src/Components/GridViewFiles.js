import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faCaretDown, faDownload, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import {Context} from './FileManager'
import {TYPES} from '../actions/viewAction'

export const GridViewFiles = ()=>{

  const context = useContext(Context)

  console.log(context)
  return(
    <div class="container" id="gridviewcont">
      <div class="row clearfix pb-2">

          <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target="#bt1" aria-expanded="false" aria-controls="bt1"><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id="bt1">
                    <div class="btn-group-vertical">
                      <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                  </div> 
                </div>
                
                <div class="card-img-top">
                  <FontAwesomeIcon class="card-img-top mx-auto d-block my-4" style={{width: '35px'}} icon={faFilePdf}/>
                </div>
                <div class="card-body">
                <p class="card-title h6">Trabajo_uni.pdf</p>
               
                  <small class="d-flex justify-content-between"><span class="text-primary">Size: 2MB</span><span class="text-muted">Nov 21, 2021</span></small>
               
                 
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target="#bt2" aria-expanded="false" aria-controls="bt2"><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id="bt2">
                    <div class="btn-group-vertical">
                      <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                  </div> 
                </div>
                
                <div class="card-img-top">
                  <FontAwesomeIcon class="card-img-top mx-auto d-block my-4" style={{width: '35px'}} icon={faFilePdf}/>
                </div>
                <div class="card-body">
                <p class="card-title h6">Trabajo_uni.pdf</p>
               
                  <small class="d-flex justify-content-between"><span class="text-primary">Size: 2MB</span><span class="text-muted">Nov 21, 2021</span></small>
                
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target="#bt3" aria-expanded="false" aria-controls="bt3"><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id="bt3">
                    <div class="btn-group-vertical">
                      <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                  </div> 
                </div>
                
                <div class="card-img-top">
                  <FontAwesomeIcon class="card-img-top mx-auto d-block my-4" style={{width: '35px'}} icon={faFilePdf}/>
                </div>
                <div class="card-body">
                <p class="card-title h6">Trabajo_uni.pdf</p>
               
                  <small class="d-flex justify-content-between"><span class="text-primary">Size: 2MB</span><span class="text-muted">Nov 21, 2021</span></small> 
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target="#bt4" aria-expanded="false" aria-controls="bt4"><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id="bt4">
                    <div class="btn-group-vertical">
                      <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                  </div> 
                </div>
                
                <div class="card-img-top">
                  <FontAwesomeIcon class="card-img-top mx-auto d-block my-4" style={{width: '35px'}} icon={faFilePdf}/>
                </div>
                <div class="card-body">
                <p class="card-title h6">Trabajo_uni.pdf</p>
               
                  <small class="d-flex justify-content-between"><span class="text-primary">Size: 2MB</span><span class="text-muted">Nov 21, 2021</span></small> 
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
            <div class="card">
                <div id="gbtn" class="">
                  <button class="btn btn-dark btn-sm" id="btcollaps" type="button" data-bs-toggle="collapse" data-bs-target="#bt5" aria-expanded="false" aria-controls="bt5"><FontAwesomeIcon icon={faCaretDown}/></button>
                  <div class="collapse" id="bt5">
                    <div class="btn-group-vertical">
                      <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
                      <button class="btn btn-primary btn-sm"><FontAwesomeIcon icon={faDownload}/></button>
                      <button class="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    </div>
                  </div> 
                </div>
                
                <div class="card-img-top">
                  <FontAwesomeIcon class="card-img-top mx-auto d-block my-4" style={{width: '35px'}} icon={faFilePdf}/>
                </div>
                <div class="card-body">
                <p class="card-title h6">Trabajo_uni.pdf</p>
               
                  <small class="d-flex justify-content-between"><span class="text-primary">Size: 2MB</span><span class="text-muted">Nov 21, 2021</span></small>
              </div>
            </div>
          </div>

    
      </div>
    </div>
  )
}