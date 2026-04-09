import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '📤',
      title: 'Upload Resume',
      description: 'Upload your resume in PDF or DOC format. Our AI instantly parses and analyzes it.',
    },
    {
      icon: '📋',
      title: 'Paste Job Description',
      description: 'Paste any job description. We\'ll extract key requirements and responsibilities.',
    },
    {
      icon: '⚡',
      title: 'Instant Scoring',
      description: 'Get match percentage, skill gap analysis, and personalized recommendations instantly.',
    },
    {
      icon: '🎤',
      title: 'Interview Prep',
      description: 'Generate technical and behavioral interview questions based on the job role.',
    },
    {
      icon: '✏️',
      title: 'Resume Customization',
      description: 'Auto-tailor your resume for the specific job. Download optimized version instantly.',
    },
    {
      icon: '📈',
      title: 'Skill Analytics',
      description: 'See which skills match, which are missing, and what to learn next.',
    },
  ];

  const steps = [
    { number: 1, title: 'Upload Resume', desc: 'Choose your resume file' },
    { number: 2, title: 'Paste JD', desc: 'Add the job description' },
    { number: 3, title: 'Analyze', desc: 'Get instant insights' },
    { number: 4, title: 'Optimize', desc: 'Download custom resume' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ==================== NAVBAR ==================== */}
      <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-3xl">📄</span>
            <span className="text-2xl font-bold text-gray-900">JobFit</span>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2.5 rounded-lg font-medium border border-gray-300 text-gray-900 hover:bg-gray-50 transition-all duration-300"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-2.5 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Resume, Perfectly Optimized
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Get AI-powered resume scoring, skill gap analysis, and interview questions 
              tailored to any job description. In minutes, not hours.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-3.5 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 w-fit text-base"
              >
                Start Free Now
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex justify-center">
            <div className="w-80 h-80 bg-linear-to-br from-blue-50 to-teal-50 rounded-3xl border border-gray-200 flex flex-col justify-center items-center gap-8 shadow-lg">
              <div className="text-8xl">📊</div>
              <div className="space-y-3 w-32">
                <div className="h-1 bg-blue-600 rounded-full"></div>
                <div className="h-1 bg-blue-600 rounded-full"></div>
                <div className="h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Powerful Features
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-5xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS SECTION ==================== */}
      <section className="py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            How It Works
          </h2>

          {/* Steps */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 lg:gap-6">
                {/* Step Card */}
                <div className="bg-gray-50 border-2 border-gray-300 rounded-2xl p-6 w-48 text-center hover:border-blue-600 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow (visible only on desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block text-2xl text-gray-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Optimize Your Resume?
          </h2>
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-3.5 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            Get Started - It's Free
          </button>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-600">
            &copy; 2026 JobFit. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#privacy"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;