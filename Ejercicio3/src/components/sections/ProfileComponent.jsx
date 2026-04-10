import ProfileCard from '../layout/ProfileCard';

function ProfileComponent() {
  return (
    <div className="container">
      <h2>Perfil</h2>
      <ProfileCard 
        name="Juan Saldaña"
        image="https://via.placeholder.com/150"
        text="Do the impossible see the invisible."
      />
    </div>
  );
}

export default ProfileComponent;