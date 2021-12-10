import React, { useReducer, useEffect, useContext } from "react";
import { useQuery } from '@apollo/client'
import { useAuth0 } from '@auth0/auth0-react'
import { GET_USER_FILES } from '../graphql/query'
import { ListFiles } from './ListFiles'
import { Settings } from './subComponentsSidebar/Settings'
import { SidebarProfile } from './SidebarProfile'

import {initialState, viewReducer} from '../reducers/viewReducer'
import { TYPES } from '../actions/viewAction'
export const Context = React.createContext();

export const FileManager = ()=>{

	const { user } = useAuth0()
	const { loading, error, data } = useQuery( GET_USER_FILES, { variables: { idFile: user.sub.replace('auth0|', '') } })
	const [state, dispatch] = useReducer(viewReducer, initialState)
	const context = useContext(Context)
	useEffect(()=>{
		if(typeof data!=='undefined'){
			
			dispatch({type: TYPES.GET_FILES_USER, payload: data.getUserFiles})
		}
	}, [data])

	return(
		<Context.Provider value={{filesViewState: state, viewDispatch: dispatch}}>
	      <div class="container" id="main">
	        <div class="row" id="sub">

	          <div class="col-3" id="a">
	            <SidebarProfile/>
	          </div>
	          <div class="col-9" id="b">
	              <div class="tab-content" id="nav-tabContent">
	                <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><ListFiles/></div>
	                <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><Settings/></div>
	              </div>
	          </div>
						
	        </div>
	      </div>
	    </Context.Provider>
	)
}
