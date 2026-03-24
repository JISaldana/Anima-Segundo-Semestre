import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfileCard from './ProfileCard';
import profilePic from '../../assets/profilePic.jpg';

function SidebarComponent() {
  return (
    <div className="bg-dark text-white py-4 h-100">
      <ProfileCard 
        name="Juan Saldaña"
        image={profilePic}
        text="Do the impossible see the invisible."
      />
      <div className="clock text-center">
        <p className="small text-secondary">
          {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}

export default SidebarComponent