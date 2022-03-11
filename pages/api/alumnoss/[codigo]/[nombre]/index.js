//http://localhost:3000/alumnoss

//Endpoin o mi primer servicio
// Ruta (path) : /api/alumnoss
// Metodo(method)
const alumnossHandler = (req, res) => {
    //enviar ese texto
    //res.send("hola bebecito")
    //
    console.log(req.body.nombre)
    
    res.json(
        {
            codigo: req.query.codigo,
            nombre: req.query.nombre,
            msg: "Es hora de dormir"
        }
    )

}
export default alumnossHandler