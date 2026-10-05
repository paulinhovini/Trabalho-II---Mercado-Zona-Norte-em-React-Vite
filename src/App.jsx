import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CardProdutos from "./components/CardProdutos.jsx";
import CardDicas from "./components/CardDicas.jsx";

// Arrays
const ofertas = [
  { id: 1, title: "Filé de Peito de Frango Sadia 1Kg", price: "17,98", image: "/Imagens/Cards/Index-clube/file-de-peito.jpg" },
  { id: 2, title: "Margarina Qualy C/ Sal 500g", price: "10,49", image: "/Imagens/Cards/Index-clube/margarina.jpg" },
  { id: 3, title: "Arroz Branco Tio João Tipo1 1Kg", price: "6,11", image: "/Imagens/Cards/Index-clube/arroz.jpg" },
  { id: 4, title: "Feijão Preto Combrasil Tipo1 1Kg", price: "8,99", image: "/Imagens/Cards/Index-clube/feijao.jpg" }
];

const produtosDestaque = [
  { id: 1, title: "Leite Líquido UHT Glória Integral 1l", price: "6,99", image: "/Imagens/Cards/Produtos/leite.jpg" },
  { id: 2, title: "Macarrão Espaguete Renata N.8 com Ovos 500g", price: "5,99", image: "/Imagens/Cards/Produtos/macarrao.jpg" },
  { id: 3, title: "Carne Moída de Alcatra Bovina", price: "58,99 kg", image: "/Imagens/Cards/Produtos/carne-moida.jpg" },
  { id: 4, title: "Refrigerante Coca-Cola Pet 1,5 L", price: "10,49", image: "/Imagens/Cards/Produtos/refrigerante.jpg" },
  { id: 5, title: "Sabão Líquido Omo Lavagem Perfeita 3L", price: "36,99", image: "/Imagens/Cards/Produtos/sabao-liquido.jpg" },
  { id: 6, title: "Amaciante Ypê Ultra Intenso 2 L", price: "10,99", image: "/Imagens/Cards/Produtos/amaciante.jpg" },
  { id: 7, title: "Água Sanitária Pro Water 2l", price: "5,99", image: "/Imagens/Cards/Produtos/agua-sanitaria.jpg" },
  { id: 8, title: "Limpador Veja Gold Multiuso 750ml", price: "6,49", image: "/Imagens/Cards/Produtos/limpador-multiuso.jpg" }
];

const dicas = [
  {
    id: 1,
    category: "Economia",
    title: "Fruteira, bancada ou geladeira: onde guardar frutas e hortaliças?",
    description: "Saiba como conservar e higienizar seus alimentos da melhor forma.",
    image: "/Imagens/Dicas/frutas-e-hortalicas.jpg",
    link: "https://g1.globo.com/pr/campos-gerais-sul/agro-riqueza-campos-gerais/noticia/2024/04/15/fruteira-bancada-ou-geladeira-onde-guardar-frutas-e-hortalicas.ghtml",
    buttonText: "Ler Dica Completa"
  },
  {
    id: 2,
    category: "Receitas",
    title: "Massa fresca caseira com 2 ingredientes",
    description: "Uma receita pronta em menos de 15 minutos existe (e você não precisa de nenhum utensílio especial)",
    image: "/Imagens/Dicas/massa-fresca-caseira.jpg",
    link: "https://www.tudogostoso.com.br/noticias/massa-fresca-caseira-com-2-ingredientes-e-pronta-em-menos-de-15-minutos-existe-e-voce-nao-precisa-de-nenhum-utensilio-especial-a9307.htm",
    buttonText: "Ver Receita"
  },
  {
    id: 3,
    category: "Organização",
    title: "Lista de compras de supermercado: entenda como organizar a sua",
    description: "Como montar uma lista de compras completa e economizar no supermercado!",
    image: "/Imagens/Dicas/lista-de-compra.jpg",
    link: "https://institucional.ifood.com.br/consumidores/lista-de-compras-de-supermercado/",
    buttonText: "Ler Dica Completa"
  },
  {
    id: 4,
    category: "Sustentabilidade",
    title: "Conheça o reaproveitamento de alimentos, uma alternativa ao desperdício",
    description: "Descubra como reaproveitar alimentos, reduzir o desperdício e criar receitas sustentáveis.",
    image: "/Imagens/Dicas/aproveitamento-integral.jpg",
    link: "https://pactocontrafome.org/reaproveitamento-alimentos/",
    buttonText: "Ler Dica Completa"
  },
  {
    id: 5,
    category: "Receitas",
    title: "Picanha ao Forno com Sal Grosso",
    description: "Uma receita suculenta e fácil para preparar a picanha com muito sabor.",
    image: "/Imagens/Dicas/picanha-de-forno.jpg",
    link: "https://www.tudogostoso.com.br/receita/249-picanha-ao-forno-com-sal-grosso.html",
    buttonText: "Ver Receita"
  },
  {
    id: 6,
    category: "Bebidas",
    title: "Como gelar bebidas rápido? Confira 3 truques fáceis!",
    description: "Aprenda dicas simples para deixar suas bebidas geladas em poucos minutos.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop",
    link: "https://www.terra.com.br/vida-e-estilo/degusta/como-gelar-bebidas-rapido-confira-3-truques-faceis,84ce4535323c7812d33f2a5da5c0f282eht2bb1e.html",
    buttonText: "Ler Dica Completa"
  }
];

function App() {
  return (
    <div>
      <Navbar />

      <main>
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

        {/* OFERTAS */}
        <section className="container py-5">
          <div className="row g-4">
            {ofertas.map((produto) => (
              <CardProdutos
                key={produto.id}
                title={produto.title}
                price={produto.price}
                image={produto.image}
              />
            ))}
          </div>
        </section>

        {/* BANNERS MENORES */}
        <section className="container pb-5">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="rounded-4 overflow-hidden">
                <img src="/Imagens/Banners/banner-4.jpg" className="d-block w-100" alt="Ofertas do Mercado Zona Norte" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="rounded-4 overflow-hidden">
                <img src="/Imagens/Banners/banner-5.jpg" className="d-block w-100" alt="Ofertas do Mercado Zona Norte" />
              </div>
            </div>
          </div>
        </section>

        {/* CABEÇALHO DA PÁGINA PRODUTOS */}
        <section id="produtos" className="cabecalho-pagina">
          <div className="container text-center">
            <h1 className="display-5">Encontre tudo o que precisa</h1>
            <p>Explore nossos produtos e encontre qualidade, variedade e bons preços para o seu dia a dia.</p>
          </div>
        </section>

        {/* PRODUTOS EM DESTAQUE */}
        <section className="container py-5">
          <div className="row g-4">
            {produtosDestaque.map((produto) => (
              <CardProdutos
                key={produto.id}
                title={produto.title}
                price={produto.price}
                image={produto.image}
              />
            ))}
          </div>
        </section>

        {/* CABEÇALHO DA PÁGINA DICAS */}
        <section id="dicas" className="cabecalho-pagina">
          <div className="container text-center">
            <h2 className="display-5">Dicas para o seu dia a dia</h2>
            <p>Aprenda a economizar nas compras, conservar melhor seus alimentos e preparar receitas incríveis com produtos do nosso mercado.</p>
          </div>
        </section>

        {/* CARDS DE DICAS */}
        <section className="container py-5">
          <div className="row g-4">
            {dicas.map((dica) => (
              <CardDicas
                key={dica.id}
                category={dica.category}
                title={dica.title}
                description={dica.description}
                image={dica.image}
                link={dica.link}
                buttonText={dica.buttonText}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;