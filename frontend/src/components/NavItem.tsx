export const NavItem = ({ icon: IconComponent, label }: any) => {
  return (
    <div className="flex items-center gap-2 text-[#515162]">
      <IconComponent className="w-4 h-4" /> 
      <span>{label}</span>
    </div>
  );
};
