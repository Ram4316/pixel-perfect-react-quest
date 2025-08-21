import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MobileFrame from "@/components/MobileFrame";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <MobileFrame>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center px-6 py-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="flex-1 text-center text-lg font-semibold">Login</h2>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center px-8 py-8">
          <div className="w-20 h-20 mb-6 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Welcome Back!</h3>
          <p className="text-muted-foreground text-center">Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="flex-1 px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                className="h-12"
                required
              />
            </div>

            <button 
              type="button"
              className="text-primary text-sm font-medium hover:underline"
            >
              Forgot Password?
            </button>
          </form>
        </div>

        {/* Login Button */}
        <div className="px-8 pb-12 space-y-4">
          <GradientButton
            className="w-full"
            onClick={handleSubmit}
          >
            Login
          </GradientButton>
          
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <button 
              onClick={() => navigate('/create-account')}
              className="text-primary font-medium hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </MobileFrame>
  );
};

export default Login;