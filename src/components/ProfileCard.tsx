import React from 'react';
import { Github, Instagram, Linkedin, MessageCircle, Twitter } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  designation: string;
  imageUrl: string;
  socialLinks: {
    whatsapp?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  designation,
  imageUrl,
  socialLinks,
}) => {
  return (
    <div className="relative w-full max-w-xs mx-auto overflow-hidden rounded-xl shadow-lg group h-96 bg-white">
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-110">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full transition-all duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
        <div className="text-white">
          <h3 className="text-2xl font-bold transition-all duration-300 group-hover:text-red-500">{name}</h3>
          <p className="mb-4 text-gray-200 transition-all duration-300 group-hover:text-gray-300">{designation}</p>
          
          {/* Social Icons */}
          <div className="flex space-x-3 transition-all duration-500 opacity-0 group-hover:opacity-100">
            {socialLinks.whatsapp && (
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-maroon hover:bg-red-700 hover:scale-110"
              >
                <MessageCircle size={18} />
              </a>
            )}
            
            {socialLinks.linkedin && (
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-maroon hover:bg-red-700 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            )}
            
            {socialLinks.github && (
              <a 
                href={socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-maroon hover:bg-red-700 hover:scale-110"
              >
                <Github size={18} />
              </a>
            )}
            
            {socialLinks.instagram && (
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-maroon hover:bg-red-700 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
            )}
            
            {socialLinks.twitter && (
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-white transition-all duration-300 rounded-full bg-maroon hover:bg-red-700 hover:scale-110"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;