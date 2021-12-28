import { useContext } from 'react'
import { Card } from './Card'

import {Context} from './FileManager'

export const GridViewFiles = ()=>{

  const context = useContext(Context)
  
  return(
    <div class="container" id="gridviewcont">
      <div class="row clearfix pb-2">

        {
          context.filesViewState.only_documents ? context.filesViewState.filterFiles.map(file=> <Card file={file} />)
           : context.filesViewState.only_multimedia ? context.filesViewState.filterFiles.map(file=> <Card file={file} />)
            : context.filesViewState.files.map(file=> <Card file={file} />)
        }

      </div>
    </div>
  )
}