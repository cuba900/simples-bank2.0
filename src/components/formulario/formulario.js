import React, {useRef, useState} from 'react';
import './formulario.css';



function Formulario () {

    const [cnpjStatus,setcnpjStatus]  = useState("")
    const [senhaStatus,setsenhaStatus] = useState("")
    const cnpjInput = useRef()
    const senhaInput = useRef()
    
    function validaCnpj (_cnpj) {
        _cnpj.preventDefault()

        const cnpj = cnpjInput.current.value
        if (cnpj.length === 14) {
          setcnpjStatus("sucesso");
        }
        if (cnpj === '') {
        setcnpjStatus("error");
        }

        if (cnpj === "00000000000000" ||
            cnpj === "11111111111111" ||
            cnpj === "22222222222222" ||
            cnpj === "33333333333333" ||
            cnpj === "44444444444444" ||
            cnpj === "55555555555555" ||
            cnpj === "66666666666666" ||
            cnpj === "77777777777777" ||
            cnpj === "88888888888888" ||
            cnpj === "99999999999999") {
        setcnpjStatus("error"); 
            }
         
        
    }  
    
    function validaSenha (senha) {
        senha.preventDefault()

        const psValue = senhaInput.current.value
        if (psValue.length === 6) {
             setsenhaStatus("sucesso");
        } 
        else {
           setsenhaStatus("error");
        }
    }

  
    return (
         <div className="container-form">
         <form>
         <h1>Internet Banking</h1>
         <h1> Autônomos e Pequenas Empresas</h1>
         <h1>Acesso</h1>
         <label>
         <input className={"cnpj " + cnpjStatus} onChange={validaCnpj} placeholder="cnpj 14 caracteres" required ref={cnpjInput} />
         </label>
         <input className={"senha " + senhaStatus} type="password" onChange={validaSenha} onClick={validaCnpj} placeholder="senha 6 caracteres" required ref={senhaInput}/>
         <button className={"btn-form"} onClick={validaSenha} >Proximo</button>
         </form>
         <br />
         
         <a className="btn-cadastro"
         href="https://contasimples.com/pedir-convite"
         target="_blank"
         rel="noopener noreferrer">Não é usuário? Cadastre-se</a>
        
         </div>
        

    );

}


export default Formulario;