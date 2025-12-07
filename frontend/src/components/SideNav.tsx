import { NavItem } from "./NavItem";
import NavItemWithSubmenu from "./NavItemWithSubmenu";
import SubNavItem from "./SubNavItem";

import {
  LayoutGrid,
  Users,
  PlayCircle,
  ClipboardList,
  FileText,
  Receipt
} from "lucide-react";

const SidebarNav = ({
  servicesOpen,
  setServicesOpen,
  invoicesOpen,
  setInvoicesOpen
}: any) => {
  return (
    <nav className="space-y-4 text-sm text-[#515162]">

      <NavItem icon={LayoutGrid} label="Dashboard" />
      <NavItem icon={Users} label="Nexus" />
      <NavItem icon={PlayCircle} label="Intake" />

      <NavItemWithSubmenu
        icon={ClipboardList}
        label="Services"
        isOpen={servicesOpen}
        onToggle={() => setServicesOpen(!servicesOpen)}
      >
        <SubNavItem icon={PlayCircle} label="Pre-active" />
        <SubNavItem icon={FileText} label="Active" active />
        <SubNavItem icon={PlayCircle} label="Blocked" />
        <SubNavItem icon={PlayCircle} label="Closed" />
      </NavItemWithSubmenu>

      <NavItemWithSubmenu
        icon={Receipt}
        label="Invoices"
        isOpen={invoicesOpen}
        onToggle={() => setInvoicesOpen(!invoicesOpen)}
      >
        <SubNavItem icon={FileText} label="Proforma Invoices" active />
        <SubNavItem icon={FileText} label="Final Invoices" />
      </NavItemWithSubmenu>
    </nav>
  );
};

export default SidebarNav;
