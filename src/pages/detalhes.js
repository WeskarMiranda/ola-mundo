import React from 'react';
import Title from './../components/Title/index';
import { useParams } from 'react-router-dom';

const filmes = [{
    "nome": "Vingadores",
    "duracao": "2H30",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5,
    "imagem": "/assets/images/vingadores.png"
},
{
    "nome": "Vingadores 2",
    "duracao": "2H30",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 6,
    "imagem": "/assets/images/vingadores.png"
},
{
    "nome": "Vingadores 3",
    "duracao": "2H30",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 7,
    "imagem": "/assets/images/vingadores.png"
}
]

function Detalhes() {
    const { filme } = useParams();

    return (
        <div className="container">
            <Title
                title={"Detalhes"}
                text="" /> 
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img src={filmes.find(f => f.nome === filme)?.imagem} alt={filme} style={{ maxWidth: '50%', marginLeft: 'auto', marginRight: 'auto' }} />
                </div>
                <div className="col">
                    <p>Filme: {filme}</p>
                    {(() => {
                        if (filme === 'Vingadores') {
                            return (
                                <div>
                                    <p>{filmes[0].nome}</p>
                                    <p>{filmes[0].duracao}</p>
                                    <p>{filmes[0].genero}</p>
                                    <p>Sinopse</p>
                                    <p>{filmes[0].nota}</p>
                                </div>
                            )
                        } else if (filme == 'Vingadores 2') {
                            return (
                                <div>
                                    <p>{filmes[1].nome}</p>
                                    <p>{filmes[1].duracao}</p>
                                    <p>{filmes[1].genero}</p>
                                    <p>Sinopse</p>
                                    <p>{filmes[1].nota}</p>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <p>{filmes[2].nome}</p>
                                    <p>{filmes[2].duracao}</p>
                                    <p>{filmes[2].genero}</p>
                                    <p>Sinopse</p>
                                    <p>{filmes[2].nota}</p>
                                </div>
                            )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default Detalhes;