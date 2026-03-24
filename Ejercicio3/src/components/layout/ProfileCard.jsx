function ProfileCard({ name, image, text }) {
  return (
    <div className="text-center">
      <img 
        src={image} 
        className="rounded-circle mb-3" 
        width="90%" 
        height="90%" 
        alt="User profile" 
      />
      <h2 className="card-title mb-2">{name}</h2>
      <p className="card-text text-white mb-5">{text}</p>
    </div>
  );
}

export default ProfileCard;
