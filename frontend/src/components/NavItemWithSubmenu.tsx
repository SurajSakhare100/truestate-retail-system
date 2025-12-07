import { ChevronDown } from "lucide-react";

const NavItemWithSubmenu = ({
  icon: Icon,
  label,
  children,
  isOpen,
  onToggle
}: any) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-3">
      <button
        onClick={onToggle}
        className="flex items-center w-full text-gray-700 gap-3"
      >
        <Icon className="w-5 h-5 text-gray-600" />
        <span>{label}</span>
        <ChevronDown
          className={`ml-auto w-4 h-4 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-3 ml-7 space-y-2">{children}</div>
      )}
    </div>
  );
};

export default NavItemWithSubmenu;
