import React from "react";
import comentarios from "./index";
function CommentList(props) {
    const { filmeId } = props;
  
    const comentariosDoFilme = comentarios.filter(
      (comentario) => comentario.filmeId === filmeId
    );
  
    return (
      <>
        {comentariosDoFilme.length > 0 ? (
          comentariosDoFilme.map((comentario) => (
            <div key={comentario.id}>
              <p>
                <strong>{comentario.usuario}:</strong> {comentario.texto}
              </p>
            </div>
          ))
        ) : (
          <p>Sem comentários para esse filme.</p>
        )}
      </>
    );
  }

export default CommentList;