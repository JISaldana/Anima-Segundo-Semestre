import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfileCard from '../ui/ProfileCard';
import profilePic from '../../assets/profilePic.jpg';

function SidebarComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-dark text-white py-4 h-100">
      <ProfileCard 
        name="Juan Saldaña"
        image={profilePic}
        text="Do the impossible see the invisible."
      />
      <div className="clock text-center">
        <hr className="text-secondary" />
        <p className="small text-secondary">
          {time.getDate()}/{time.getMonth()+1}/{time.getFullYear()}
          <br />
          {time.toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}

export default SidebarComponent