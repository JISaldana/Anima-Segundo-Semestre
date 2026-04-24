import React from 'react';
import cardData from '../Data/cardData';

function ProfileCard() {
  const card = cardData[0];
  
  return (
    <div className="text-center">
      <img 
        src={card.photo} 
        className="rounded-circle mb-3" 
        height="30%"
        width="30%"
        alt="User profile" 
      />
      <h2 className="card-title mb-2">{card.name}</h2>
      <p className="card-text text-white mb-5 ms-3 me-3">{card.rol}</p>
    </div>
  );
}

export default ProfileCard;
