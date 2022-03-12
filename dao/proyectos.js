import db from "../sequelize/models"
const guardarProyecto = async (nombre, usuario, rating, tecnologias) =>{
    //inserccion
    const proyectoGuardado = await db.Proyecto.create( 
        {
            nombre : nombre,
            idusuario: usuario,
            rating : rating
            
        }
    )
    //el usuario selecciona las tecnologias que utiliza
    //esa lista debe insertarse en la tabla ProyectoXTecnologia
    for (let idtecnologia of tecnologias){
        await db.ProyectoXTecnologia.create( {
            idproyecto: proyectoGuardado.id,
            idtecnologia: idtecnologia
        } )
    }
    console.log("este es el id")
    console.log(proyectoGuardado.id)
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
    //eliminar el las filas que tengas el id de proyeco que se quiere borrar que esten en la tabla intermedia
    await db.ProyectoXTecnologia.destroy({
        where: {idproyecto: id}
    })

    //eliminar el proyecto
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
    //eliminar todas las tecnologias de la tabla intermedia
    await db.ProyectoXTecnologia.destroy({
        where: {
            idproyecto: proyecto.id
        }
    })
    //argegamos las nuevas tecnologias
    for(let idtecnologia of proyecto.tecnologias){
        await db.ProyectoXTecnologia.create({
            idproyecto: proyecto.id,
            idtecnologia:idtecnologia
        })
    }
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


