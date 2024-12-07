import React from 'react';
import { useState } from 'react';

const EnglishAssessment = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const {id, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  };

  const handleSelect = (e) => {
    const {name, selectedOptions} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOptions[0].value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch('http://localhost:5000/english-test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json()) // Parse the response body as JSON
    .then(data => {
      console.log(data); // Handle the data returned from the API
    })
    .catch(error => {
      console.error('Error:', error); // Handle any errors
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          English Assessment
        </h1>

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Name: *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block font-medium text-gray-700 mb-2"
                >
                  Phone Number: *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Grammar Questions Section */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Grammar Questions
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Which sentence is grammatically correct? *
                </label>
                <select
                  onChange={handleSelect}
                  name="grammaticalCorrectness"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="heDontKnow">He don’t know the answer.</option>
                  <option value="heDoesntKnow">
                    He doesn’t know the answer.
                  </option>
                  <option value="heDidntKnew">
                    He didn’t knew the answer.
                  </option>
                  <option value="heDontKnew">He don’t knew the answer.</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Choose the correct verb form: "By the time the meeting
                  started, they ___ the report." *
                </label>
                <select
                  onChange={handleSelect}
                  name="verbForm"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="complete">complete</option>
                  <option value="haveCompleted">have completed</option>
                  <option value="hadCompleted">had completed</option>
                  <option value="completing">completing</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Identify the error: "Neither of the options were suitable for
                  the customer." *
                </label>
                <select
                  onChange={handleSelect}
                  name="errorIdentification"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="incorrectUseOfWere">
                    Incorrect use of "were"
                  </option>
                  <option value="misuseOfNeither">Misuse of "neither"</option>
                  <option value="missingPunctuation">
                    Missing punctuation
                  </option>
                  <option value="noError">No error</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Which word best completes the sentence? "The customer’s
                  feedback was ___ and helped us improve our process." *
                </label>
                <select
                  onChange={handleSelect}
                  name="wordCompletion"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="irrelevant">irrelevant</option>
                  <option value="invaluable">invaluable</option>
                  <option value="insufficient">insufficient</option>
                  <option value="inconsiderate">inconsiderate</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Select the best synonym for "escalate": *
                </label>
                <select
                  onChange={handleSelect}
                  name="synonymForEscalate"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="diminish">Diminish</option>
                  <option value="intensify">Intensify</option>
                  <option value="resolve">Resolve</option>
                  <option value="simplify">Simplify</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  What does "meticulous" mean in this sentence? "The manager is
                  known for her meticulous attention to detail." *
                </label>
                <select
                  onChange={handleSelect}
                  name="meticulousMeaning"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="carefulAndPrecise">Careful and precise</option>
                  <option value="quickAndCareless">Quick and careless</option>
                  <option value="rigidAndInflexible">
                    Rigid and inflexible
                  </option>
                  <option value="disorganized">Disorganized</option>
                </select>
              </div>
            </div>
          </div>

          {/* Passage Reading Section */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Passage Reading Questions
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 mb-4">
                "In recent years, technological advancements have transformed
                industries across the globe. Automation and artificial
                intelligence are now integral to operations, increasing
                efficiency while raising concerns about job displacement.
                Experts suggest that while certain jobs may be eliminated, new
                opportunities will emerge, requiring reskilling and adaptation
                to stay competitive in the workforce."
              </p>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  What is one potential negative effect of automation mentioned
                  in the passage? *
                </label>
                <select
                  onChange={handleSelect}
                  name="negativeEffect"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="increasedEfficiency">
                    Increased efficiency
                  </option>
                  <option value="jobDisplacement">Job displacement</option>
                  <option value="creationOfNewOpportunities">
                    Creation of new opportunities
                  </option>
                  <option value="lackOfTechnologicalAdvancements">
                    Lack of technological advancements
                  </option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  What is the overall tone of the passage? *
                </label>
                <select
                  onChange={handleSelect}
                  name="toneOfPassage"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="optimistic">Optimistic</option>
                  <option value="neutral">Neutral</option>
                  <option value="pessimistic">Pessimistic</option>
                  <option value="indifferent">Indifferent</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  What is implied about the future workforce? *
                </label>
                <select
                  onChange={handleSelect}
                  name="futureWorkforce"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="automationReplacesJobs">
                    Automation will replace all jobs.
                  </option>
                  <option value="acquireNewSkills">
                    Workers will need to acquire new skills.
                  </option>
                  <option value="stopUsingTechnology">
                    Industries will stop using technology.
                  </option>
                  <option value="jobCompetitionDecreases">
                    Job competition will decrease.
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Vocabulary Section */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Vocabulary Questions
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Which of the following is NOT a synonym for "happy"? *
                </label>
                <select
                  onChange={handleSelect}
                  name="notSynonymForHappy"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="content">Content</option>
                  <option value="joyful">Joyful</option>
                  <option value="melancholy">Melancholy</option>
                  <option value="cheerful">Cheerful</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Which word is spelled correctly? *
                </label>
                <select
                  onChange={handleSelect}
                  name="spelling"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="definate">Definate</option>
                  <option value="separate">Separate</option>
                  <option value="neccessary">Neccessary</option>
                  <option value="recieve">Recieve</option>
                </select>
              </div>
            </div>
          </div>

          {/* Customer Interaction Section */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Customer Interaction Questions
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  What should you say if a customer speaks too quickly for you
                  to understand? *
                </label>
                <select
                  onChange={handleSelect}
                  name="customerSpeaksTooQuickly"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="pleaseSlowDown">
                    "Please slow down; I want to ensure I understand you
                    correctly."
                  </option>
                  <option value="whyFast">
                    "Why are you speaking so fast?"
                  </option>
                  <option value="iDontKnow">
                    "I don’t know what you’re saying."
                  </option>
                  <option value="slowDown">"Slow down!"</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  What does "escalating an issue" mean in a call center? *
                </label>
                <select
                  onChange={handleSelect}
                  name="escalatingIssue"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="**">select an answer</option>
                  <option value="transferringCall">
                    Transferring the call to a higher authority
                  </option>
                  <option value="ignoringComplaint">
                    Ignoring the customer’s complaint
                  </option>
                  <option value="askingToCallBack">
                    Asking the customer to call back later
                  </option>
                  <option value="resolvingIssue">
                    Resolving the issue immediately
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* Short Answer Section */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Short Answer Questions
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Write a sentence using the word "prioritize." *
                </label>
                <textarea
                  name="prioritizeSentence"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Describe in 3–5 sentences what you do when faced with a
                  challenging task and how you resolved it. *
                </label>
                <textarea
                  name="challengingTask"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Rewrite the following sentence in proper form: "Yesterday, I
                  has go to the market for buy some fruits." *
                </label>
                <textarea
                  name="rewriteSentence"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  Write a short paragraph (4–5 sentences) explaining why
                  teamwork is important in any workplace. *
                </label>
                <textarea
                  name="teamworkImportance"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  In 5–6 sentences, describe a time when you had to communicate
                  with someone whose first language was different from yours.
                  How did you ensure effective communication? *
                </label>
                <textarea
                  name="crossLanguageCommunication"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnglishAssessment;
