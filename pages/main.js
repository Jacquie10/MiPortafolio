import Head from "next/head";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";

import Barra from "../componentes/Barra.componentes";
import Footer from "../componentes/Footer.componentes";

import ProyectoModal from "../componentes/Proyecto_modal.componentes";
import Proyectos from "../componentes/Proyectos.componentes";


export default function Mainpage() {
    const [debeMostarModal, setdebeMostarModal] = useState(false)
    const [modoFormulario, setModoFormulario] = useState("nuevo")
    const [listaUsuarios, setListadoUsuarios] = useState([])
    const [listadoProyectos, setListadoProyectos] = useState([])
    const [proyecto, setProyecto] = useState(null)

    const [listadoTecnologias, setListadoTecnologias] = useState([])


    const obtenerProyectoHTTP = async () => {
        let response = await fetch("/api/proyectos")
        const data = await response.json()
        return data
    }
    const obtenerUsuariosHTTP = async () => {
        let response = await fetch("/api/usuarios")
        const data = await response.json()
        return data
    }
    const obtenerTecnologiasHTTP = async () => {
        let response = await fetch("/api/tecnologias")
        const data = await response.json()
        return data
    }
    
    useEffect( async () => {
        //hacemos una peticion al backend
        const data = await obtenerProyectoHTTP()
        const dataUsarios = await obtenerUsuariosHTTP()
        const dataTecnologia = await obtenerTecnologiasHTTP()

        setListadoProyectos(data.proyectos)
        setListadoUsuarios(dataUsarios.usuarios)
        setListadoTecnologias(dataTecnologia.tecnologias)

    }, [])   



    const abrirProyectos = () => {
        setModoFormulario("nuevo")
        setdebeMostarModal(true)
    }

    const ModalClose = () =>  {
        setdebeMostarModal(false)
    }

    const guardarProyectoHandler = async (nombreProyecto, usuarioProyecto, puntajeProyecto, tecnologias) =>  {
        
        const proyecto = {
            nombre: nombreProyecto,
            usuario: usuarioProyecto,
            rating: puntajeProyecto,
            tecnologias:tecnologias
        }
        const resp = await fetch("/api/proyectos", {
            method: "POST",
            body: JSON.stringify(proyecto)
        } )

        const data = await resp.json()

        if(data.msg == ""){
            setdebeMostarModal(false)
            const dataProyectos = await obtenerProyectoHTTP()
            setListadoProyectos(dataProyectos.proyectos)
            
        }


         //setlistadoProyectos(obtenerProyectos())
         //location.reload()  para recargar la pagina
         //setdebeMostarModal(false)

    }

    const  actualizarProyectoHandler  =  async  (id , nombreProyecto ,  usuario ,  rating , tecnologias)  =>  {
        
        const  proyecto  =  {
            id : id ,
            nombre : nombreProyecto ,
            usuario : usuario ,
            rating: rating,
            tecnologias:tecnologias

        }

        // peticion a backend para agregar un nuevo proyecto
        const  resp  =  await  fetch("/api/proyectos" ,  {
            method : "PUT" ,
            body : JSON.stringify(proyecto)
        } )
        const  data  =  await  resp.json()

        if  ( data.msg  ==  "" )  {
            setdebeMostarModal(false)
            const dataProyectos = await obtenerProyectoHTTP()
            setListadoProyectos(dataProyectos.proyectos)
        }
    }

    const  eliminarProyectoHandler = async (id) =>{
       //haer peticion HTTp delete al servidor /api/proyectos/id
       const resp = await fetch(`/api/proyectos/${id}` , {
           method : "DELETE"
       })
       const data = await resp.json()

       if(data.msg==""){
            //recargamoos los proyectos
           const dataProyectos = await obtenerProyectoHTTP()
           setListadoProyectos(dataProyectos.proyectos)
        }
    }

    const editarProyectoHandler = async (id) =>{
        //abrir el modal cuando se aprete editar
        const resp = await fetch(`/api/proyectos/${id}` )
        const data = await resp.json()
       
        setProyecto(data.proyecto) 
        setModoFormulario("edicion")
        setdebeMostarModal(true)
       
    }
    
 


    return <div >
      <Head>
          <title>Jose</title>
          <meta name="descripcion" content="Te quiero mucho" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>    
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
  
  
      </Head>
      <div className="container mt-4">
           <h1>Portafolio</h1>
           <div >
               <Button className="mt-4" variant="primary" onClick={abrirProyectos}>
                    Nuevo
                </Button>
           </div>
           <Barra/>
           <Proyectos proyectos = {listadoProyectos} usuarios={listaUsuarios} modo = {"crud"}  
                        onEliminarProyecto = {eliminarProyectoHandler}  
                        onEditarProyecto = {editarProyectoHandler}  />
           <Footer/>
            <ProyectoModal   modo = {modoFormulario} 
                            mostrar = {debeMostarModal} 
                            ocultar = {ModalClose} 
                            onGuardarProyecto={guardarProyectoHandler }
                            onActualizarProyectoHandler = {actualizarProyectoHandler}
                           proyecto = {proyecto} usuarios ={listaUsuarios}
                           tecnologias= {listadoTecnologias}
                            />
         
      </div>
      
  
      </div>
  }
  