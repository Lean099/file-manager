import { useContext } from "react";
import {NavDrive} from './NavDrive'
import {GridViewFiles} from './GridViewFiles'
import {ListViewFiles} from './ListViewFiles'

import {Context} from '../App'

export const ListFiles = ()=>{

    const context = useContext(Context);

  return(
    <div id="listfilescont">
        <NavDrive/>
        {
            context.filesViewState.grid_view ? <GridViewFiles/> : <ListViewFiles/>
        }
    </div>
  )
}