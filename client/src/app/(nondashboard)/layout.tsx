import Navbar from "@/components/Layout/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main className={`h-full flex w-full flex-col`}>{children}</main>
    </div>
  );
};

export default Layout;
