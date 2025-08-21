import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="phone-container">
        <div className="relative h-full w-full">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 text-sm text-foreground bg-phone-background z-10">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-foreground/30 rounded-sm">
                <div className="w-3 h-1 bg-foreground rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="pt-11 h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;