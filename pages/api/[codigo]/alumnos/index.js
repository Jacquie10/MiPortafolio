//Endpoint o mi primer servicio
//ruta (path): http://localhost:3000/api/alumnos
//Metodo(method)

const alumnoHandler = (req, res) => {

    //res.send("I love you")
    console.log(req.query)
    res.json({
        msg: "Jose",
        codigo: req.query.codigo
    })


}

export default alumnoHandler