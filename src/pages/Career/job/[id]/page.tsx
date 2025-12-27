import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "../index";
import { MapPin, Briefcase, Calendar, DollarSign, ArrowLeft, CheckCircle } from "lucide-react";

export default function JobDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const job = id ? getJobById(id) : null;

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job not found</h1>
          <button 
            onClick={() => navigate("/career/job")}
            className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    navigate(`/career/job/${id}/apply`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <button
          onClick={() => navigate("/career/job")}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Jobs
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        {/* Job Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{job.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{job.company}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {job.type.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleApply}
              className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-4 md:mt-0"
            >
              Apply Now
            </button>
          </div>

          {/* Job Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Job Type</p>
                <p className="font-semibold">{job.type[0]}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{job.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Salary</p>
                <p className="font-semibold">{job.salary}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Posted</p>
                <p className="font-semibold">{job.posted}</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Company */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Hously Finntech Realty</h2>
              <p className="text-gray-700 leading-relaxed">{job.aboutCompany}</p>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h2>
              <ul className="space-y-4">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    </div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Benefits & Apply Card */}
          <div className="space-y-8">
            {/* Benefits */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Gain</h2>
              <ul className="space-y-4">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply Card */}
            <div className="bg-gradient-to-br from-[#0270e1] to-[#024a9e] rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
              <p className="mb-6 opacity-90">
                Don't miss this opportunity. We are excited to review your application!
              </p>
              <button
                onClick={handleApply}
                className="w-full bg-white text-[#0270e1] py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </button>
              <p className="text-sm opacity-80 mt-4 text-center">
                Applications are reviewed on a rolling basis
              </p>
            </div>

            {/* Job Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Job Type:</span>
                  <span className="font-semibold">{job.type[0]}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-semibold">{job.location}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">Salary:</span>
                  <span className="font-semibold">{job.salary}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Posted:</span>
                  <span className="font-semibold">{job.posted}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}