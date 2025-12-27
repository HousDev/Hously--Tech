// import React from 'react';
// import { Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

// interface SocialLink {
//   icon: React.ReactNode;
//   url: string;
//   label: string;
// }

// interface TeamMember {
//   name: string;
//   role: string;
//   description: string;
//   image: string;
//   profileUrl: string;
//   delay: string;
//   socialLinks: SocialLink[];
// }

// const TeamSection: React.FC = () => {
//   const teamMembers: TeamMember[] = [
//     {
//       name: "Alex Javed",
//       role: "AI Solutions Architect",
//       description: "Designs scalable AI-driven systems that automate workflows and enhance decision-making.",
//       image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_1.png",
//       profileUrl: "#",
//       delay: "0ms",
//       socialLinks: [
//         { icon: <Facebook size={14} />, url: "#", label: "Facebook" },
//         { icon: <Twitter size={14} />, url: "#", label: "Twitter" },
//         { icon: <Instagram size={14} />, url: "#", label: "Instagram" },
//         { icon: <MessageCircle size={14} />, url: "#", label: "WhatsApp" },
//       ],
//     },
//     {
//       name: "Jenny William",
//       role: "Cloud Infrastructure Engineer",
//       description: "Specializes in secure, high-availability cloud solutions for modern enterprises.",
//       image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_2.png",
//       profileUrl: "#",
//       delay: "200ms",
//       socialLinks: [
//         { icon: <Facebook size={14} />, url: "#", label: "Facebook" },
//         { icon: <Twitter size={14} />, url: "#", label: "Twitter" },
//         { icon: <Instagram size={14} />, url: "#", label: "Instagram" },
//         { icon: <MessageCircle size={14} />, url: "#", label: "WhatsApp" },
//       ],
//     },
//     {
//       name: "Daniel Thomas",
//       role: "Full Stack Developer",
//       description: "Builds robust web applications with modern frameworks and scalable APIs.",
//       image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_3.png",
//       profileUrl: "#",
//       delay: "400ms",
//       socialLinks: [
//         { icon: <Facebook size={14} />, url: "#", label: "Facebook" },
//         { icon: <Twitter size={14} />, url: "#", label: "Twitter" },
//         { icon: <Instagram size={14} />, url: "#", label: "Instagram" },
//         { icon: <MessageCircle size={14} />, url: "#", label: "WhatsApp" },
//       ],
//     },
//     {
//       name: "Jessica Lauren",
//       role: "Cybersecurity Analyst",
//       description: "Ensures data protection through proactive security audits and threat monitoring.",
//       image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_4.png",
//       profileUrl: "#",
//       delay: "600ms",
//       socialLinks: [
//         { icon: <Facebook size={14} />, url: "#", label: "Facebook" },
//         { icon: <Twitter size={14} />, url: "#", label: "Twitter" },
//         { icon: <Instagram size={14} />, url: "#", label: "Instagram" },
//         { icon: <MessageCircle size={14} />, url: "#", label: "WhatsApp" },
//       ],
//     },
//   ];

//   return (
//     <section className="relative py-4 bg-[#051600]">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="text-blue-500 uppercase tracking-wider font-medium animate-slideInUp">
//             Expert IT Team
//           </span>
//           <h2 className="text-4xl lg:text-6xl font-bold text-white mt-2 animate-slideInUp">
//             Meet Our Technology Leaders
//           </h2>
//         </div>

//         {/* Team Cards */}
//         <div className="flex flex-wrap justify-center -mx-4">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
//               <div
//                 className="bg-[#141414] rounded-3xl p-6 text-center border border-[#1f1f1f] animate-slideInUp hover:border-transparent hover:shadow-[0_0_20px_rgba(1,119,209,0.5)] transition duration-500"
//                 style={{ animationDelay: member.delay }}
//               >
//                 {/* Image */}
//                 <div className="mb-6 overflow-hidden rounded-2xl">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-auto transform transition duration-500 hover:scale-105"
//                   />
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
//                 <p className="text-[#0177d1] text-sm mb-4">{member.role}</p>
//                 <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.description}</p>

//                 {/* Social Icons */}
//                 <div className="flex justify-center gap-3">
//                   {member.socialLinks.map((social, i) => (
//                     <a
//                       key={i}
//                       href={social.url}
//                       aria-label={social.label}
//                       className="w-9 h-9 flex items-center justify-center rounded-full border border-[#2f2f2f] text-white transition duration-300 hover:bg-gradient-to-tr hover:from-[#0177d1] hover:to-[#ffd801] hover:text-black"
//                     >
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes slideInUp {
//           from { opacity: 0; transform: translateY(40px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideInUp { animation: slideInUp 900ms ease both; }
//       `}</style>
//     </section>
//   );
// };

// export default TeamSection;

import React from 'react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';
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
      name: "Kamlesh Shah",
      role: "Full Stack Developer & AI Solutions Architect",
      description:
        "Full Stack Developer delivering end-to-end web solutions with modern technologies, AI integrations, and a strong emphasis on scalability, security, and clean architecture.",
      image: profileImg,
      profileUrl: "#",
      delay: "0ms",
      socialLinks: [
        {
          icon: <Linkedin size={14} />, url: "https://www.linkedin.com/in/kamlesh-shah-833a61366", label: "LinkedIn" },
        { icon: <Instagram size={14} />, url: "#", label: "Instagram" },
        { icon: <MessageCircle size={14} />, url: "#", label: "WhatsApp" },
      ],
    }
    // {
    //   name: "Jenny William",
    //   role: "Cloud Infrastructure Engineer",
    //   description:
    //     "Specializes in secure, high-availability cloud solutions for modern enterprises.",
    //   image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_2.png",
    //   profileUrl: "#",
    //   delay: "200ms",
    //   socialLinks: [
    //     { icon: <Facebook size={14} />, url: "#", label: "Facebook" },
    //     { icon: <Twitter size={14} />, url: "#", label: "Twitter" },
    //     { icon: <Instagram size={14} />, url: "#", label: "Instagram" },
    //     { icon: <MessageCircle size={14} />, url: "#", label: "WhatsApp" },
    //   ],
    // },
    // {
    //   name: "Daniel Thomas",
    //   role: "Full Stack Developer",
    //   description:
    //     "Builds robust web applications with modern frameworks and scalable APIs.",
    //   image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_3.png",
    //   profileUrl: "#",
    //   delay: "400ms",
    //   socialLinks: [
    //     { icon: <Facebook size={14} />, url: "#", label: "Facebook" },
    //     { icon: <Twitter size={14} />, url: "#", label: "Twitter" },
    //     { icon: <Instagram size={14} />, url: "#", label: "Instagram" },
    //     { icon: <MessageCircle size={14} />, url: "#", label: "WhatsApp" },
    //   ],
    // },
    // {
    //   name: "Jessica Lauren",
    //   role: "Cybersecurity Analyst",
    //   description:
    //     "Ensures data protection through proactive security audits and threat monitoring.",
    //   image: "https://html.themehour.net/robor/demo/assets/img/team/team_1_4.png",
    //   profileUrl: "#",
    //   delay: "600ms",
    //   socialLinks: [
    //     { icon: <Facebook size={14} />, url: "#", label: "Facebook" },
    //     { icon: <Twitter size={14} />, url: "#", label: "Twitter" },
    //     { icon: <Instagram size={14} />, url: "#", label: "Instagram" },
    //     { icon: <MessageCircle size={14} />, url: "#", label: "WhatsApp" },
    //   ],
    // },
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
                {/* ✅ IMAGE (FIXED & SAME FOR ALL) */}
                <div className="mb-6 h-[260px] rounded-2xl bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition duration-500 hover:scale-105"
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
