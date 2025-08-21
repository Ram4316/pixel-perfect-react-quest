import { useNavigate } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import MobileFrame from "@/components/MobileFrame";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full">
        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          {/* Logo/Icon placeholder */}
          <div className="w-24 h-24 mb-12 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">
            Welcome to PopX
          </h1>
          
          <p className="text-muted-foreground text-base leading-relaxed mb-16 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Buttons */}
        <div className="px-8 pb-12 space-y-4">
          <GradientButton
            className="w-full"
            onClick={() => navigate('/create-account')}
          >
            Create Account
          </GradientButton>
          
          <GradientButton
            variant="secondary"
            className="w-full"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </GradientButton>
        </div>
      </div>
    </MobileFrame>
  );
};

export default Welcome;