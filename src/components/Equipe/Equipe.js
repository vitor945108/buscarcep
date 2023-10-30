import ExibePerfil from '../ExibePerfil/ExibePerfil';
import './equipe.css';

function Equipe({titulo, listaP}){
    function cat(c,n,a,b,C){
              if(c ==="professor"){
            return(
            <div className='prof'>
                    <p>professor</p>
            </div>
            )
           }else if(c==="aluno"){
            return(
                <div className='aluno'>
                <p>aluno</p>
            </div>
            )
            
           }
           else{
            console.log(`faltar cartegoria para ${n}`)
            return(
                <div className='sCAT'>
                   <p>atençao ! esta sem categoria </p>
                </div>
             )
           }

    }
    return(
        <>
        <h1>{titulo}</h1>
        <div className='div-exibe'>
            {listaP.map((p) => 
                  <div className='main'>
                  <img className="img-exibe-perfil" src={p.imagem} alt={p.nome}/>
                  {
                    p.nome===undefined 
                    ?<h1>sem nome!</h1>
                    :<h1>nome : {p.nome}</h1>
                  }
                  {cat(p.categoria,p.nome)}
               {/* { p.categoria==="professor" ? <div className='prof'><p>professor</p></div>:""}
                  { p.categoria==="aluno" ?<div className='aluno'>   <p>aluno</p></div> :""} */}
                  <p>Habilidades: {p.crt}</p>
              </div>
            )} 
        </div>
        </>
    )
}

export default Equipe;