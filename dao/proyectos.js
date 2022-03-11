import db from "../sequelize/models"
const guardarProyecto = async (nombre, usuario, rating) =>{
    //inserccion
    const proyectoGuardado = await db.Proyecto.create( 
        {
            nombre : nombre,
            idusuario: usuario,
            rating : rating
            
        }
    )
    console.log(nombre)
    console.log(rating)
    return proyectoGuardado


}

const obtenerProyectos = async () =>{
    //query
    const proyectos = await db.Proyecto.findAll(
        {
            order: [
                ["id","DESC"]
            ]
        })
    return proyectos
}

const eliminarProyecto = async (id) =>{
    await db.Proyecto.destroy( {
        where: {
            id: id
        }
    } )

}

const obtenerProyecto = async (id) =>{
    //query por un proyecto de determinado id
    const proyecto = await db.Proyecto.findOne( {
        where: {
            id:id
        }
    } )
    return proyecto
}

const modificarProyecto = async (proyecto) =>{
    //obtener el proyecto que esta en la base de bd
    const proyectoModificar = await obtenerProyecto(proyecto.id)
    //modificar los campos
    proyectoModificar.nombre = proyecto.nombre
    proyectoModificar.idusuario = proyecto.usuario
    proyectoModificar.rating = proyecto.rating
    //actualizamos proyecto en la bd
    await proyectoModificar.save()

}

export {guardarProyecto, obtenerProyectos,  eliminarProyecto,obtenerProyecto,modificarProyecto } 


