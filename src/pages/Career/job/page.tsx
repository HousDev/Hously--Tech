import { useState, useMemo, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { jobs } from "./index";
import { Search, MapPin } from "lucide-react";

export default function CareersPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const handleViewDetails = (jobId: string) => {
    navigate(`/career/job/${jobId}`);
  };

  const handleSearch = () => {
    // The search happens automatically through the filteredJobs useMemo
    console.log("Search triggered with:", { searchTerm, selectedLocation, selectedType });
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedLocation("all");
    setSelectedType("all");
  };

  // Filter jobs based on search criteria
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // Search term filter
      const matchesSearch = searchTerm === "" || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase());

      // Location filter
      const matchesLocation = selectedLocation === "all" || 
        (selectedLocation === "remote" && job.location.toLowerCase() === "remote") ||
        (selectedLocation === "hybrid" && job.location.toLowerCase() === "hybrid") ||
        (selectedLocation === "onsite" && job.location.toLowerCase() !== "remote" && job.location.toLowerCase() !== "hybrid");

      // Job type filter
      const matchesType = selectedType === "all" || 
        job.type.some(type => type.toLowerCase() === selectedType);

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchTerm, selectedLocation, selectedType]);

  // Get unique locations from jobs
  const locations = useMemo(() => {
    const uniqueLocations = new Set<string>();
    jobs.forEach(job => {
      uniqueLocations.add(job.location);
    });
    return Array.from(uniqueLocations);
  }, []);

  // Get unique job types from jobs
  const jobTypes = useMemo(() => {
    const types = new Set<string>();
    jobs.forEach(job => {
      job.type.forEach(type => {
        if (type.toLowerCase() !== "internship") {
          types.add(type.toLowerCase());
        }
      });
    });
    return Array.from(types);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg mb-10">
            Browse through our latest job openings and take the next step in your career journey.
          </p>

          {/* Search Section */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
              {/* Search Input */}
              <div className="md:col-span-5">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    placeholder="Job title, keywords, or company"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Location Filter */}
              <div className="md:col-span-3">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedLocation}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                  >
                    <option value="all">All Locations</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location.toLowerCase()}>
                        {location.charAt(0).toUpperCase() + location.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Job Type Filter */}
              <div className="md:col-span-2">
                <select
                  value={selectedType}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="all">All Types</option>
                  {jobTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="md:col-span-2 flex gap-2">
                <button
                  onClick={handleSearch}
                  className="flex-1 bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Search
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  title="Reset filters"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Search Stats */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div>
                Showing <span className="font-semibold">{filteredJobs.length}</span> of{" "}
                <span className="font-semibold">{jobs.length}</span> jobs
              </div>
              {(searchTerm || selectedLocation !== "all" || selectedType !== "all") && (
                <button
                  onClick={handleReset}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || selectedLocation !== "all" || selectedType !== "all") && (
            <div className="max-w-6xl mx-auto mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    &times;
                  </button>
                </span>
              )}
              {selectedLocation !== "all" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                  Location: {selectedLocation.charAt(0).toUpperCase() + selectedLocation.slice(1)}
                  <button
                    onClick={() => setSelectedLocation("all")}
                    className="ml-2 text-green-500 hover:text-green-700"
                  >
                    &times;
                  </button>
                </span>
              )}
              {selectedType !== "all" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm">
                  Type: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
                  <button
                    onClick={() => setSelectedType("all")}
                    className="ml-2 text-purple-500 hover:text-purple-700"
                  >
                    &times;
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Jobs Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">
            Latest Job Opportunities
          </h2>
          
          {/* Sort Options */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">Sort by:</span>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Job Title (A-Z)</option>
              <option>Job Title (Z-A)</option>
            </select>
          </div>
        </div>

        {/* No Results Message */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search filters or browse all available positions.
            </p>
            <button
              onClick={handleReset}
              className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View All Jobs
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-xl transition-all duration-300 p-6 flex flex-col group hover:border-blue-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                    New
                  </span>
                </div>

                <div className="flex gap-2 mb-4">
                  {job.type.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        tag.toLowerCase() === "internship"
                          ? "bg-green-100 text-green-700"
                          : tag.toLowerCase() === "remote"
                          ? "bg-blue-100 text-blue-700"
                          : tag.toLowerCase() === "hybrid"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm flex-grow mb-6 line-clamp-3">
                  {job.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{job.location}</span>
                    <span className="mx-2">•</span>
                    <span>Posted {job.posted}</span>
                  </div>
                  <button 
                    onClick={() => handleViewDetails(job.id)}
                    className="bg-gradient-to-r from-[#0270e1] to-[#024a9e] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity hover:shadow-md"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination (optional) */}
        {filteredJobs.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">1</button>
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                3
              </button>
              <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>

   
    </div>
  );
}