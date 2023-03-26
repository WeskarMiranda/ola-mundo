import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';

function Sobre() {
    const { name } = useParams();
    
    return (
        <div className="container">  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} />          
            <div class="row">
                <div className="col d-flex justify-content-center">
                    <img src={`/assets/images/marvel.png`} alt="Marvel" style={{ maxWidth: '50%', marginLeft: 'auto', marginRight: 'auto' }}/>
                </div>
                <div class="col">
                    <p>A Marvel Entertainment foi fundada em 1939, nos Estados Unidos, por Martin Goodman. A empresa, conhecida originalmente pelos quadrinhos, se transformou em uma das principais empresas do entretenimento mundial, com grande presença entre os filmes de maior bilheteria da história.
                        Sua história tem início em 31 de agosto de 1939, enquanto ainda se chamava Timely Comics. Na data, foi lançada a edição número 1 da revista Marvel Comics, que introduziu dois personagens que seriam importantes na história da empresa: o Tocha Humana, e Namor, o Príncipe Submarino.
                        Com os anos, a empresa passou por algumas mudanças de nome. Durante os anos 1950, passou a ser conhecida como Atlas Comics, até que, em 1961, começou a chamar-se pelo título de sua primeira revista: Marvel Comics.
                        A empresa atravessou diversas fases no mercado de quadrinhos, positivas e negativas, que deram origem a alguns dos personagens e franquias mais conhecidos do mercado de entretenimento. Entre eles estão Homem-Aranha, X-Men, Capitão América, Hulk, Homem de Ferro, Thor e tantos outros.
                        Nos anos 1990, a empresa abriu novos caminhos com a fundação do Marvel Studios, originalmente chamado de Marvel Films. Inicialmente, a empresa apenas licenciava sua propriedade intelectual, mas a partir de 2004 começou a produzir filmes próprios.
                        Em 2008, foi lançado o primeiro filme do Homem de Ferro, o primeiro produzido de maneira independente pela Marvel Studios. O longa também deu o pontapé inicial no Universo Cinematográfico Marvel (MCU), conhecido pela ampla diversidade de filmes e séries cujas histórias se entrelaçam e completam.
                        Em 2009, a Marvel foi comprada pela Walt Disney Company por US$ 4 bilhões, em um dos grandes negócios da indústria do entretenimento. A aquisição expandiu o MCU e o transformou em um dos pilares mais bem sucedidos da companhia.</p>
                </div>
            </div>     
        </div>
    )
}

export default Sobre;
