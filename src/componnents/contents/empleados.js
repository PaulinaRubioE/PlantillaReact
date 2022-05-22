import React, { Component } from "react";


class Empleados extends Component
{
    render()
    {
        return (
          <div id="form-empleados">
          <h1 id="empleados">Empleados</h1>
          <form name="formulario" method="post" action>
          <div class="form-row">
  <div class="col-md-8 mb-2">
    <label for="validationDefault01">Nombre(s)</label>
    <input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="Mark" required></input>
  </div>
  <div className="col-md-8 mb-3">
    <label for="validationDefault02">Apellido Paterno</label>
    <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required></input>
  </div>
  <div className="col-md-8 mb-3">
    <label for="validationDefaultUsername">Fecha de nacimiento</label>
    <div className="input-group">
      <input type="date"></input>
    </div>
  </div>
  <div className="col-md-8 mb-3">
    <label for="validationDefault05">Cargo</label>
    <input type="text" className="form-control" id="validationDefault05" placeholder="00000000000" required></input>
  </div>
  <div className="col-md-8 mb-3">
    <label for="validationDefault05">Cuadrilla</label>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required></input>
  </div>
  <div className="col-md-8 mb-3">
    <label for="validationDefault05">Número de Seguro Social</label>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required></input>
  </div>
  <div className="col-md-8 mb-3">
    <label for="validationDefault05">Número de RFC</label>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required></input>
  </div>
  <div  id="botones" className="row">
    <div className="col-sm-12">
    <div className="x_panel">
      <button className="btn btn-primary btn-lg" data-toggle="tooltip" data-placement="top" title="Nuevo"><i className="fa fa-plus"></i></button>
      <button className="btn btn-success btn-lg" data-toggle="tooltip" data-placement="top" title="Editar"><i className="fa fa-edit"></i></button>
      <button className="btn btn-danger btn-lg float-right" data-toggle="tooltip" data-placement="top" title="Eliminar"><i className="fa fa-trash"></i></button>
    </div>
      
    </div>
  </div>
</div>
</form>
          </div>
      );
  }
}

export default Empleados;