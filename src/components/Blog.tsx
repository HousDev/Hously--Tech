import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  delay: string;
  content?: string; // Full content for the modal
}
import { FaTimes,FaRegCalendarAlt, FaRegUser, FaRegClock  } from "react-icons/fa";


const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderAnimatedText = (text: string) => {
    const words = text.split(' ');
    
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block">
        {word.split('').map((letter, letterIndex) => (
          <span
            key={`${wordIndex}-${letterIndex}`}
            className="inline-block animate-fadeInUp"
            style={{
              animationDelay: `${(wordIndex * 100 + letterIndex * 50)}ms`
            }}
          >
            {letter}
          </span>
        ))}
        {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ));
  };

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "AI-Powered Real Estate: Transforming Property Management",
      excerpt: "Discover how artificial intelligence is revolutionizing property management with predictive analytics and smart automation.",
      date: "24 Jan, 2025",
      author: "Kamlesh Shah",
      category: "Real Estate",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      delay: "0ms",
      content: `The real estate industry is undergoing a digital transformation powered by artificial intelligence. AI is no longer a futuristic concept but a practical tool that's reshaping how properties are managed, marketed, and maintained.

One of the most significant applications is predictive maintenance. AI algorithms analyze historical maintenance data, property conditions, and environmental factors to predict when equipment might fail. This proactive approach reduces emergency repairs by up to 40% and extends the lifespan of critical systems like HVAC, plumbing, and electrical.

Smart tenant management is another area where AI shines. Natural language processing enables intelligent chatbots that handle tenant inquiries 24/7, from maintenance requests to lease questions. Machine learning algorithms analyze tenant behavior to optimize amenity usage, predict turnover rates, and improve retention strategies.

Property valuation has become more accurate with AI-driven analytics. By processing vast amounts of market data, comparable properties, neighborhood trends, and economic indicators, AI systems provide real-time property valuations with unprecedented accuracy. This benefits both property managers and investors in making informed decisions.

Virtual property tours enhanced by AI create immersive experiences for potential tenants and buyers. AI algorithms can generate realistic virtual staging, predict how furniture would look in empty spaces, and even suggest optimal room layouts based on property dimensions and natural light patterns.

Energy optimization through AI is reducing operational costs significantly. Smart systems learn occupancy patterns and adjust heating, cooling, and lighting automatically. Some advanced implementations have reduced energy consumption by 25-35% while maintaining tenant comfort.

The future of real estate management lies in integrated AI platforms that connect all aspects of property operations. From automated lease management and rent collection to predictive analytics for investment decisions, AI is creating more efficient, sustainable, and profitable real estate ecosystems.`
    },
    {
      id: 2,
      title: "Digital Banking Revolution: The Future of Financial Services",
      excerpt: "Explore how digital transformation is reshaping banking with mobile-first solutions and AI-driven financial insights.",
      date: "16 Jul, 2025",
      author: "Kamlesh Shah",
      category: "Finance",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&auto=format&fit=crop",
      delay: "270ms",
      content: `The banking industry is experiencing its most significant transformation since the introduction of ATMs. Digital banking is evolving from simple online account access to comprehensive financial ecosystems that anticipate and meet customer needs proactively.

Mobile-first banking has become the norm, with 85% of customers now preferring mobile apps over traditional banking channels. The most successful digital banks offer seamless experiences across devices, with biometric authentication, voice commands, and personalized interfaces that adapt to user behavior.

AI-powered financial insights are revolutionizing how customers manage their money. Machine learning algorithms analyze spending patterns, income streams, and financial goals to provide personalized advice. These systems can detect unusual spending patterns to prevent fraud, suggest optimal savings strategies, and even predict cash flow needs.

Open banking APIs are creating new possibilities for financial innovation. By securely sharing financial data with authorized third-party providers, customers can access specialized services like automated investment platforms, streamlined loan applications, and integrated financial management tools. This ecosystem approach allows traditional banks to compete with fintech startups.

Blockchain technology is enhancing security and transparency in banking. While most visible in cryptocurrencies, blockchain's distributed ledger technology offers benefits for traditional banking too. Smart contracts automate complex transactions, cross-border payments become faster and cheaper, and identity verification becomes more secure and portable.

Personalized banking experiences are becoming standard. Using customer data (with proper consent and privacy controls), banks can offer tailored product recommendations, customized interest rates, and contextual financial education. This hyper-personalization improves customer satisfaction while increasing engagement with banking products.

Regulatory technology (RegTech) is helping banks navigate increasing compliance requirements more efficiently. AI systems monitor transactions for anti-money laundering (AML) compliance, automate regulatory reporting, and ensure adherence to ever-changing financial regulations across different jurisdictions.

The future of banking is increasingly invisible—financial services embedded seamlessly into everyday activities. From automated savings triggered by spending patterns to AI-driven investment portfolios that adjust based on life events, banking is becoming less about managing accounts and more about achieving financial wellbeing.`
    },
    {
      id: 3,
      title: "Enterprise IT Transformation: Building Future-Ready Infrastructure",
      excerpt: "Learn how modern IT infrastructure supports digital transformation with cloud-native solutions and scalable architecture.",
      date: "30 Jun, 2025",
      author: "Kamlesh Shah",
      category: "IT Solutions",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
      delay: "540ms",
      content: `Enterprise IT infrastructure is undergoing a fundamental shift from traditional data centers to dynamic, cloud-native environments. This transformation is essential for organizations seeking agility, scalability, and competitive advantage in the digital age.

Cloud-native architecture represents more than just moving to the cloud—it's a complete rethinking of how applications are designed and deployed. Microservices architecture breaks down monolithic applications into independently deployable services, enabling faster development cycles and more resilient systems. Containerization with technologies like Docker and Kubernetes provides consistent environments from development to production.

Infrastructure as Code (IaC) has revolutionized how IT environments are managed. By defining infrastructure through code, organizations achieve consistency, reproducibility, and version control for their entire technology stack. This approach eliminates configuration drift, enables self-service provisioning for development teams, and accelerates deployment pipelines.

Edge computing is extending cloud capabilities to where data is generated and consumed. By processing data closer to its source, edge computing reduces latency, conserves bandwidth, and enables real-time decision-making. This is particularly valuable for IoT applications, real-time analytics, and geographically distributed operations.

Hybrid and multi-cloud strategies are becoming standard for enterprise IT. Rather than relying on a single cloud provider, organizations are distributing workloads across multiple clouds and on-premises infrastructure. This approach optimizes costs, improves resilience, and avoids vendor lock-in while meeting data residency requirements.

AI Operations (AIOps) is transforming IT management. Machine learning algorithms analyze massive volumes of operational data to detect anomalies, predict system failures, and automate routine tasks. This proactive approach to IT operations reduces downtime, optimizes resource utilization, and frees IT staff to focus on strategic initiatives.

Zero Trust security architecture is replacing traditional perimeter-based security models. In a world where employees work remotely and applications span multiple clouds, the principle of "never trust, always verify" ensures that every access request is authenticated and authorized, regardless of location.

Sustainable IT is gaining importance as organizations recognize their environmental responsibility. Energy-efficient data centers, responsible e-waste management, and carbon-aware computing are becoming key considerations in IT strategy. Modern cloud providers offer tools to measure and optimize the carbon footprint of digital operations.

The future of enterprise IT lies in intelligent, autonomous systems that can self-heal, self-optimize, and self-protect. As AI and automation advance, IT infrastructure will become increasingly adaptive, capable of anticipating needs and responding to changes without human intervention.`
    },
    {
      id: 4,
      title: "Proptech Innovations: Smart Buildings and IoT Integration",
      excerpt: "Discover how Internet of Things technology is creating intelligent buildings with enhanced efficiency and tenant experience.",
      date: "15 May, 2025",
      author: "KAmlesh Shah",
      category: "Real Estate",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      delay: "0ms",
      content: `Property technology (Proptech) is transforming buildings from static structures into intelligent, responsive ecosystems. The integration of Internet of Things (IoT) devices is at the heart of this revolution, creating smart buildings that optimize operations, enhance sustainability, and improve occupant experience.

IoT sensors throughout buildings collect real-time data on everything from occupancy patterns to environmental conditions. Temperature, humidity, air quality, and light levels are continuously monitored and adjusted automatically. This creates healthier indoor environments while reducing energy consumption by up to 30% compared to traditional building management systems.

Smart access control goes beyond keycards and PIN codes. Facial recognition, mobile credentials, and biometric authentication provide secure, convenient building access. These systems can adjust permissions dynamically based on time of day, occupancy levels, or specific events, enhancing both security and flexibility.

Predictive maintenance powered by IoT is revolutionizing facility management. Sensors on critical equipment like elevators, HVAC systems, and plumbing detect early signs of wear or malfunction. Maintenance teams receive alerts before failures occur, reducing downtime and extending equipment lifespan. Some advanced systems can even dispatch repair technicians automatically.

Space utilization analytics help property managers optimize building layouts and usage. IoT sensors track how different areas are used throughout the day, identifying underutilized spaces and overcrowded areas. This data informs decisions about workspace design, amenity placement, and even rental pricing strategies.

Integrated building management platforms bring all these systems together into a unified dashboard. Property managers can monitor and control lighting, climate, security, and energy usage from a single interface. Advanced platforms use AI to identify optimization opportunities and suggest improvements automatically.

Tenant experience apps connect occupants with building services seamlessly. From booking meeting rooms and reporting maintenance issues to accessing building amenities and receiving personalized notifications, these apps create a modern, convenient living and working environment.

Sustainability monitoring is increasingly important for both regulatory compliance and market competitiveness. IoT systems track energy consumption, water usage, and waste generation in real time. This data helps buildings achieve green certifications like LEED and BREEAM while identifying opportunities for further environmental improvements.

The future of smart buildings lies in their ability to learn and adapt autonomously. As AI algorithms analyze historical and real-time data, buildings will anticipate needs before occupants express them—adjusting lighting as natural light changes, pre-cooling spaces before scheduled meetings, or optimizing ventilation based on air quality forecasts.`
    },
    {
  id: 5,
  title: "Fintech Security: Protecting Digital Financial Ecosystems",
  excerpt: "Essential cybersecurity measures for financial technology platforms handling sensitive transactions and personal data.",
  date: "08 Apr, 2025",
  author: "Kamlesh Shah",
  category: "Finance",
  readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop",
  delay: "270ms",
      content: `As financial technology continues to transform how we manage money, robust cybersecurity has become paramount. Fintech platforms handle sensitive financial data and transactions, making them prime targets for cybercriminals. A multi-layered security approach is essential to protect these digital financial ecosystems.

Encryption forms the foundation of fintech security. End-to-end encryption ensures that data remains protected throughout its entire journey—from the user's device through transmission to backend systems. Modern implementations use quantum-resistant algorithms that can withstand future threats, while hardware security modules provide tamper-resistant key storage.

Biometric authentication is replacing traditional passwords as the primary security measure. Fingerprint scanning, facial recognition, and voice authentication provide stronger security while improving user experience. Advanced systems use liveness detection to prevent spoofing attacks, ensuring that biometric data comes from a live person.

Behavioral analytics add an additional layer of security by learning normal user patterns. AI algorithms analyze typical transaction amounts, locations, times, and device usage. When unusual behavior is detected—such as a large transfer from an unfamiliar location—the system can trigger additional verification or temporarily block the transaction.

Zero-knowledge proofs are enabling new approaches to privacy in fintech. This cryptographic technique allows users to prove they have certain information (like being over 18 or having sufficient funds) without revealing the actual data. This balances regulatory requirements with user privacy in ways previously impossible.

Distributed ledger technology (blockchain) offers inherent security advantages for certain fintech applications. The immutable nature of blockchain transactions creates audit trails that are transparent yet secure. Smart contracts automate complex financial agreements while reducing the risk of fraud or human error.

API security is critical as fintech platforms increasingly connect with other services through open banking frameworks. Robust authentication protocols like OAuth 2.0, rate limiting to prevent denial-of-service attacks, and comprehensive logging of all API interactions help secure these connections between different financial systems.

Regulatory compliance is both a security requirement and a competitive advantage. Fintech platforms must navigate complex regulations like GDPR, PSD2, and various anti-money laundering (AML) requirements globally. Automated compliance monitoring systems use AI to detect potential violations and generate required reports.

Security awareness extends beyond technology to organizational culture. Regular employee training, simulated phishing attacks, and clear security policies help create human firewalls. Bug bounty programs incentivize ethical hackers to identify vulnerabilities before malicious actors can exploit them.

The future of fintech security lies in adaptive, intelligent systems that can respond to emerging threats in real time. As AI becomes more sophisticated, security systems will predict attacks before they happen, automatically adjust defenses based on threat intelligence, and provide seamless security that doesn't interfere with user experience.`
    },
    {
      id: 6,
      title: "IT Service Management: Modern Approaches for Digital Enterprises",
      excerpt: "Implementing efficient IT service delivery with automation, AI, and user-centric design principles.",
      date: "22 Mar, 2025",
      author: "Kamlesh Shah",
      category: "IT Solutions",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      delay: "540ms",
      content: `Modern IT Service Management (ITSM) has evolved far beyond traditional help desks and ticketing systems. In today's digital enterprises, ITSM is a strategic function that enables business agility, enhances employee productivity, and drives digital transformation through intelligent service delivery.

AI-powered service desks are revolutionizing how employees access IT support. Natural language processing enables conversational interfaces where users can describe their issues in plain language. Machine learning algorithms then route requests to the appropriate team, suggest solutions based on historical data, or even resolve common issues automatically through chatbots.

Proactive service management shifts IT from reactive problem-solving to anticipating and preventing issues. AI algorithms analyze system performance data, user behavior patterns, and historical incident records to identify potential problems before they impact users. Automated remediation scripts can fix many issues without human intervention, while advance notifications prepare users for planned maintenance.

Knowledge-centered service (KCS) creates a living knowledge base that grows smarter with each interaction. When IT staff resolve an issue, the solution is captured and refined in the knowledge base. This creates a virtuous cycle where common problems are increasingly resolved through self-service, freeing IT staff for more complex challenges.

Employee experience management is becoming central to ITSM strategy. Rather than just measuring technical metrics like resolution time, modern ITSM tracks employee satisfaction, productivity impact, and sentiment. This human-centered approach ensures that IT services actually enhance rather than hinder work.

Service integration and management (SIAM) coordinates multiple service providers in complex IT ecosystems. As organizations work with cloud providers, SaaS vendors, and specialized IT service companies, SIAM frameworks ensure seamless service delivery across this multi-vendor landscape with consistent quality and clear accountability.

IT asset management has evolved into comprehensive digital asset management. Beyond tracking hardware and software licenses, modern systems monitor cloud resource consumption, SaaS subscription usage, and even the carbon footprint of digital assets. This holistic view enables optimization across financial, operational, and environmental dimensions.

Automation is transforming IT service delivery at every level. Robotic process automation (RPA) handles repetitive tasks like user provisioning, software deployment, and report generation. More advanced cognitive automation uses AI to handle complex processes that previously required human judgment, such as evaluating security exception requests or optimizing cloud resource allocation.

The future of ITSM lies in predictive, personalized service experiences. As AI systems learn individual work patterns and preferences, IT services will adapt proactively—anticipating software needs before projects begin, adjusting access permissions based on changing roles, and even suggesting productivity tools tailored to specific work styles. This creates an IT environment that feels less like a service provider and more like an intelligent partner in achieving business objectives.`
    }
  ];

  const subTitle = "News";
  const mainTitle = "Our Latest News & Blog";

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
    // eslint-disable-next-line react-hooks/immutability
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <>
      <section id="blog" className="py-[30px] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1488px]">
          {/* Title Section */}
          <div className="flex flex-wrap justify-between items-end -mx-3">
            {/* Left Column - Title */}
            <div className="w-full lg:w-6/12 px-3">
              <div className="mb-[42px] relative z-10 -mt-4">
                {/* Sub Title */}
                <span
                  className="inline-block text-[16px] font-medium uppercase tracking-wider text-blue-600 mb-7 relative pb-1 animate-slideInLeft"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    animationDelay: '0ms',
                  }}
                >
                  {renderAnimatedText(subTitle)}
                </span>

                {/* Main Title */}
               <h2
  className="
    text-[36px] 
    sm:text-[64px] 
    font-bold 
    leading-tight 
    text-gray-900 
    mb-5 
    -mt-7 
    animate-slideInLeft
  "
  style={{
    fontFamily: '"Space Grotesk", sans-serif',
    animationDelay: '0ms',
  }}
>
  {renderAnimatedText(mainTitle)}
</h2>

              </div>
            </div>

            {/* Right Column - Button */}
           
          </div>

          {/* Blog Posts Grid */}
          <div className="flex flex-wrap -mx-3 -mt-15">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className={`w-full lg:w-1/2 xl:w-1/3 px-3 mt-10 animate-slideInUp`}
                style={{
                  animationDelay: post.delay,
                }}
              >
                <div className="group h-full flex flex-col">
                  {/* Image */}
                  <div className="rounded-[30px] overflow-hidden mb-6 flex-shrink-0">
                    <button 
                      onClick={() => openModal(post)}
                      className="block w-full text-left"
                    >
                      <img
                        alt={post.title}
                        src={post.image}
                        className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      {/* Date */}
                      <span className="inline-flex items-center text-gray-600 text-sm">
<FaRegCalendarAlt className="mr-2 text-blue-600" />
                        {post.date}
                      </span>

                      {/* Author */}
                      <span className="inline-flex items-center text-gray-600 text-sm">
<FaRegUser className="mr-2 text-blue-600" />
                        {post.author}
                      </span>

                      {/* Read Time */}
                      <span className="inline-flex items-center text-gray-600 text-sm">
<FaRegClock className="mr-2 text-blue-600" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-3 flex-1">
                      <button
                        onClick={() => openModal(post)}
                        className="text-[24px] font-bold text-gray-900 leading-[1.42] relative inline-block hover:text-blue-600 transition-colors duration-300 text-left w-full"
                        style={{
                          fontFamily: '"Space Grotesk", sans-serif',
                        }}
                      >
                        {post.title}
                      </button>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Read More Button */}
                    <button
                      onClick={() => openModal(post)}
                      className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-300 mt-auto w-fit"
                    >
                      Read More
                      <i className="fas fa-long-arrow-right ml-2 text-sm relative transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={closeModal}
          />
          
          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-6 top-6 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white transition-colors shadow-lg"
              >
<FaTimes className="text-xl" />
              </button>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Hero Image */}
                <div className="relative h-64 md:h-80 lg:h-96">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
<FaRegCalendarAlt className="mr-2 text-blue-600" />
                      {selectedPost.date}
                    </div>
                    <div className="flex items-center text-gray-600">
<FaRegUser className="mr-2 text-blue-600" />
                      {selectedPost.author}
                    </div>
                    <div className="flex items-center text-gray-600">
<FaRegClock className="mr-2 text-blue-600" />
                      {selectedPost.readTime}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 rounded-full">
                      {selectedPost.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {selectedPost.title}
                  </h1>

                  {/* Excerpt */}
                  <p className="text-lg text-gray-700 mb-8 font-medium">
                    {selectedPost.excerpt}
                  </p>

                  {/* Full Content */}
                  <div className="prose prose-lg max-w-none mb-8">
                    {selectedPost.content?.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t">
                    <button
                      onClick={closeModal}
                      className="px-6 py-3 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                    >
                      Close
                    </button>
                    {/* <a
                      href={`/blog/${selectedPost.id}`}
                      className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Read Full Article
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Styles */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.9s ease forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.9s ease forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.9s ease forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
        }

        /* Line clamp utility */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Modal animations */
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-content {
          animation: modalFadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default BlogSection;