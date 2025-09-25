import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function RegisterLogin() {
  const [isRegister, setIsRegister] = useState(false);
  const [registerData, setRegisterData] = useState({
    Name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [phone, setPhone] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [loading] = useState(false);
  const navigate = useNavigate();

  // ---------- Password Utilities ----------
  const generatePassword = () => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const generated = Array.from({ length: 12 }, () =>
      charset[Math.floor(Math.random() * charset.length)]
    ).join("");
    setRegisterData({
      ...registerData,
      password: generated,
      confirmPassword: generated,
    });
  };
const getPasswordStrength = (
    password: string
  ): "Weak" | "Medium" | "Strong" => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;
    if (score <= 2) return "Weak";
    else if (score <= 4) return "Medium";
    else return "Strong";
  };

  const triggerError = (msg: string) => {
    setError(msg);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  // ---------- Handlers ----------
  const handleRegisterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    if (name === "phone") value = value.replace(/\D/g, "");
    setRegisterData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.password.length < 8) {
      triggerError("Password must be at least 8 characters long.");
      return;
    }
    alert("Registration Successful!");
    setRegisterData({
      Name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      triggerError("Email and Password are required!");
      return;
    }
    alert("Login Successful!");
    setLoginData({ email: "", password: "" });
    navigate("/mgdashboard");
  };
  // ---------- Social Logins ----------
  const handleGoogleLogin = () => {
    // Google login handler
  };
  const handleLinkedInLogin = () => {
    const clientId = "YOUR_LINKEDIN_CLIENT_ID";
    const redirectUri = "https://yourdomain.com/linkedin-callback";
    const scope = "r_liteprofile r_emailaddress";
    const state = "random_state_123";
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
    window.location.href = authUrl;
  };
  const handleGitHubLogin = () => {
    const clientId = "YOUR_GITHUB_CLIENT_ID";
    const redirectUri = "https://yourdomain.com/github-callback";
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;
    window.location.href = githubAuthUrl;
  };
   return (
     <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto">
        <img
          src="src/assets/AI New.jpg"
          alt="IFFAI Banner"
          className="w-full h-full object-cover object-top"
        />
      </div>
      

    {/* Right Side - Form */}
    <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 ">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="src/assets/IFFAI Logo.png"
            alt="Company Logo"
            className="h-16 sm:h-20"
          />
        </div>

        {/* Header */}
        <h1 className="text-xl font-bold text-center text-gray-800">
          {isRegister ? "Create Account" : "Login"}
        </h1>
        <p className="text-m text-center text-gray-500 mb-2">
          {isRegister
            ? "Join IFFAI – Your Gateway to AI Mastery!"
            : "Welcome back! Please login."}
        </p>

        {/* Error */}
        {showAlert && (
          <div className="bg-red-100 text-red-600 px-3 py-2 mb-3 rounded text-m text-center">
            {error}
          </div>
        )}

        {/* Toggle */}
        <div className="text-center mb-2">
          {isRegister ? (
            <p className="text-m text-gray-600">
              Already have an account?{" "}
              <span
                className="text-indigo-600 font-semibold cursor-pointer"
                onClick={() => setIsRegister(false)}
              >
                Login
              </span>
            </p>
          ) : (
            <p className="text-xs text-gray-600">
              Don’t have an account?{" "}
              <span
                className="text-indigo-600 font-semibold cursor-pointer"
                onClick={() => setIsRegister(true)}
              >
                Register
              </span>
            </p>
          )}
        </div>
        {/* Forms */}
        {!isRegister ? (
          // -------- Login Form --------
          <form onSubmit={handleLoginSubmit} className="space-y-3">
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              placeholder="Email"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Password"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md text-sm hover:bg-indigo-700 transition"
            >
              {loading ? "Processing..." : "Login"}
            </button>
            <p
              onClick={() => navigate("/register/forgotpassword")}
              className="text-xs text-indigo-600 cursor-pointer mt-1 text-center"
            >
              Forgot Password?
            </p>
          </form>
        ) : (
          // -------- Register Form --------
          <form onSubmit={handleRegisterSubmit} className="space-y-3">
            <input
              type="text"
              name="Name"
              value={registerData.Name}
              onChange={handleRegisterChange}
              placeholder="Full Name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              placeholder="Email"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
              required
            />

            {/* Phone */}
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: "100%" }}
              inputProps={{ required: true }}
            />
            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Password"
                className="w-full border rounded-md px-3 py-2 pr-20 text-sm focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-10 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
              <button
                type="button"
                onClick={generatePassword}
                className="absolute right-2 top-2.5 text-indigo-600 text-xs font-semibold"
              >
                Auto
              </button>
            </div>

            {/* Strength + Popup */}
            {registerData.password && (
              <p
                className={`text-xs ${
                  getPasswordStrength(registerData.password) === "Weak"
                    ? "text-red-500"
                    : getPasswordStrength(registerData.password) === "Medium"
                    ? "text-yellow-500"
                    : "text-green-600"
                }`}
              >
                Strength: {getPasswordStrength(registerData.password)}{" "}
                <span
                  className="underline cursor-pointer text-indigo-600"
                  onClick={() => setShowPasswordPopup(true)}
                >
                  Rules
                </span>
              </p>
            )}

            {/* Address */}
            <textarea
              name="address"
              value={registerData.address}
              onChange={handleRegisterChange}
              placeholder="Full Address"
              rows={2}
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
              required
            />

            {/* Terms */}
            <div className="space-y-2"> 
              <label className="flex items-center space-x-2 text-sm text-gray-700"> 
                <input type="checkbox" className="h-4 w-4" /> 
                <span> I would like to receive email updates from products, services, and events (Optional)</span> 
              </label> 
              <label className="flex items-center space-x-2 text-sm text-gray-700"> 
                <input type="checkbox" className="h-4 w-4" required /> 
                <span> I have read and agree to the{" "} <a href="/privacy" className="text-indigo-600 font-semibold hover:underline"> Privacy Policy </a> </span> 
              </label> 
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-2 rounded-md text-sm hover:bg-indigo-800 transition"
            >
              Register
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-400 text-xs">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social */}
            <div className="flex justify-center gap-6 text-2xl">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="text-red-500 hover:scale-110"
              >
                <FaGoogle />
              </button>
              <button
                type="button"
                onClick={handleLinkedInLogin}
                className="text-blue-600 hover:scale-110"
              >
                <FaLinkedin />
              </button>
              <button
                type="button"
                onClick={handleGitHubLogin}
                className="text-gray-800 hover:scale-110"
              >
                <FaGithub />
              </button>
            </div>
          </form>
        )}
        </div>
      </div>
       {/* ---------- Password Rules Popup ---------- */}
      {showPasswordPopup && (
        <div className="fixed inset-0 bg-black-800 bg-opacity-90 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-bold mb-2">Password Requirements</h2>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
              <li>One number</li>
              <li>One special character (!@#$%^&*)</li>
            </ul>
            <button
              onClick={() => setShowPasswordPopup(false)}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}