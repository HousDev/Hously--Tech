import { FileText, ArrowLeft } from "lucide-react";
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
              <p className="text-slate-400">Last updated: December 8, 2024</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and HOUSLY FINNTECH REALTY ("Company," "we," "us," or "our") concerning your access to and use of our website, services, and platforms across real estate, financial technology, and IT sectors. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Services Overview</h2>
              <p className="leading-relaxed mb-4">
                HOUSLY FINNTECH REALTY provides integrated solutions across three primary sectors:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Real Estate:</strong> Property development, sales, leasing, and management services for residential and commercial properties</li>
                <li><strong>Financial Technology:</strong> Investment advisory, financial planning, fintech solutions, and lending services</li>
                <li><strong>IT & Technology:</strong> Software development, IT consulting, digital transformation, and technology solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Eligibility</h2>
              <p className="leading-relaxed">
                You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms. If you are accessing our services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
              <p className="leading-relaxed mb-4">
                To access certain features of our services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent or illegal activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
              <p className="leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use our services for any illegal purpose or in violation of any laws</li>
                <li>Infringe upon the intellectual property rights of others</li>
                <li>Transmit any harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the operation of our services</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Collect or harvest information about other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>
              <p className="leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, images, software, and design, are owned by HOUSLY FINNTECH REALTY or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Real Estate Services</h2>
              <p className="leading-relaxed mb-4">
                Specific terms for real estate services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Property listings and information are subject to change without notice</li>
                <li>All property transactions are subject to separate purchase agreements</li>
                <li>Property availability and pricing are not guaranteed until contracts are executed</li>
                <li>We act as agents and facilitate transactions between buyers and sellers</li>
                <li>Commissions and fees will be disclosed prior to engagement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Financial Services</h2>
              <p className="leading-relaxed mb-4">
                Important disclosures for financial services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Investment advice and financial planning services require separate agreements</li>
                <li>Past performance does not guarantee future results</li>
                <li>All investments carry risk, including potential loss of principal</li>
                <li>We do not guarantee specific investment returns</li>
                <li>Financial services are subject to regulatory compliance and licensing requirements</li>
                <li>You should consult with qualified professionals before making financial decisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Technology Services</h2>
              <p className="leading-relaxed mb-4">
                Terms specific to IT and technology services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Software and technology solutions are provided under separate license agreements</li>
                <li>We provide services on an "as is" and "as available" basis</li>
                <li>We do not warrant that services will be uninterrupted or error-free</li>
                <li>Custom development projects require separate statements of work</li>
                <li>Intellectual property rights in custom work are defined in project agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <p className="leading-relaxed">
                Payment terms vary by service type and will be specified in your service agreement. Generally, you agree to pay all fees and charges associated with your use of our services. All payments are non-refundable unless otherwise specified. We reserve the right to modify our pricing with appropriate notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimers</h2>
              <p className="leading-relaxed mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property rights</li>
                <li>Accuracy, reliability, or completeness of content</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOUSLY FINNTECH REALTY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OUR SERVICES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify, defend, and hold harmless HOUSLY FINNTECH REALTY and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Dispute Resolution</h2>
              <p className="leading-relaxed">
                Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in New York, NY. You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use our services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
              <p className="leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 ml-4">
                <p>Email: legal@houslyfinntech.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Business Avenue, Suite 100, New York, NY 10001</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
