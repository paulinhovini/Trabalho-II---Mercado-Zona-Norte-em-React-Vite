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
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 17,98</p>
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
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 10,49</p>
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
                 <p className="card-text" style={{ color: '#1B22A7' }}>R$ 6,11</p>
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
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 8,99</p>
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
                <img src="/Imagens/Banners/banner-4.jpg" className="d-block w-100"
                  alt="Ofertas do Mercado Zona Norte" />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="rounded-4 overflow-hidden">
                <img src="/Imagens/Banners/banner-5.jpg" className="d-block w-100"
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
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 6,99</p>
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
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 5,99</p>
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
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 58,99 kg</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Produtos/Refrigerante.jpg" className="card-img-top object-fit-contain"
                  alt="Refrigerante Coca-Cola Pet 1,5 L" />
                <div className="card-body">
                  <h5 className="card-title">Refrigerante Coca-Cola Pet 1,5 L</h5>
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 10,49</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Produtos/Sabão Liquido.jpg" className="card-img-top object-fit-contain"
                  alt="Sabão Líquido Omo Lavagem Perfeita 3L" />
                <div className="card-body">
                  <h5 className="card-title">Sabão Líquido Omo Lavagem Perfeita 3L</h5>
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 36,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Produtos/Amaciante.jpg" className="card-img-top object-fit-contain"
                  alt="Amaciante Ypê Ultra Intenso 2 L" />
                <div className="card-body">
                  <h5 className="card-title">Amaciante Ypê Ultra Intenso 2 L</h5>
                 <p className="card-text" style={{ color: '#1B22A7' }}>R$ 10,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Produtos/Água Sanitária.jpg" className="card-img-top object-fit-contain"
                  alt="Água Sanitária Pro Water 2l" />
                <div className="card-body">
                  <h5 className="card-title">Água Sanitária <br />
                    Pro Water 2l</h5>
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 5,99</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-3">
              <div className="card">
                <img src="/Imagens/Cards/Produtos/Limpador Multiuso Veja.jpg" className="card-img-top object-fit-contain"
                  alt="Limpador Veja Gold Multiuso 750ml" />
                <div className="card-body">
                  <h5 className="card-title">Limpador Veja Gold Multiuso 750ml</h5>
                  <p className="card-text" style={{ color: '#1B22A7' }}>R$ 6,49</p>
                  <a href="#" className="btn btn-produto">VER PRODUTO</a>
                </div>
              </div>
            </div>
          </div>
        </ section >

        {/* CABEÇALHO DA PÁGINA */}
        <section id="dicas" className="cabecalho-pagina">
          <div className="container text-center">
            <h1 className="display-5">Dicas para o seu dia a dia</h1>
            <p>Aprenda a economizar nas compras, conservar melhor seus alimentos e preparar receitas incríveis com
              produtos do nosso mercado.</p>
          </div>
        </section>

        {/* CARDS DE DICAS */}
        <section className="container py-5">
          <div className="row g-4">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <img src="/Imagens/Dicas/frutas e hortaliças.jpg" className="card-img-top" alt="Hortifrúti e Legumes" />
                <div className="card-body d-flex flex-column">
                  <span className="text-uppercase text-muted fs-7 fw-bold mb-1">Economia</span>
                  <h5 className="card-title text-dark mb-2">Fruteira, bancada ou geladeira: <br />onde guardar
                    frutas e hortaliças?</h5>
                  <p className="card-text text-secondary mb-4">
                    Saiba como conservar e higienizar <br />seus alimentos da melhor forma.
                  </p>
                  <a href="https://g1.globo.com/pr/campos-gerais-sul/agro-riqueza-campos-gerais/noticia/2024/04/15/fruteira-bancada-ou-geladeira-onde-guardar-frutas-e-hortalicas.ghtml"
                    target="_blank" rel="noopener noreferrer" className="btn btn-produto mt-auto">Ler Dica
                    Completa</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <img src="/Imagens/Dicas/Massa fresca caseira.jpg" className="card-img-top" alt="Prato Massa Macarrão" />
                <div className="card-body d-flex flex-column">
                  <span className="text-uppercase fs-7 fw-bold mb-1" style={{ color: '#1B22A7' }}>Receitas</span>
                  <h5 className="card-title text-dark mb-2">Massa fresca caseira com 2 ingredientes
                  </h5>
                  <p className="card-text text-secondary mb-4">
                    Uma receita pronta em menos de 15 minutos existe (e você não precisa de nenhum utensílio
                    especial)
                  </p>
                  <a href="https://www.tudogostoso.com.br/noticias/massa-fresca-caseira-com-2-ingredientes-e-pronta-em-menos-de-15-minutos-existe-e-voce-nao-precisa-de-nenhum-utensilio-especial-a9307.htm"
                    target="_blank"rel="noopener noreferrer" className="btn btn-produto mt-auto">Ver
                    Receita</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <img src="/Imagens/Dicas/Lista de compra.jpg" className="card-img-top" alt="Despensa Organizada" />
                <div className="card-body d-flex flex-column">
                  <span className="text-uppercase fs-7 fw-bold mb-1" style={{ color: '#1B22A7' }}>Organização</span>
                  <h5 className="card-title text-dark mb-2">Lista de compras de supermercado: entenda como
                    organizar a sua
                  </h5>
                  <p className="card-text text-secondary mb-4">
                    Como montar uma lista de compras completa e economizar no supermercado!
                  </p>
                  <a href="https://institucional.ifood.com.br/consumidores/lista-de-compras-de-supermercado/"
                    target="_blank" rel="noopener noreferrer" className="btn btn-produto mt-auto">Ler Dica
                    Completa</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <img src="/Imagens/Dicas/Aproveitamento integral dos alimentos.jpg" className="card-img-top"
                  alt="Hortaliças e Verduras" />
                <div className="card-body d-flex flex-column">
                  <span className="text-uppercase fs-7 fw-bold mb-1" style={{ color: '#1B22A7' }}>Sustentabilidade</span>
                  <h5 className="card-title text-dark mb-2">Conheça o reaproveitamento de alimentos, uma
                    alternativa ao desperdício</h5>
                  <p className="card-text text-secondary mb-4">
                    Descubra como reaproveitar alimentos, <br />reduzir o desperdício e criar receitas
                    sustentáveis.
                  </p>
                  <a href="https://pactocontrafome.org/reaproveitamento-alimentos/?gad_source=1&gad_campaignid=23822864820&gbraid=0AAAAA-VWYNePl_UOzEYEFMsan45vNyilx&gclid=CjwKCAjw_eLVBhBEEiwAeaYZfK7EygD4RuY6L-ajK6NAEZJeG2fcCD1IWu5LZVJ2zRTlCkQezU3Q7xoCr9gQAvD_BwE"
                    target="_blank" rel="noopener noreferrer" className="btn btn-produto mt-auto">Ler Dica
                    Completa</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">

              <div className="card h-100">
                <img src="/Imagens/Dicas/Picanha de forno.jpg" className="card-img-top" alt="Geladeira e Armazenamento" />

                <div className="card-body d-flex flex-column">
                  <span className="text-uppercase fs-7 fw-bold mb-1" style={{ color: '#1B22A7' }}>Receitas</span>
                  <h5 className="card-title text-dark mb-2">Picanha ao Forno com Sal Grosso</h5>
                  <p className="card-text text-secondary mb-4">
                    Uma receita suculenta e fácil para preparar a picanha com muito sabor.
                  </p>
                  <a href="https://www.tudogostoso.com.br/receita/249-picanha-ao-forno-com-sal-grosso.html"
                    target="_blank" rel="noopener noreferrer" className="btn btn-produto mt-auto">Ver
                    Receita</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100">
                <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop" className="card-img-top" alt="Bebidas e Vinhos" />
                <div className="card-body d-flex flex-column">
                  <span className="text-uppercase fs-7 fw-bold mb-1" style={{ color: '#1B22A7' }}>Bebidas</span>
                  <h5 className="card-title text-dark mb-2">Como gelar bebidas rápido? Confira 3 truques fáceis!
                  </h5>
                  <p className="card-text text-secondary mb-4">
                    Aprenda dicas simples para deixar suas bebidas geladas em poucos minutos.
                  </p>
                  <a href="https://www.terra.com.br/vida-e-estilo/degusta/como-gelar-bebidas-rapido-confira-3-truques-faceis,84ce4535323c7812d33f2a5da5c0f282eht2bb1e.html"
                    target="_blank" rel="noopener noreferrer" className="btn btn-produto mt-auto">Ler Dica
                    Completa</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer-site text-light py-4 mt-5">
          <div className="container">
            {/* justify-content-center centraliza os blocos e o gap controla o espaço entre eles */}
            <div className="row justify-content-center gap-md-5 g-4 align-items-start">

              {/* Central de Atendimento */}
              <div className="col-12 col-md-4 text-center text-md-start">
                <h6 className="fw-bold text-uppercase mb-2">Central de Atendimento</h6>

                <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                  <img src="/icones/telefone.svg" alt="Telefone" className="footer-icon me-2" />
                  <span className="small">(21) 99999-9999</span>
                </div>

                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                  <img src="/icones/email.svg" alt="E-mail" className="footer-icon me-2" />
                  <span className="small">atendimento@mercadozonanorte.com.br</span>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="col-12 col-md-4 text-center text-md-start">
                <h6 className="fw-bold text-uppercase mb-2">Acompanhe o Zona Norte nas redes sociais</h6>
                <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                  <a href="https://www.facebook.com.br" className="social-link d-flex align-items-center gap-2">
                    <img src="/icones/facebook.svg" alt="Facebook" className="footer-icon" />
                    <span className="small">Facebook</span>
                  </a>
                  <a href="https://www.instagram.com" className="social-link d-flex align-items-center gap-2">
                    <img src="/icones/instagram.svg" alt="Instagram" className="footer-icon" />
                    <span className="small">Instagram</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Copyright */}
            <div className="text-center small opacity-75 mt-4 pt-3 border-top border-secondary">
              &copy; 2026 Mercado Zona Norte. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
export default App