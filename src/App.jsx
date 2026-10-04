import './App.css'

function App() {
  return (
    <div>
      <main>

        {/* MENU */}
        <nav className="navbar navbar-expand-lg navbar-dark py-3" style={{ backgroundColor: '#1B22A7' }}>
          <div className="container-fluid">
            <a className="navbar-brand fw-bold text-light" href="#">
              Mercado Zona Norte
            </a>
          
            {/* Mobile */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false"
              aria-label="Alternar navegação">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end mt-3 mt-lg-0" id="menuPrincipal">
              <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2">
                <a className="nav-menu" href="#produtos">
                  <img src="icones/produtos.svg" alt="Produtos" className="nav-icon" />
                  <span>Produtos</span>
                </a>

                  <a className="nav-menu" href="#dicas">
                    <img src="icones/dicas.svg" alt="Dicas" className="nav-icon" />
                    <span>Dicas</span>
                  </a>
                </div>
              </div>
            </div>
          
        </nav>

        {/* BANNERS */}
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="Imagens/Banners/banner-1.jpg" className="d-block w-100" alt="Ofertas do Mercado Zona Norte" />
            </div>

            <div className="carousel-item">
              <img src="Imagens/Banners/banner-2.jpg" className="d-block w-100" alt="Ofertas especiais" />
            </div>

            <div className="carousel-item">
              <img src="Imagens/Banners/banner-3.jpg" className="d-block w-100" alt="Promoções do mercado" />
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
  </main>
    </div>
  )
}
export default App