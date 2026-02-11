import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import profileImg from "../assets/images/Kamlesh.jpg";


interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  profileUrl: string;
  delay: string;
  socialLinks: SocialLink[];
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Laxman Vhadade",
      role: "Founder & CEO",
      description:
        "12+ years of experience in Building trusted, customer-centric real estate and fintech solutions.",
      image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_3.png",
      profileUrl: "#",
      delay: "0ms",
      socialLinks: [
        {
          icon: <Linkedin size={14} />,
          url: "#",
          label: "LinkedIn"
        },
        {
          icon: <Instagram size={14} />,
          url: "#",
          label: "Instagram"
        },
        {
          icon: <FaWhatsapp size={14} />,
          url: "#",
          label: "WhatsApp"
        },
      ],
    },
    {
      name: "Kamlesh Shah",
      role: "Senior Full Stack Developer & AI Solutions Architect",
      description:
        "Building scalable and secure full-stack web solutions.",
      image: profileImg,
      profileUrl: "#",
      delay: "0ms",
      socialLinks: [
        {
          icon: <Linkedin size={14} />,
          url: "https://www.linkedin.com/in/kamlesh-shah-833a61366",
          label: "LinkedIn"
        },
        {
          icon: <Instagram size={14} />,
          url: "https://www.instagram.com/",
          label: "Instagram"
        },
        {
          icon: <FaWhatsapp size={14} />,
          url: "https://wa.me/917049776747",
          label: "WhatsApp"
        },
      ],
    }


  ];

  return (
    <section className="relative py-16 bg-[#051600]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-500 uppercase tracking-wider font-medium animate-slideInUp">
            Expert IT Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2 animate-slideInUp">
            Meet Our Technology Leaders
          </h2>
        </div>

        {/* Team Cards */}
        <div className="flex flex-wrap justify-center -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div
                className="bg-[#141414] rounded-3xl p-6 text-center border border-[#1f1f1f]
                hover:border-transparent hover:shadow-[0_0_20px_rgba(1,119,209,0.45)]
                transition duration-500 animate-slideInUp"
                style={{ animationDelay: member.delay }}
              >
                {/* Image */}
                <div className="mb-6 h-[250px] rounded-2xl bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-center transition duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-[#0177d1] text-sm mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3">
                  {member.socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 flex items-center justify-center rounded-full
                      border border-[#2f2f2f] text-white
                      transition duration-300
                      hover:bg-gradient-to-tr hover:from-[#0177d1]
                      hover:text-black"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideInUp {
          animation: slideInUp 900ms ease both;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;