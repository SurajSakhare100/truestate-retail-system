"use client";

import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SideNav";

const Sidebar = () => {
  const [servicesOpen, setServicesOpen] = useState(true);
  const [invoicesOpen, setInvoicesOpen] = useState(true);

  return (
    <div className="w-64 bg-[#F5F5F6] h-screen p-4">
      <SidebarHeader />

      <SidebarNav
        servicesOpen={servicesOpen}
        setServicesOpen={setServicesOpen}
        invoicesOpen={invoicesOpen}
        setInvoicesOpen={setInvoicesOpen}
      />
    </div>
  );
};

export default Sidebar;
