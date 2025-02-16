import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "BharatBaithak",
  description: "A Video Calling App",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    
        <div className="w-full">{children}</div>
  );
};

export default AuthLayout;
