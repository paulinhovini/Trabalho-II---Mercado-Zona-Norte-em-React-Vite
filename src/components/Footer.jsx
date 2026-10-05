import React from 'react';

function Footer() {
  return (
    <footer className="footer-site text-light py-4 mt-5">
      <div className="container">
        <div className="row justify-content-center gap-md-5 g-4 align-items-start">
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
        <div className="text-center small opacity-75 mt-4 pt-3 border-top border-secondary">
          &copy; 2026 Mercado Zona Norte. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;