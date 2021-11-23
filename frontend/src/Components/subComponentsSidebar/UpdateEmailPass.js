export const UpdateEmailPass = ()=>{
    return(
      <div class="">
  
        <div class="row">
  
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Ex: name@example.com"/>
            </div>
          </div>
  
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password"/>
            </div>
          </div>
  
          <div class="d-grid gap-2">
          <button class="btn btn-dark btn-sm" type="button">Update Data</button>
        </div>
  
        </div>
  
      </div>
    )
  }