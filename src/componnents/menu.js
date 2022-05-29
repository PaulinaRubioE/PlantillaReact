import React, { Component} from "react";
import ReactDOM from 'react-dom';
import Error from './error';


import cinicio from './contents/inicio';
import cusuarios from './contents/usuarios';
import cnomina from './contents/nomina';
import cempleados from './contents/empleados';
import crecoleccion from './contents/recoleccion';


let componentes;
GetMenu().then(componentess=>componentes=componentess);

/* 
[
  {"Name": "Inicio", "ComponentName" : cInicio, "Icon":"fa fa-home"},
  {"Name": "Usuarios", "ComponentName" : cUsuarios, "Icon":"fa fa-users"},
  {"Name": "Nomina", "ComponentName" : cNomina, "Icon":"fa fa-money"},
  {"Name": "Empleados", "ComponentName" : cEmpleados, "Icon":"fa fa-signal"},
  {"Name": "Recoleccion", "ComponentName" : cRecoleccion, "Icon":"fa fa-cube"},
]
*/

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
                <button key={item.Name.toString()} onClick={()=> Renderizar(item.ComponentName.replace(/\"/g, ''))} 
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

async function GetMenu() {

    const url = 'https://localhost:44395/api/Menu'
    var respuesta = await fetch (url)
    var response = await respuesta.json();
    return response;        
  }

 function resultado()
 {
  let obj;
  fetch('https://localhost:44395/api/Menu')
    .then(res => res.json())
    .then(data =>  console.log(data));

 }


export default Menu;
