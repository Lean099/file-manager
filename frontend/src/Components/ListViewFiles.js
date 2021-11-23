import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileVideo, faFileImage, faFilePdf, faFileExcel, faFilePowerpoint, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons'
import '../table.css';

export const ListViewFiles = ()=>{
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
          <tr>
            <td scope="row" class="type"><p class="text-center"><FontAwesomeIcon icon={faFileImage}/></p></td>
            <td class="name">Family.jpg</td>
            <td>Jun 04, 2021</td>
            <td>1000kb</td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-danger btn-sm me-1"><FontAwesomeIcon icon={faTrashAlt}/></button>
                <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" class="type"><p class="text-center"><FontAwesomeIcon icon={faFileVideo}/></p></td>
            <td class="name">holidays.mp4</td>
            <td>Sep 1, 2021</td>
            <td>500mb</td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-danger btn-sm me-1"><FontAwesomeIcon icon={faTrashAlt}/></button>
                <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" class="type"><p class="text-center"><FontAwesomeIcon icon={faFilePdf}/></p></td>
            <td class="name">work.pdf</td>
            <td>Sep 23, 2021</td>
            <td>2231kb</td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-danger btn-sm me-1"><FontAwesomeIcon icon={faTrashAlt}/></button>
                <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" class="type"><p class="text-center"><FontAwesomeIcon icon={faFileExcel}/></p></td>
            <td class="name">University.xls</td>
            <td>Nov 12, 2021</td>
            <td>1246kb</td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-danger btn-sm me-1"><FontAwesomeIcon icon={faTrashAlt}/></button>
                <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" class="type"><p class="text-center"><FontAwesomeIcon icon={faFilePowerpoint}/></p></td>
            <td class="name">Uni_project.pptx</td>
            <td>Nov 30, 2021</td>
            <td>20mb</td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-danger btn-sm me-1"><FontAwesomeIcon icon={faTrashAlt}/></button>
                <button class="btn btn-success btn-sm"><FontAwesomeIcon icon={faEye}/></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}