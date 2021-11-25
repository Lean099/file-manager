import React, { useReducer } from "react";
import {ListFiles} from './ListFiles'
import {Settings} from './subComponentsSidebar/Settings'
import {SidebarProfile} from './SidebarProfile'

import {initialState, viewReducer} from '../reducers/viewReducer'
export const Context = React.createContext();

export const FileManager = ()=>{

	const [state, dispatch] = useReducer(viewReducer, initialState)

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