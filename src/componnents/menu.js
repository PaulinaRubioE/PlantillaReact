import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Error from './error';

import cInicio from './contents/inicio';
import cUsuarios from './contents/usuarios';
import cNomina from './contents/nomina';
import cEmpleados from './contents/empleados';
import cRecoleccion from './contents/recoleccion';
/*
//esto es para revisar un async de prueba
(async () => {
  const { Component1 } = await import('./Component1');
})();
*/

let componentes = 
[
  {"Name": "Inicio", "ComponentName" : cInicio, "Icon":"fa fa-home"},
  {"Name": "Usuarios", "ComponentName" : cUsuarios, "Icon":"fa fa-users"},
  {"Name": "Nomina", "ComponentName" : cNomina, "Icon":"fa fa-money"},
  {"Name": "Empleados", "ComponentName" : cEmpleados, "Icon":"fa fa-signal"},
  {"Name": "Recoleccion", "ComponentName" : cRecoleccion, "Icon":"fa fa-cube"},
]


class Menu extends Component
{
    render()
    {
        return ( 
        <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
            >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
           
             {componentes.map((item, i) => (
                <button key={item.Name.toString()} active onClick={()=> Renderizar(item.ComponentName)} 
                        className="list-group-item list-group-item-action py-2 ripple " >
                          <i className= {item.Icon}></i>
                            <span> {item.Name}</span>
                </button>
              ))}

            </div>
          </div>
       </nav>
        );
    }
}

function Renderizar(props) {

    //var Content = components[props];
    var Content=props;
    if(Content !=null)
    {
        ReactDOM.render(
            <Content />,
            document.getElementById('contenido')
        );
    }
    else
    {
        ReactDOM.render(
            <Error />,
            document.getElementById('contenido')
        );
    }
  };
export default Menu;