import { useEffect, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Animated } from "react-animated-css";
import { Countdown } from './Countdown'
import '../alertFileDeleted.css'

export const AlertFileDeleted = ()=>{
  return(
    <Animated animationIn="bounceInDown" animationOut="bounceOutUp" isVisible={true}>
    <div id="alertFileDeleted" class="alert alert-success my-1 p-2 d-flex justify-content-between fixed-top"  role="alert">
        <div >
          <FontAwesomeIcon icon={faCheckCircle} className="me-1" />The file has been deleted successfully
        </div>
        <Countdown />
    </div>
    </Animated>
  )
}