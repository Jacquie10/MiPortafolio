import { useState } from "react"

const Proyectos = (props) => {
    // for (let i = 0 ; i< props.Proyectos; i++){
        // console.log(props.Proyectos[i].nombre )
    // }

    const [seDebeMostrar, setSedebeMostrar] = useState(true)

    const butOcultarOnclick = () =>{
        setSedebeMostrar(false)
    }
    const butMostrarOnclick = () =>{
        setSedebeMostrar(true)
    }


    if (props.modo=="lista"){
        if(seDebeMostrar){
            return <div>
            <h3>Ranking</h3>
            <button type="button" className="btn btn-success" onClick={butOcultarOnclick} >Ocultar</button>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nombre Proyecto</th>
                                    <th>Usuario</th>
                                    <th>Puntaje</th>
                                </tr>
                            </thead>
                            <tbody id="data_proyectos"> {
                                    props.proyectos.map( (pr) => {
                                        return <tr key = {pr.id}>
                                            <td>{pr.nombre}</td>
                                            <td>{pr.idusuario}</td>
                                            <td>{pr.rating}</td>
                                        </tr>
                                    }) 
                                }
                            </tbody>
                        </table>
        </div>
        }else{
            return <div>
            <h3>Ranking</h3>
            <button type="button" className="btn btn-success" onClick={butMostrarOnclick} >Mostrar</button>
            <p>Tabla Oculta</p>
            </div>    
        }
    
       
    
    }else if(props.modo=="crud"){
        return <div>
        <h3>Ranking</h3>
        <button type="button" className="btn btn-success" onClick={butOcultarOnclick} >Ocultar</button>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre Proyecto</th>
                                <th>Usuario</th>
                                <th>Puntaje</th>
                            </tr>
                        </thead>
                        <tbody id="data_proyectos">
                            {
                                props.proyectos.map( (proyecto) => {
                                    return <tr key = {proyecto.id}>
                                        <td>{proyecto.nombre}</td>
                                        <td>{proyecto.usuario}</td>
                                        <td>{proyecto.rating}</td>
                                        <td>
                                              <button className="btn btn-link me-md-2 mt-4" type="button" 
                                               onClick={ () => {
                                                props.onEditarProyecto(proyecto.id)
                                            } }
                                              >Editar
                                               </button>
                                              
                                              <button className="btn btn-link mt-4" type="button" 
                                                onClick={ () => {
                                                    props.onEliminarProyecto(proyecto.id)
                                                } }
                                              >Eliminar
                                              </button>     

                                        </td>
                                     
                                    </tr>
                                }) 
                            }
                        </tbody>
                    </table>
    </div>
    }

}

    
export default Proyectos