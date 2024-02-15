import React from 'react';

const Evennement = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Découvrez la dernière technologie médicale qui révolutionne le traitement des patients</p>
              <a href="#" className="btn btn-primary">Voir</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Participez à notre prochaine conférence sur la santé mentale le 15 mars 2024</p>
              <a href="#" className="btn btn-primary">Voir</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Participez à notre prochaine conférence sur la santé mentale le 15 mars 2024</p>
              <a href="#" className="btn btn-primary">Voir</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evennement;
