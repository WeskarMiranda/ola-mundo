import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(window.location.href);
  }, []);

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
        </a>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {currentPage !== "http://localhost:3000/cadastro" && <li><a href="/cadastro" className="btn btn-dark">Cadastrar</a></li>}
        </ul>
      </header>
    </div>
  )
}