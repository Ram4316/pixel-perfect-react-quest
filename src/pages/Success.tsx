import { useNavigate } from "react-router-dom";
import { GradientButton } from "@/components/ui/gradient-button";
import MobileFrame from "@/components/MobileFrame";
import { CheckCircle } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="flex flex-col h-full items-center justify-center px-8 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 mb-8 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">
          Success!
        </h1>
        
        <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-xs">
          Your account has been successfully created. Welcome to PopX!
        </p>

        {/* Action Buttons */}
        <div className="w-full space-y-4">
          <GradientButton
            className="w-full"
            onClick={() => navigate('/')}
          >
            Get Started
          </GradientButton>
          
          <GradientButton
            variant="ghost"
            className="w-full"
            onClick={() => navigate('/')}
          >
            Back to Home
          </GradientButton>
        </div>
      </div>
    </MobileFrame>
  );
};

export default Success;