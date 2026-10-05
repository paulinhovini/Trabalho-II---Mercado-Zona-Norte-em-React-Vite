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

        {/* CABEÇALHO DA PÁGINA*/}
    <section id="produtos" className="cabecalho-pagina">
          <div className="container text-center">
            <h1 className="display-5">Encontre tudo o que precisa</h1>
            <p>Explore nossos produtos e encontre qualidade, variedade e bons preços para o seu dia a dia.</p>
          </div>
        </section>

        {/* PRODUTOS EM DESTAQUE*/}
        <section className="container py-5">
          <div className="row g-4">

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Produtos/Leite.jpg" className="card-img-top object-fit-contain"
                  alt="Leite Líquido UHT Glória Integral 1l" />
                <div className="card-body">
                  <h5 className="card-title">Leite Líquido UHT Glória Integral 1l</h5>
                   <p className="card-text">R$ 6,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Produtos/Macarrão.jpg" className="card-img-top object-fit-contain"
                  alt="Macarrão Espaguete Renata N.8 com Ovos 500g" />
                <div className="card-body">
                  <h5 className="card-title">Macarrão Espaguete Renata N.8 com Ovos 500g</h5>
                   <p className="card-text">R$ 5,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Produtos/Carne Moída.jpg" className="card-img-top object-fit-contain"
                  alt="Carne Moída de Alcatra Bovina" />
                <div className="card-body">
                  <h5 className="card-title">Carne Moída de Alcatra Bovina</h5>
                   <p className="card-text">58,99 kg</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="Imagens/Cards/Produtos/Refrigerante.jpg" className="card-img-top object-fit-contain"
                  alt="Refrigerante Coca-Cola Pet 1,5 L" />
                <div className="card-body">
                  <h5 className="card-title">Refrigerante Coca-Cola Pet 1,5 L</h5>
                 <p className="card-text">58,99/kg</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="Imagens/Cards/Produtos/Sabão Liquido.jpg" className="card-img-top object-fit-contain"
                  alt="Sabão Líquido Omo Lavagem Perfeita 3L" />
                <div className="card-body">
                  <h5 className="card-title">Sabão Líquido Omo Lavagem Perfeita 3L</h5>
                   <p className="card-text">R$ 36,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="Imagens/Cards/Produtos/Amaciante.jpg" className="card-img-top object-fit-contain"
                  alt="Amaciante Ypê Ultra Intenso 2 L" />
                <div className="card-body">
                  <h5 className="card-title">Amaciante Ypê Ultra Intenso 2 L</h5>
                   <p className="card-text">R$ 10,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="Imagens/Cards/Produtos/Água Sanitária.jpg" className="card-img-top object-fit-contain"
                  alt="Água Sanitária Pro Water 2l" />
                <div className="card-body">
                  <h5 className="card-title">Água Sanitária <br />
                    Pro Water 2l</h5>
                   <p className="card-text">R$ 5,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="Imagens/Cards/Produtos/Limpador Multiuso Veja.jpg"className="card-img-top object-fit-contain"
                  alt="Limpador Veja Gold Multiuso 750ml" />
                <div className="card-body">
                  <h5 className="card-title">Limpador Veja Gold Multiuso 750ml</h5>
                 <p className="card-text">R$ 6,49</p>
                     <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

          </div>
        </ section >

      </main>
    </div>
  )
}
export default App