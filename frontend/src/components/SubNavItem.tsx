import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

const SubNavItem = ({ icon: Icon, label, active }: Props) => {
  return (
    <div
      className={`flex items-center gap-3 ${
        active ? "font-semibold text-gray-900" : "text-gray-600"
      }`}
    >
      <Icon className="w-4 h-4 text-gray-500" />
      {label}
    </div>
  );
};

export default SubNavItem;
