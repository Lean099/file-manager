export const DeleteAccount = ()=>{

    const sendDelete = (e)=>{
      e.preventDefault()
      console.log("Enviado al servidor para que elimine al usuario...")
    }
  
    return(
      <div class="">
  
        <div className="card text-center">
          <div className="card-header">
            User Setting
          </div>
          <div className="card-body">
            <h5 className="card-title">Delete Account</h5>
            <p className="card-text">Deleting your account will delete your personal data, purchases, sales and photos.</p>
            <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Delete
            </button>
          </div>
        </div>
  
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Confirmation</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                  Are you sure to delete all your personal data and files (photos, videos, documents)?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" onClick={sendDelete} data-bs-dismiss="modal" className="btn btn-danger">I'm sure</button>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    )
  }