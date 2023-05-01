import { Movie } from "../components/Style/styleMovie";
import { Container, MovieList, OrderByContainer } from "../components/Style/styles";
import ButtonAssistir from "../components/Button/buttonAssistir";
import { useState } from "react";
import React, { useEffect } from "react"
import { Link } from "react-router-dom";



function Home() {
    const [movies, setMovies] = useState([]);
    const [orderBy, setOrderBy] = useState('titulo');
    const [orderDirection, setOrderDirection] = useState('asc');
    const [searchQuery, setSearchQuery] = useState('');
    const [allMovies, setAllMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => {
                const moviesWithYear = data.map(movie => {
                    return {
                        ...movie,
                    };
                });
                setAllMovies(moviesWithYear);
                setMovies(moviesWithYear);
                setIsLoading(false);
            })
            .catch(handleFetchError);
    }, []);

    const handleFetchError = (error) => {
        console.error('Erro ao carregar filmes:', error);
    };

    const handleOrderByChange = (event) => {
        const [newOrderBy, newOrderDirection] = event.target.value.split(',');
        setOrderBy(newOrderBy);
        setOrderDirection(newOrderDirection);
    };

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchButtonClick = () => {
        const filteredMovies = allMovies.filter((movie) =>
          movie.titulo.toLowerCase().includes(searchQuery.toLowerCase())
        );
        const sortedMovies = [...filteredMovies].sort(compareMovies);
        setMovies(sortedMovies);
      };

    const compareMovies = (a, b) => {
        let comparison = 0;
        if (orderBy === 'titulo') {
            comparison = a.titulo.localeCompare(b.titulo);
        } else if (orderBy === 'ano') {
            comparison = a.ano - b.ano;
        } else if (orderBy === 'nota') {
            comparison = a.nota - b.nota;
        }
        if (orderDirection === 'desc') {
            comparison *= -1;
        }
        return comparison;
    };

    const sortedMovies = [...movies].sort(compareMovies);

    return (
        <Container>
            {isLoading ? (
      <h1>Carregando...</h1>
    ) : (
        <>
            <h1>Catalago de Filmes</h1>
            <OrderByContainer>
            <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="searchQuery">Buscar por título:</label>
              <div className="input-group">
                <input
                  id="searchQuery"
                  type="text"
                  className="form-control"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleSearchButtonClick}
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="orderby">Ordenar por:</label>
            <select
              id="orderby"
              className="form-control"
              value={`${orderBy},${orderDirection}`}
              onChange={handleOrderByChange}
            >
              <option value="titulo,asc">Título (A-Z)</option>
              <option value="titulo,desc">Título (Z-A)</option>
              <option value="ano,asc">Ano antigo</option>
              <option value="ano,desc">Ano recente</option>
              <option value="nota,asc">Nota menor</option>
              <option value="nota,desc">Nota maior</option>
            </select>
          </div>
        </div>
      </div>
                
            </OrderByContainer>
            <MovieList>
                {sortedMovies && sortedMovies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/detalhes/${movie.id}`}>
                                <img src={`${movie.poster}`} alt={movie.titulo} />
                            </Link>
                            <span>{movie.titulo}</span>
                            <span>Ano: {movie.ano}</span>
                            <span>Nota: {movie.nota}</span>
                            <ButtonAssistir assistido={movie.assistido} />
                        </Movie>
                    );
                })}
            </MovieList>
            </>
    )}
        </Container >
    );
}

export default Home;