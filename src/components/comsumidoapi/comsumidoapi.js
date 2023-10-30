import './comsumidoapi.css';
import{useState} from "react";
import axios from "axios";

function Consumidorapi(){
        const [buscaCep, setBuscaCep] = useState();
        const [data, setData] = useState();
        const [cepInvalido, setCepInvalido] = useState();
        const api = `https://viacep.com.br/ws/${buscaCep}/json`;
    
        function buscaApi(e){
            e.preventDefault();
            axios.get(api)
            .then(response => {
                if(response.data.erro === true){
                    setData([]);
                    setCepInvalido("Cep Inválido");
                    setData("");
                }else{
                    setData(
                        response.data.logradouro + " bairro: " +
                        response.data.bairro + "      cidade: " +
                        response.data.localidade+ " " +
                        response.data.uf+ " " +
                        response.data.cep
                    )
                    setCepInvalido("")
                }
            })
            .catch((error) => {
                console.log(error)
                setData("");
                setCepInvalido("Cep Inválido")
            })
        }
        
        return(
            <div className="box">
            <form className="text">
                <label className="title-cep">BUSCA CEP</label>
                
                <div className="conteiner">
                    <input type="text" value={buscaCep} onChange={(e) => setBuscaCep(e.target.value)}/>
                    <button onClick={buscaApi}>buscar</button>
                </div>
            </form>
            <p >
                {cepInvalido} 
                {data}  
            </p>
            </div>
        )
    }
    

export default Consumidorapi;