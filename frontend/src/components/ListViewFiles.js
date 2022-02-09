import { useContext } from "react";
import { Context } from "./FileManager";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage,  faTrashAlt, faEye, faDownload, faFileSignature } from '@fortawesome/free-solid-svg-icons'
import '../table.css';
import dateformat from "dateformat";
import { formatBytes } from 'bytes-formatter';
import { Row } from './Row'

export const ListViewFiles = ()=>{

  const context = useContext(Context)

  return(
    <div class="table-responsive" id="table-items">
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th scope="col" class="type">Type</th>
            <th scope="col" class="name">Name</th>
            <th scope="col">Uploaded</th>
            <th scope="col">Size</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="table-light">

          {
            context.filesViewState.only_documents ? context.filesViewState.filterFiles.map(file => <Row file={file} />) 
            : context.filesViewState.only_multimedia ? context.filesViewState.filterFiles.map(file => <Row file={file} />) 
            : context.filesViewState.files.map(file => <Row file={file} />)
          }

        </tbody>
      </table>
    </div>
  )
}
