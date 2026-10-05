import "./App.css";
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
              <img src="/Imagens/Banners/banner-1.jpg" className="d-block w-100" alt="Ofertas do Mercado Zona Norte" />
            </div>

            <div className="carousel-item">
              <img src="/Imagens/Banners/banner-2.jpg" className="d-block w-100" alt="Ofertas especiais" />
            </div>

            <div className="carousel-item">
              <img src="/Imagens/Banners/banner-3.jpg" className="d-block w-100" alt="Promoções do mercado" />
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

        {/* PRODUTOS */}

        <section className="container py-5">

          <div className="row g-4">

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Index-clube/file-de-peito.jpg" className="card-img-top"
                  alt="Filé de Peito de Frango Sadia Zip 1Kg" />
                <div className="card-body">
                  <h5 className="card-title">Filé de Peito de Frango Sadia 1Kg</h5>
                  <p className="card-text">R$ 17,98</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Index-clube/margarina.jpg" className="card-img-top"
                  alt="Margarina Qualy C/ Sal 500g" />
                <div className="card-body">
                  <h5 className="card-title">Margarina Qualy <br />C/ Sal 500g</h5>
                  <p className="card-text">R$ 10,49</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Index-clube/arroz.jpg" className="card-img-top"
                  alt="Arroz Branco Tio João Tipo1 1Kg" />
                <div className="card-body">
                  <h5 className="card-title">Arroz Branco Tio João Tipo1 1Kg</h5>
                  <p className="card-text">R$ 6,11</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Index-clube/feijao.jpg" className="card-img-top"
                  alt="Feijão Preto Combrasil Tipo1 1Kg" />
                <div className="card-body">
                  <h5 className="card-title">Feijão Preto Combrasil Tipo1 1Kg</h5>
                  <p className="card-text">R$ 8,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/*  BANNERS MENORES */}
        <section className="container pb-5">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="rounded-4 overflow-hidden">
                <img src="Imagens/Banners/banner-4.jpg" className="d-block w-100"
                  alt="Ofertas do Mercado Zona Norte" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="rounded-4 overflow-hidden">
                <img src="Imagens/Banners/banner-5.jpg" className="d-block w-100"
                  alt="Ofertas do Mercado Zona Norte" />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
export default App