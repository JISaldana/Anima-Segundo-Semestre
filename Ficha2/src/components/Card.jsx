import React from 'react';

const Card = ({ photo, name, rol }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body text-center py-4">
        <div className="ratio ratio-1x1 mx-auto mb-3" style={{ width: '130px' }}>
          <img
            src={photo}
            alt={name}
            className="rounded-circle w-100 h-100 shadow-sm"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h5 className="card-title mb-1">{name}</h5>
        <p className="text-muted small mb-2">{rol}</p>
        <p className="card-text text-secondary small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius.</p>
      </div>
    </div>
  );
};

export default Card;