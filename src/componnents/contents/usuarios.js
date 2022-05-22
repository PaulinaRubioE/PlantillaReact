import React, { Component } from "react";


class Usuarios extends Component
{
    render()
    {
        return (
            <div className="row">
                <div className="col-sm-8">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                    
               
            </form>
            <button className="btn btn-primary btn-lg" data-toggle="tooltip" data-placement="top" title="Nuevo"><i className="fa fa-plus"></i></button>
            </div>
            </div>
            
        );
        
    }
}

export default Usuarios;