import { useState } from "react";
import './evento.css';

function Eventos() {
          const textop=useState('botão clicado');

          let [conta,setconta] =useState(0);
          const [Nome,setNome] = useState();

          function enviaNome(e){
                    e.preventDefault();
console.log( `nome: ${Nome} enviando com sucesso!`);
                    
         
          }
          return(
                    <>
                    <form className="caixa">
                <input 
                type="text"
                value={Nome}
                onChange={(e) => setNome (e.target.value)} 
                />
                <p>o nome é {Nome}</p>
                <button type="submit" onClick={enviaNome}>enviar</button>
                </form>
                    </>
          )
          
}

export default Eventos;