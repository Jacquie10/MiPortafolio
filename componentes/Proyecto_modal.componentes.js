import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const ProyectoModal = (props) => {
    const [idProyecto, setIdProyecto] = useState(0)
    const [txtNombreProyecto, settxtNombreProyecto] = useState("")
    const [txtUsuarioProyecto, settxtUsuarioProyecto] = useState(0)
    const [txtRating, settxtRating] = useState(0)
    const [listaidTecnologiasSeleccionadas, setListaidTecnologiasSeleccionadas] = useState([])  
    useEffect( () => {
        if(props.proyecto!= null){
            //para mostrar en el modal los valores si es para editar
            setIdProyecto(props.proyecto.id)
            settxtNombreProyecto(props.proyecto.nombre)
            settxtUsuarioProyecto(props.proyecto.idusuario)
            settxtRating(props.proyecto.rating)
        }
        
    }, [props.proyecto])
    
    const txtNombreOnChange = (event) => {
        const usuario= event.target.value
        settxtNombreProyecto(usuario)
    }
    const txtUsuarioOnchange = (event) => {
        const usuario= event.target.value
        settxtUsuarioProyecto(usuario) 
    }
    const txtRatingOnchange = (event) => {
        const rating = event.target.value
        settxtRating(rating)
    }
    const listaTecnologiaOnchange = (event) => {
        const listaIds = Array.from(event.target.selectedOptions).map((option)=> {
            return parseInt(option.value)
        })

        setListaidTecnologiasSeleccionadas(listaIds)
    }
    const butGuardarOnClick = () =>{
 
        if(props.modo == "edicion"){
            props.onActualizarProyectoHandler(idProyecto,txtNombreProyecto, txtUsuarioProyecto,txtRating,listaidTecnologiasSeleccionadas)
        }else{
            props.onGuardarProyecto(txtNombreProyecto, txtUsuarioProyecto,txtRating,listaidTecnologiasSeleccionadas)

        }
        
    }
    const butCloseFormOnClick = () => {
        settxtNombreProyecto("")
        settxtUsuarioProyecto(0)
        settxtRating(0)
        props.ocultar()
    }
    

    

    return <div>
        
        <Modal show={props.mostrar} onHide={butCloseFormOnClick }>
            <Modal.Header closeButton>
                <Modal.Title>Formulario Proyecto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" 
                            onChange={txtNombreOnChange} id="nombre" defaultValue={txtNombreProyecto}  />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="usuario" className="form-label">Usuario</label>
                        <select className="form-select" defaultValue={txtUsuarioProyecto} 
                                                        onChange={txtUsuarioOnchange} >
                            <option value={0}> -----Seleccione una opcion -----</option>
                            {
                                props.usuarios.map( (usuario) => {
                                    return <option  value={usuario.id} key={usuario.id}   > 
                                        {usuario.username}
                                    </option>

                                })
                            }
                        </select>
                        
                    </div>

                    <div className="mb-3">
                        <label htmlFor="puntaje" className="form-label">Puntaje</label>
                        <input type="number" className="form-control"
                            onChange={txtRatingOnchange}  id="puntaje" defaultValue={txtRating}/>
                    </div>

                    <div>        
                        <label htmlFor="tecnologias" className="form-label">Tecnologias</label>
                        <select className="form-select" multiple 
                                defaultValue={listaidTecnologiasSeleccionadas}
                                onChange={listaTecnologiaOnchange} >
                            {
                                props.tecnologias.map( (tecnologia) => {
                                    return <option value={tecnologia.id} key={tecnologia.id} >
                                        {tecnologia.nombre}
                                    </option>
                                } )
                            }
                        </select>    
                    </div>
                   
                </form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"  onClick={props.ocultar}>Cerrar </Button>
                <Button variant="primary" onClick={butGuardarOnClick}>Guardar</Button>
            </Modal.Footer>

        </Modal>    

    </div>
}
export default ProyectoModal