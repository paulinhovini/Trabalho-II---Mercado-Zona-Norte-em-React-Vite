export default function CardProdutos({ title, price, image }) {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="card h-100">
        <img src={image} className="card-img-top object-fit-contain" alt={title} />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title fs-6">{title}</h5>
          <div>
            <p className="card-text text-primary fs-5 mb-2">R$ {price}</p>
            <button className="btn-produto">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}