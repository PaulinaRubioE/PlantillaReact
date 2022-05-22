import React, { Component } from "react";


class Nomina extends Component
{
    render()
    {
        return (
            <div>
            <h1>Bienvenidos</h1>
            
           
                <table id="datatable" className="table">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cargo</th>
                    <th>Cuadrilla</th>
                    <th>Periodo</th>
                    <th>Ejersicio</th>
                    <th>Salary</th>
                    <th>Estatus</th>
                    <th>Pagar</th>
                    </tr>
                    </thead>
            
            
                    <tbody>
                        <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                    <td></td>
                    <button type="button" class="btn btn-info">Pagar</button>                                                                    </tr>
                        <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                    <td></td>
                    <button type="button" class="btn btn-info">Pagar</button> 
                         </tr>
                    </tbody>
                     </table>
                     </div>
	
        );
    }
}

export default Nomina;