
import { useState } from "react";

function Inputusestate(){
         const[login,setlogin]=useState();
         const[senha,setsenha]=useState();
         const[vlogin,setvlogin]=useState();

          function vericandologin(e){
                    e.preventDefault();
                    if(login.toLowerCase()==="vitor" && senha==="1234"){
                          setvlogin(true);
                    }
                    else{
                          if (login.toLowerCase()!=="vitor" && senha==="1234"){
                              setvlogin ("login incorreto!");
                    
                           } else if(login.toLowerCase()==="vitor" && senha!=="1234"){
                              setvlogin("senha incorretar!");
                          }else{
                              setvlogin("login e senha incorretor!")
                          }
                          
                    }
                    
          }
          return(
                    <form className='caixa'>
                              <div className='texto'>
                              <label>login</label>
                              <br />
                              <input type="text" value={login} onChange={(e) =>setlogin (e.target.value)}  />
                              <br />
                             <label >senha</label>
                             <br />
                             <input type="password" value={senha} onChange={(e) =>setsenha (e.target.value)}/>
                             <br />
                             <br />
                             <button onClick={vericandologin}>Logar!</button>
                             {
                              vlogin ===true 
                                ?<p>logado com  sucesso!</p>
                                :""
                             }
                             {
                              vlogin !==true
                              ? <p>{vlogin}</p>
                              :''
                             }
                             </div>
                            </form>
          )
}

export default Inputusestate;