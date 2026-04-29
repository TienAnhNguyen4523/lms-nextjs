import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fe5933]/10 via-white to-[#fe5933]/5 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#fe5933]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#fe5933]/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 w-full max-w-[450px] p-6">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 md:p-10">
          <div className="flex justify-center mb-8">
             <div className="bg-[#fe5933] p-3 rounded-2xl shadow-lg shadow-[#fe5933]/20">
                <svg width="32" height="32" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0ZM23 41.4C12.839 41.4 4.6 33.161 4.6 23C4.6 12.839 12.839 4.6 23 4.6C33.161 4.6 41.4 12.839 41.4 23C41.4 33.161 33.161 41.4 23 41.4Z" fill="white"/>
                    <path d="M23 9.2C15.387 9.2 9.2 15.387 9.2 23C9.2 30.613 15.387 36.8 23 36.8C30.613 36.8 36.8 30.613 36.8 23C36.8 15.387 30.613 9.2 23 9.2Z" fill="white"/>
                </svg>
             </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
