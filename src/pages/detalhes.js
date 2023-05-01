import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CommentList from "../components/Comments/commentList";

function Detalhes(props) {
  const { id } = props;
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComentarios] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/marycamila184/movies/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      });
      
    fetch(`https://my-json-server.typicode.com/marycamila184/movies/movies/${id}/comentarios`)
      .then((response) => response.json())
      .then((data) => {
        setComentarios(data);
      });
  }, [id]);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Carregando Detalhes...</h1>
      ) : (
        <>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <img
                src={movie.poster}
                alt={movie.titulo}
                style={{ maxWidth: "50%", marginLeft: "auto", marginRight: "auto" }}
              />
            </div>
            <div className="col">
              <h1>Título: {movie.titulo}</h1>
              <p>Ano: {movie.ano}</p>
              <p>Nota: {movie.nota}</p>
              <p>Sinopse: {movie.sinopse}</p>
              <Link to="/">
                <button variant="primary">Voltar</button>
              </Link>
            </div>
          </div>
          <div>
            <h2>Comentários:</h2>
            <CommentList filmeId={id} />
          </div>
        </>
      )}
    </div>
  );
}

export default Detalhes;

