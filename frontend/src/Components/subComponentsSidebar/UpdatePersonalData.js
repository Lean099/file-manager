export const UpdatePersonalData = ()=>{
    return(
      <div class="">
  
        <div class="row">
  
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Ex: Ryan99"/>
            </div>
          </div>
  
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label for="some" class="form-label">What do you do?</label>
              <input type="text" class="form-control" id="some" placeholder="Ex: UX/UI Designer"/>
            </div>
          </div>
        </div>
        
  
        <div class="mb-3">
          <label for="image" class="form-label">Profile Picture</label>                      
          <div class="input-group mt-2">
            <input type="file" class="form-control" id="img" aria-describedby="img" aria-label="Upload"/>
            <button class="btn btn-dark" type="button" id="img">
              <div class="btn-close btn-close-white"></div>
            </button>
          </div>
        </div>
  
        <div class="d-grid gap-2">
          <button class="btn btn-dark btn-sm" type="button">Update Data</button>
        </div>
  
      </div>
    )
  }