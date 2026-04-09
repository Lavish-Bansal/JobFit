import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { user, loading, handleLogin } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user && !loading) {
      navigate("/home", { replace: true });
    }
  }, [user, loading, navigate]);

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Redirecting to interview...</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (!formData.email || !formData.password) {
        setError("Please fill in all fields");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email address");
        return;
      }

      await handleLogin({ email: formData.email, password: formData.password });
      navigate("/home");
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    }
  };

  if (loading) {
    return (
      <main>
        <h1>Loading.......</h1>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-full mb-4 shadow-md">
              <span className="text-3xl">📄</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">JobFit</h1>
            <p className="text-gray-600 text-base">
              Sign in to optimize your resume
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-start gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <p className="font-semibold text-sm">Login Failed</p>
                <p className="text-xs mt-1 text-red-600">{error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <span className="text-lg">✉️</span>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <span className="text-lg">🔒</span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 border-2 border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg"
                  disabled={loading}
                  tabIndex="-1"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer w-full py-3 rounded-lg font-semibold transition-all duration-300 mt-6 ${
                loading
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block animate-spin">⏳</span>
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Sign In <span>→</span>
                </span>
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-gray-700 text-sm">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 cursor-pointer"
              >
                Create one
              </button>
            </p>
          </div>

          {/* Terms Footer */}
          <div className="mt-6 pt-6 border-t-2 border-gray-200 text-center">
            <p className="text-xs text-gray-600">
              By signing in, you agree to our{" "}
              <a
                href="#terms"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#privacy"
                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 bg-gray-50 border-2 border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-colors duration-200">
          <p className="text-xs text-gray-700 font-semibold mb-2">
            📝 Demo Account (Testing)
          </p>
          <div className="bg-white rounded-lg p-3 space-y-1 border border-gray-200">
            <p className="text-xs text-gray-700">
              <span className="text-blue-600 font-mono font-semibold">
                Email:
              </span>{" "}
              test@example.com
            </p>
            <p className="text-xs text-gray-700">
              <span className="text-blue-600 font-mono font-semibold">
                Password:
              </span>{" "}
              test123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
