import React from 'react';
import Title from './../components/Title/index';

const planos = [
  {
    "plano": "Basico",
    "preco": 30.00,
    "detalhes": "Qualidade de video boa; resolução 720p; assista na TV, computador, celular ou tablet; e downloads não disponiveis."
  },
  {
    "plano": "Padrão",
    "preco": 40.00,
    "detalhes": "Qualidade de video ótima; resolução 1080p; assista na TV, computador, celular ou tablet; e downloads disponiveis."
  },
  {
    "plano": "Premium",
    "preco": 50.00,
    "detalhes": "Qualidade de video excepcional; resolução 4k + HDR; assista na TV, computador, celular ou tablet; e downloads disponiveis."
  }
];

export default function Planos() {
  return (
    <div className="container text-center">
      <Title
        title={"Planos"}
        text={"Veja abaixo os planos disponíveis:"}
      />
        <div className="row">
          {planos.map((plano, i) => (
            <div className="col" key={i}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Plano {plano.plano}</h5>
                  <p className="card-text">Preço: R$ {plano.preco.toFixed(2)}</p>
                  <p className="card-text">{plano.detalhes}</p>
                  <a href={`/adquirir/${plano.palno}`}/>
                  <div className="btn btn-primary">
                    Adquirir
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}