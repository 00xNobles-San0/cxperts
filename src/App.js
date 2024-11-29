import React, { useState } from 'react';
import { ArrowRight, Laptop, Globe } from 'lucide-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import EnglishTest from './EnglishTest';
import ApplicationForm from './ApplicationForm';
import logo from './image.png';

const App = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-[#F5F5F5] to-[#E6F2FF] flex flex-col items-center justify-center p-4">
        {/* Logo Section */}
        <div className="mb-8 text-center">
          <img
            src={logo}
            alt="CXperts Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-[#FF6B00]">CXperts</h1>
          <p className="text-[#0077BE] text-lg">Discover Your Potential</p>
        </div>

        {/* Cards Section */}
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center transform transition-all duration-500 hover:scale-[1.02]">
          <div className="space-y-6">
            {/* Application Test Card */}
            <div
              className={`bg-white border-2 rounded-lg p-6 transition-all duration-300 transform ${
                hoveredCard === 'app'
                  ? 'scale-105 shadow-xl border-[#0077BE]'
                  : 'border-[#0077BE]/30 hover:border-[#0077BE]'
              } hover:bg-[#0077BE]/5`}
              onMouseEnter={() => setHoveredCard('app')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-center mb-4">
                <Laptop className="text-[#0077BE] mr-3" size={40} />
                <h2 className="text-xl font-semibold text-[#0077BE]">
                  Application Form
                </h2>
              </div>
              <Link to="/application-form">
                <button className="w-full bg-[#0077BE] text-white py-3 rounded-lg flex items-center justify-center hover:bg-[#005A8D] transition-colors group">
                  Start Application
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
              </Link>
            </div>

            {/* English Test Card */}
            <div
              className={`bg-white border-2 rounded-lg p-6 transition-all duration-300 transform ${
                hoveredCard === 'english'
                  ? 'scale-105 shadow-xl border-[#FF6B00]'
                  : 'border-[#FF6B00]/30 hover:border-[#FF6B00]'
              } hover:bg-[#FF6B00]/5`}
              onMouseEnter={() => setHoveredCard('english')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-center mb-4">
                <Globe className="text-[#FF6B00] mr-3" size={40} />
                <h2 className="text-xl font-semibold text-[#FF6B00]">
                  English Assessment
                </h2>
              </div>
              <Link to="/english-test">
                <button className="w-full bg-[#FF6B00] text-white py-3 rounded-lg flex items-center justify-center hover:bg-[#E55B00] transition-colors group">
                  Start Assessment
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-sm text-gray-500">
          © 2024 CXperts. Your Journey Starts Here.
        </footer>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/english-test" element={<EnglishTest />} />
        <Route path="*" element={<Navigate to="/application-form" />} />
      </Routes>
    </Router>
  );
};

export default App;
