
import db from "../sequelize/models"
const obtenerTecnologias= async () => {
    const tecnologias = await db.Tecnologia.findAll({
        order: [
            ["id", "ASC"]
        ]
    })
    return tecnologias
}
export {obtenerTecnologias}