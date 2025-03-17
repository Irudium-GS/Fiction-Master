import React from 'react';
import ProfileCard from '../components/ProfileCard';
import profile from '../components/Assets/Profile.jpg';
import md from '../components/Assets/MD.jpg';
import FullStackDev from '../components/Assets/FullStackDev.jpg'
import { Mail } from 'lucide-react';

function PC() {
  // Sample employee data
  const employees = [
    {
      id: 1,
      name: 'Shyed Azarudeen',
      designation: 'Founder',
      imageUrl: profile,
      socialLinks: {
        whatsapp: 'https://wa.me/7397273994',
        linkedin: 'https://linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://instagram.com/',
      },
    },
    {
      id: 2,
      name: 'Mohammed Safiullah',
      designation: 'Managing Director',
      imageUrl: profile,
      socialLinks: {
        whatsapp: 'https://wa.me/8883289332',
        linkedin: 'https://linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/',
      },
    },
    {
      id: 3,
      name: 'Sandhya',
      designation: 'Software Developer',
      imageUrl: profile,
      socialLinks: {
        linkedin: 'https://linkedin.com/in/',
        github: 'https://github.com/',
        instagram: 'https://instagram.com/',
      },
    },
    {
      id: 4,
      name: 'Anuprabha Baskaran',
      designation: 'UI/UX Designer',
      imageUrl: profile,
      socialLinks: {
        whatsapp: 'https://wa.me/',
        linkedin: 'https://linkedin.com/in/',
        github: 'https://github.com/',
        twitter: 'https://twitter.com/',
      },
    },
      {
        id: 5,
        name: 'Gopi Shankar',
        designation: 'Full Stack Developer',
        imageUrl: profile,
        socialLinks: {
          whatsapp: 'https://wa.me/7904378166',
          linkedin: 'https://linkedin.com/in/gopi-shankar-v',
          github: 'https://github.com/Irudium-GS',
          instagram: 'https://instagram.com/mercury.gs',
        },
      },
    
  ];

  return (
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-maroon">Our Team</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {employees.map((employee) => (
            <ProfileCard
              key={employee.id}
              name={employee.name}
              designation={employee.designation}
              imageUrl={employee.imageUrl}
              socialLinks={employee.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PC;