import { useContext } from "react";
import { Context } from "./FileManager";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage,  faTrashAlt, faEye, faDownload, faFileSignature } from '@fortawesome/free-solid-svg-icons'
import '../table.css';
import dateformat from "dateformat";
import { formatBytes } from 'bytes-formatter';

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
            context.filesViewState.only_documents ? context.filesViewState.filterFiles.map(file=>(
              <tr>
                <td class="type"><p class="text-center"><FontAwesomeIcon icon={faFileImage}/></p></td>
                <td class="name">{file.name}.{file.format}</td>
                <td>{dateformat(file.createdAt, "mmm dd, yyyy")}</td>
                <td>{formatBytes(file.size)}</td>
                <td>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-success btn-sm me-1"><FontAwesomeIcon icon={faEye}/></button>
                    <button class="btn btn-primary btn-sm me-1"><FontAwesomeIcon icon={faDownload}/></button>
                    <button class="btn btn-danger btn-sm me-1"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    <button class="btn btn-secondary btn-sm"><FontAwesomeIcon icon={faFileSignature}/></button>
                  </div>
                </td>
              </tr>
            )) : context.filesViewState.only_multimedia ? context.filesViewState.filterFiles.map(file=>(
              <tr>
                <td class="type"><p class="text-center"><FontAwesomeIcon icon={faFileImage}/></p></td>
                <td class="name">{file.name}.{file.format}</td>
                <td>{dateformat(file.createdAt, "mmm dd, yyyy")}</td>
                <td>{formatBytes(file.size)}</td>
                <td>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-success btn-sm me-1"><FontAwesomeIcon icon={faEye}/></button>
                    <button class="btn btn-primary btn-sm me-1"><FontAwesomeIcon icon={faDownload}/></button>
                    <button class="btn btn-danger btn-sm me-1"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    <button class="btn btn-secondary btn-sm"><FontAwesomeIcon icon={faFileSignature}/></button>
                  </div>
                </td>
              </tr>
            )) : context.filesViewState.files.map(file=>(
              <tr>
                <td class="type"><p class="text-center"><FontAwesomeIcon icon={faFileImage}/></p></td>
                <td class="name">{file.name}.{file.format}</td>
                <td>{dateformat(file.createdAt, "mmm dd, yyyy")}</td>
                <td>{formatBytes(file.size)}</td>
                <td>
                  <div class="d-flex justify-content-center">
                    <button class="btn btn-success btn-sm me-1"><FontAwesomeIcon icon={faEye}/></button>
                    <button class="btn btn-primary btn-sm me-1"><FontAwesomeIcon icon={faDownload}/></button>
                    <button class="btn btn-danger btn-sm me-1"><FontAwesomeIcon icon={faTrashAlt}/></button>
                    <button class="btn btn-secondary btn-sm"><FontAwesomeIcon icon={faFileSignature}/></button>
                  </div>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}
