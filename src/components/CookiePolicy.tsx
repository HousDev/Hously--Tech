import { Cookie, ArrowLeft } from 'lucide-react';

import logo from "../assets/images/hously-logo.png";

export default function TermsOfService() {
  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Logo */}
      <button
        onClick={handleBack}
        className="fixed top-6 left-6 z-40 hover:scale-105 transition-transform duration-300"
      >
        <img
          src={logo}
          alt="Hously Logo"
          className="h-16 w-auto object-contain drop-shadow-2xl"
        />
      </button>

      <div className="container mx-auto px-8 py-20">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </button>


        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
              <p className="text-slate-400">Last updated: December 8, 2024</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. HOUSLY FINNTECH REALTY uses cookies to enhance your browsing experience and analyze how our website is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="leading-relaxed mb-4">
                We use cookies for several purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To enable certain functions and features of our website</li>
                <li>To remember your preferences and settings</li>
                <li>To authenticate users and prevent fraudulent use</li>
                <li>To analyze how visitors use our website and track website performance</li>
                <li>To deliver relevant content and advertisements</li>
                <li>To understand the effectiveness of our marketing campaigns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Essential Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and user authentication. The website cannot function properly without these cookies.
                  </p>
                  <div className="mt-3 p-4 bg-slate-700/50 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Session cookies, security cookies, load balancing cookies</p>
                    <p className="text-sm mt-2"><strong>Duration:</strong> Session or up to 24 hours</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Analytics and Performance Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's functionality and user experience.
                  </p>
                  <div className="mt-3 p-4 bg-slate-700/50 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Google Analytics, website analytics tools</p>
                    <p className="text-sm mt-2"><strong>Duration:</strong> Up to 2 years</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Functionality Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.
                  </p>
                  <div className="mt-3 p-4 bg-slate-700/50 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Language preferences, region settings, customization options</p>
                    <p className="text-sm mt-2"><strong>Duration:</strong> Up to 1 year</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Targeting and Advertising Cookies</h3>
                  <p className="leading-relaxed">
                    These cookies are used to deliver advertisements more relevant to you and your interests. They also help limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                  </p>
                  <div className="mt-3 p-4 bg-slate-700/50 rounded-lg">
                    <p className="text-sm"><strong>Examples:</strong> Advertising network cookies, social media cookies</p>
                    <p className="text-sm mt-2"><strong>Duration:</strong> Up to 2 years</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality. Third-party services we may use include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Social Media Platforms:</strong> To enable social sharing and track engagement</li>
                <li><strong>Advertising Networks:</strong> To deliver targeted advertisements</li>
                <li><strong>Customer Support Tools:</strong> To provide chat and support functionality</li>
              </ul>
              <p className="leading-relaxed mt-4">
                These third parties have their own privacy policies, and we have no control over their cookies. We recommend reviewing their privacy policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences in several ways:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Browser Controls</h3>
                  <p className="leading-relaxed mb-2">
                    Most web browsers allow you to control cookies through their settings. You can set your browser to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Block all cookies</li>
                    <li>Block third-party cookies only</li>
                    <li>Delete cookies when you close your browser</li>
                    <li>Notify you before cookies are stored</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Browser-Specific Instructions</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Opt-Out Tools</h3>
                  <p className="leading-relaxed text-sm">
                    You can also use industry opt-out tools to manage advertising cookies:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Network Advertising Initiative (NAI): <span className="text-blue-400">optout.networkadvertising.org</span></li>
                    <li>Digital Advertising Alliance (DAA): <span className="text-blue-400">optout.aboutads.info</span></li>
                    <li>European Interactive Digital Advertising Alliance (EDAA): <span className="text-blue-400">youronlinechoices.eu</span></li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-900/20 border border-amber-600/30 rounded-lg">
                <p className="text-amber-200 text-sm">
                  <strong>Important:</strong> If you choose to block or delete cookies, some parts of our website may not function properly, and your user experience may be affected.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Do Not Track Signals</h2>
              <p className="leading-relaxed">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to have your online activity tracked. Currently, there is no uniform standard for how DNT signals should be interpreted. We do not currently respond to DNT signals, but we are committed to providing you with choices about the collection and use of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Mobile Device Identifiers</h2>
              <p className="leading-relaxed">
                When you access our services through a mobile device, we may collect device identifiers and other information about your device. You can reset your device's advertising identifier or limit ad tracking in your device settings:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>iOS:</strong> Settings &gt; Privacy &gt; Advertising &gt; Limit Ad Tracking</li>
                <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads Personalization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Cookie Retention</h2>
              <p className="leading-relaxed">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We regularly review our cookie retention periods to ensure they are necessary and appropriate for the purposes for which they were set.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will post any changes on this page and update the "Last updated" date. We encourage you to review this policy periodically to stay informed about how we use cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">More Information</h2>
              <p className="leading-relaxed mb-4">
                For more information about our use of cookies and how we protect your privacy, please review our Privacy Policy. If you have specific questions about cookies, please contact us:
              </p>
              <div className="space-y-2 ml-4">
                <p>Email: privacy@houslyfinntech.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Business Avenue, Suite 100, New York, NY 10001</p>
              </div>
            </section>

            <section className="border-t border-slate-700 pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">Your Consent</h2>
              <p className="leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to our use of cookies, please adjust your browser settings or discontinue use of our website.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
