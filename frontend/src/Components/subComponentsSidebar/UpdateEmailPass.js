import { useState, useContext, useEffect } from "react";
import { Context } from "../FileManager";
import { TYPES } from "../../actions/viewAction";
import { UPLOAD_EMAIL_AND_PASSWORD } from "../../graphql/mutation";
import { useMutation } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

export const UpdateEmailPass = ()=>{

    const [dataUser, setDataUser] = useState({email: '', password: ''})
    const context = useContext(Context)
    const { user } = useAuth0()
    const [uploadEP, {data}] = useMutation(UPLOAD_EMAIL_AND_PASSWORD)

    useEffect(()=>{
      if(typeof data!=='undefined'){
        context.viewDispatch({type: TYPES.SET_EMAIL_OR_PASSWORD, payload: data})
      }
    }, [data])

    const handleChange = (e)=>{
      setDataUser({
        [e.target.name] : e.target.value
      })
    }
    
    const sendUpdate = (e)=>{
      e.preventDefault()
      uploadEP({variables:{
        id: user.sub.replace('auth0|', ''),
        newEmail: dataUser.email,
        newPass: dataUser.password
      }})
    }

    console.log("UpdateEmailPass: ", dataUser)
    console.log("UpdateEmailPass: ", user.sub.replace('auth0|', ''))

    return(
      <div class="">
  
        <div class="row">
  
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input onChange={handleChange} type="email" class="form-control" name="email" id="email" value={dataUser.email} placeholder="Ex: name@example.com"/>
            </div>
          </div>
  
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input onChange={handleChange} type="password" class="form-control" name="password" id="password" value={dataUser.password} />
            </div>
          </div>
  
          <div class="d-grid gap-2">
          <button onClick={sendUpdate} class="btn btn-dark btn-sm" type="button">Update Data</button>
        </div>
  
        </div>
  
      </div>
    )
  }