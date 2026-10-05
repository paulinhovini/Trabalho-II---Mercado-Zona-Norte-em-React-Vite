export default function CardDicas({ category, title, description, image, link, buttonText }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <span className="badge bg-secondary mb-2">{category}</span>
            <h5 className="card-title fs-6">{title}</h5>
            <p className="card-text text-muted small fw-normal">{description}</p>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn-produto mt-3">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}