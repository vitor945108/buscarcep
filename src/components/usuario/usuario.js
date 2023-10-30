import './usuario.css';
import { useState } from "react";

function Use() {
          const textop=useState('botão clicado');

          const [senha,setsenha] =useState();
          const [usuario,setusuario] = useState();


function enviasenha(a){
          a.preventDefault();
          if (senha==="12345" && usuario==="vitor"){
                    console.log("login feito com sucesso")

          }
          else if (usuario==="vitor"){
                    console.log("senha estar incorreta")

          }
          else if(senha==="12345") {
                console.log("usuario esta incorreto")
          }
             else{
                    console.log("usuario e senha estão incorreto")
             }      
          
                    
         
          }
          return(
                    <>
                    
                    <form className='caixa'>
                        <div className='texto'>
                <p>digite seu usuario</p>
                <input 
                type="text"
                value={usuario}
                onChange={(e) => setusuario (e.target.value)} 
                />
                <br />

                <p>digite sua senha </p>
                <input 
                type="text"
                value={senha}
                onChange={(a) => setsenha(a.target.value)} 
                />
                <br />
                <button type="submit" onClick={enviasenha}>enviar</button>
                </div>
                </form>
        
               
                    
               
                    </>
          )
          
}

export default Use;