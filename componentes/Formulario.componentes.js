import { useState } from "react"
   const Formulario = (props) => {

    //conseguir valores del input
   const [txt_username, setTxtUsername] = useState("")
   const [txt_password, setTxtPassword] = useState("")
 
    
   const txtUsernameOnchange = (event) => {
        const usuario= event.target.value
        setTxtUsername(usuario)
    }
    const txtPasswordOnchange = (event) => {
        const password = event.target.value
        setTxtPassword(password)
    }

    const butLoginOnClick = () =>{
        console.log(`Usuario: ${txt_username}`)
        console.log(`Password:  ${txt_password}`)
        // se devuelve la funcion 
        props.onLogin(txt_username, txt_password)

    }

   return    <div className="card">
    <aside className="card-body">
       <h3>Login</h3>
       <form>
           <div>
               <label htmlFor="txt_username" className="form-label">Username</label>
               <input id="txt_username" type="text" 
                 onChange={txtUsernameOnchange} defaultValue={txt_username} className="form-control"/>
          
           </div>
           <div class="mb-2">
               <label htmlFor="txt_password" className="form-label">Password</label>
               <input id="txt_password" type="password" 
                 onChange={txtPasswordOnchange} defaultValue={txt_password} className="form-control"/>
           </div> 

           <button id="butLogin" className="btn btn-primary" type="button" onClick={butLoginOnClick} >Login</button>
           <a href="#">Registro</a>
       </form>
       
        {
            ( () => {
                if(props.error){
                    return <div className="alert alert-danger mt-2">
                    Error en Login </div>
                }
            }) ()
        }   
   </aside>
</div> 
}

export default Formulario