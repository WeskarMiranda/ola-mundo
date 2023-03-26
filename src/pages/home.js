import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';

function Home() {
    return (
        <div className="container">
            <Title
                title={"Catálogo de Filmes"}
                text={"Filmes Disponíveis"} />
            <div class="row">
                <div class="col">
                    <Card />
                </div>
            </div>
        </div>
    )
}
export default Home;