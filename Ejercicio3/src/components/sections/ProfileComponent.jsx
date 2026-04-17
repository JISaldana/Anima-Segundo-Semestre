import ProfileCard from '../ui/ProfileCard';
import profilePic from '../../assets/profilePic.jpg';

function ProfileComponent() {
  return (
    <div className="container 100vh d-flex flex-column align-items-center justify-content-center">
      <h2>Perfil</h2>
      <ProfileCard 
        name="Juan Saldaña"
        image={profilePic}
        text="Do the impossible see the invisible."
      />
    </div>
  );
}

export default ProfileComponent;