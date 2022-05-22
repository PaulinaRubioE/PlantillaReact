import React, { Component } from "react";

class AgregarUsuarios extends Component
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
            <div  id="botones" className="row">
    <div className="col-sm-12">
    <div className="x_panel">
      <button className="btn btn-success btn-lg" data-toggle="tooltip" data-placement="top" title="Editar"><i className="fa fa-edit"></i></button>
      <button className="btn btn-danger btn-lg float-right" data-toggle="tooltip" data-placement="top" title="Eliminar"><i className="fa fa-trash"></i></button>
      <button className="btn btn-danger btn-lg float-right" data-toggle="tooltip" data-placement="top" title="Eliminar"><i className="fa fa-save"></i></button>
    </div>
      
    </div>
  </div>
            <button className="btn btn-primary btn-lg" data-toggle="tooltip" data-placement="top" title="Nuevo"><i className="fa fa-plus"></i></button>
            </div>
            </div>
            
        );
        
    }
}

export default AgregarUsuarios;