import React from 'react';
import { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  };

  const handleSelect = (e) => {
    const {id, selectedOptions} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: selectedOptions[0].value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E6F2FF] flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-[#FF6B00] mb-6">
          Application Form
        </h1>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#0077BE] mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Full Name: *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Age: *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="streetAddress"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Street Address: *
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Email: *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Phone Number: *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="nationalId"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  National ID: *
                </label>
                <input
                  type="text"
                  id="nationalId"
                  name="nationalId"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Position Information Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#0077BE] mb-4">
              Position Information
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="positionAppliedFor"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Position Applied For: *
                </label>
                <input
                  type="text"
                  id="positionAppliedFor"
                  name="positionAppliedFor"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="nationality"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Nationality: *
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Employment History Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#0077BE] mb-4">
              Employment History
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="previousEmployment"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Have you ever worked for this company? *
                </label>
                <select
                  id="previousEmployment"
                  name="previousEmployment"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleSelect}
                  required
                >
                  <option value="**">select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="felonyConviction"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Have you ever been convicted of a felony? *
                </label>
                <select
                  id="felonyConviction"
                  name="felonyConviction"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleSelect}
                  required
                >
                  <option value="**">select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="rotationalShifts"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Are you flexible with rotational & overnight shifts? *
                </label>
                <select
                  id="rotationalShifts"
                  name="rotationalShifts"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleSelect}
                  required
                >
                  <option value="**">select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#0077BE] mb-4">
              Education
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="college"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  College: *
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="graduationStatus"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Did you graduate? *
                </label>
                <select
                  id="graduationStatus"
                  name="graduationStatus"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleSelect}
                  required
                >
                  <option value="**">select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          {/* Previous Employment Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#0077BE] mb-4">
              Previous Employment
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="companyName"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Company Name:
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="jobTitle"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Job Title:
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="responsibilities"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Responsibilities:
                </label>
                <textarea
                  id="responsibilities"
                  name="responsibilities"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="employmentDuration"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  How long did you work there?
                </label>
                <input
                  type="text"
                  id="employmentDuration"
                  name="employmentDuration"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="reasonForLeaving"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Reason for Leaving:
                </label>
                <textarea
                  id="reasonForLeaving"
                  name="reasonForLeaving"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Military Service Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#0077BE] mb-4">
              Military Service
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="militaryService"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Military Service:
                </label>
                <select
                  id="militaryService"
                  name="militaryService"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleSelect}
                >
                  <option value="**">select an option</option>
                  <option value="completed">Completed</option>
                  <option value="exempted">Exempted</option>
                  <option value="postponed">Postponed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Personal Recommendation Section */}
          <div>
            <h2 className="text-xl font-semibold text-[#0077BE] mb-4">
              Personal Recommendation
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label
                  htmlFor="personalRecommendation"
                  className="block font-medium text-[#0077BE] mb-2"
                >
                  Personal Recommendation:
                </label>
                <textarea
                  id="personalRecommendation"
                  name="personalRecommendation"
                  className="w-full border-2 border-[#0077BE]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0077BE]"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B00] text-white py-3 rounded-lg hover:bg-[#E55B00] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
