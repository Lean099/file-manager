import { useState, useContext, useEffect } from 'react'
import { Context } from "../FileManager";
import { TYPES } from "../../actions/viewAction";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from '@apollo/client'
import { UPLOAD_IMAGE_PERSONAL_DATA } from '../../graphql/mutation'

export const UpdatePersonalData = ()=>{

    const context = useContext(Context)
    const { user } = useAuth0()
    const [ uploadData, {data} ] = useMutation(UPLOAD_IMAGE_PERSONAL_DATA)
    const [ avatar, setAvatar ] = useState(null)
    const [ personalData, setPersonalData ] = useState({ username: '', occupation: '' })

    useEffect(()=>{
      if(typeof data!=='undefined'){
        context.viewDispatch({type: TYPES.SET_AVATAR_USERNAME_OCCUPATION, payload: data})
      }
    }, [data])

    const handleInput = (e)=>{
      setPersonalData({
        ...personalData,
        [e.target.name] : e.target.value
      })
    }

    const resetInputFile = ()=>{
      document.getElementById('avatar').value = ''
      setAvatar(null)
    }

    const handleFile = (e)=>{
      setAvatar(e.target.files[0])
    }

    const sendData = (e)=>{
      e.preventDefault()
      uploadData({variables:{
        file: avatar,
        id: user.sub.replace('auth0|', ''),
        username: personalData.username,
        occupation: personalData.occupation
      }})
    }

    console.log("UpdPersonalData: ", data)
    console.log("UpdPersonalData: ", personalData)
    console.log("UpdPersonalData: ", avatar)
    console.log(context)

    return(
      <div class="">
  
        <div class="row">
  
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" onChange={handleInput} name="username" id="username" placeholder="Ex: Ryan99"/>
            </div>
          </div>
  
          <div class="col-12 col-sm-6">
            <div class="mb-3">
              <label for="some" class="form-label">What do you do?</label>
              <input type="text" class="form-control" onChange={handleInput} name="occupation" id="some" placeholder="Ex: UX/UI Designer"/>
            </div>
          </div>
        </div>
        
  
        <div class="mb-3">
          <label for="image" class="form-label">Profile Picture</label>                      
          <div class="input-group mt-2">
            <input type="file" class="form-control" onChange={handleFile} name="avatar" id="avatar" aria-describedby="img" aria-label="Upload"/>
            <button class="btn btn-dark" onClick={resetInputFile} type="button" id="img">
              <div class="btn-close btn-close-white"></div>
            </button>
          </div>
        </div>
  
        <div class="d-grid gap-2">
          <button class="btn btn-dark btn-sm" onClick={sendData} type="button">Update Data</button>
        </div>
  
      </div>
    )
  }