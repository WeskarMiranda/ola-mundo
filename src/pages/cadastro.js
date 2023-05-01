
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import ButtonCadastro from "../components/Button/buttonCadastro";

function Cadastro() {

  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nomeCartao, setNomeCartaocvc] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [numeroCvc, setNumeroCvc] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleTelefoneChange(event) {
    setTelefone(event.target.value);
  }
  function handleEnderecoChange(event) {
    setEndereco(event.target.value);
  }
  function handleNomeCartaocvcChange(event) {
    setNomeCartaocvc(event.target.value);
  }
  function handleNumeroCartaoChange(event) {
    setNumeroCartao(event.target.value);
  }
  function handleNumeroCvcChange(event) {
    setNumeroCvc(event.target.value);
  }


  function handleNumeroCartaoChange(event) {
    
    let numero = event.target.value.replace(/-/g, '');

    numero = numero.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');

    setNumeroCartao(numero);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // enviar dados de cadastro para o servidor aqui
    console.log(`Nome: ${name}, Telefone: ${telefone}, Endereço: ${endereco}, Nome do Cartao: ${nomeCartao}, Numero do Cartao: ${numeroCartao}, Numero Cvc: ${numeroCvc}`);
}


  const location = useLocation();
  const url = location.pathname; 


  return (
    <form onSubmit={handleSubmit}>
    <div className="container">
      <div className="mt-5 text-center">
        <h2> Dados </h2>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div>
            <div className="mt-3">
              <label> Dados do Assinante </label>
            </div>
          </div>
          
          <div className="mt-3">
          
            <label htmlFor="nameInput">Name:</label><br />
            <input className="form-control" placeholder="Nome Completo" id="nameInput" type="text" value={name} onChange={handleNameChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Telefone:</label><br />
            <input className="form-control" placeholder="Telefone" id="TelefoneInput" type="number" value={telefone} onChange={handleTelefoneChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Endereço:</label><br />
            <input className="form-control" placeholder="Endereço" id="EnderecoInput" type="text" value={endereco} onChange={handleEnderecoChange} /> <br />
          </div>
        </div>
        <div className="col">
          <div className="mt-3">
            <label> Dados do Cartão </label>
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Nome do Cartão:</label><br />
            <input className="form-control" placeholder="Nome do cartão do usuário" id="NomeCartaoInput" type="text" value={nomeCartao} onChange={handleNomeCartaocvcChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="nameInput">Número do Cartão:</label><br />
            <input className="form-control" placeholder="Número do cartão do usuário" id="NumeroCartaoInput" type="text" maxLength={20} value={numeroCartao} onChange={handleNumeroCartaoChange} /> <br />
          </div>
          <div className="mt-3">
            <label htmlFor="NumerocvcInput">Número do CVC:</label><br />
            <input className="form-control" placeholder="Número do CVC" id="NumerocvcInput" type="password" maxLength={3} value={numeroCvc} onChange={handleNumeroCvcChange} /> <br />
          </div>
          
        </div>
      </div>
      
      <div>
        <div>
          < ButtonCadastro/>
        </div>
        <div className="mt-5 text-center">
            <button className="btn btn-success" type="submit">Assinar</button>
           
        </div>
        
      </div>
      
    </div>

    </form>

  );
}


export default Cadastro;