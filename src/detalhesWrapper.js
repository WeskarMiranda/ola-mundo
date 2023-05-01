import { useParams } from "react-router-dom";
import Detalhes from "./pages/detalhes";

function DetalhesWrapper() {
  const { id } = useParams();

  return <Detalhes id={id} />;
}

export default DetalhesWrapper;