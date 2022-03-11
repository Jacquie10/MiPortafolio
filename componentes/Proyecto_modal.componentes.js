import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const ProyectoModal = (props) => {
    const [idProyecto, setIdProyecto] = useState(0)
    const [txtNombreProyecto, settxtNombreProyecto] = useState("")
    const [txtUsuarioProyecto, settxtUsuarioProyecto] = useState(0)
    const [txtRating, settxtRating] = useState(0)


    useEffect( () => {
        if(props.proyecto!= null){
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

    const butGuardarOnClick = () =>{
 
        if(props.modo == "edicion"){
            props.onActualizarProyectoHandler(idProyecto,txtNombreProyecto, txtUsuarioProyecto,txtRating)
        }else{
            props.onGuardarProyecto(txtNombreProyecto, txtUsuarioProyecto,txtRating)

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
                        <select className="form-select" defaultValue={txtUsuarioProyecto} onChange={txtUsuarioOnchange} >
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