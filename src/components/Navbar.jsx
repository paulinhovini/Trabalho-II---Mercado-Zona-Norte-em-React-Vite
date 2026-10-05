import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-3" style={{ backgroundColor: '#1B22A7' }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-light" href="#">
          Mercado Zona Norte
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false"
          aria-label="Alternar navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end mt-3 mt-lg-0" id="menuPrincipal">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2">
            <a className="nav-menu" href="#produtos">
              <img src="/icones/produtos.svg" alt="Produtos" className="nav-icon" />
              <span>Produtos</span>
            </a>
            <a className="nav-menu" href="#dicas">
              <img src="/icones/dicas.svg" alt="Dicas" className="nav-icon" />
              <span>Dicas</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;