import React from 'react';

const Detail = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <h2>À propos de notre hôpital</h2>
          <p>
            Bienvenue sur le site de notre hôpital. Nous sommes dévoués à fournir des soins de santé de haute qualité à nos patients.
          </p>
        </div>
        <div className="col-md-4">
          <h2>Nos services</h2>
          <ul>
            <li>Service d'urgence 24/7</li>
            <li>Chirurgie</li>
            <li>Médecine interne</li>
            <li>Soins pédiatriques</li>
            {/* Ajoutez d'autres services ici */}
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Prendre rendez-vous</h2>
          <p>
            Pour prendre rendez-vous, veuillez nous contacter au [numéro de téléphone] ou utilisez notre formulaire de rendez-vous en ligne.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
