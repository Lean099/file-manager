import { NavLink } from "react-router-dom";
import { TYPES } from "../actions/viewAction";
import { Context } from "./FileManager";

export const FeedbackAccountDeleted = ()=>{

    return(
        <div className="container">
            <div className="card text-center my-4">
            <div className="card-header">
                Feedback
            </div>
            <div className="card-body">
                <h5 className="card-title">Account Deleted</h5>
                <p className="card-text">All your personal data and files have been deleted.</p>
                <NavLink to='/' className="btn btn-dark">Go Home</NavLink>
            </div>
            </div>
        </div>
    )
}