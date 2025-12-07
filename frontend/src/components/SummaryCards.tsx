import { Info } from "lucide-react";

export default function SummaryCards({ meta = {} }:any) {
  const {
    totalUnits = 0,
    totalAmount = 0,
    salesCount = 0,
    totalDiscount = 0,
    discountCount = 0
  } = meta;

  const card = (title: string, value: any, sub?: string) => (
    <div className="bg-white rounded-lg border py-3 px-6 shadow-sm min-w-[180px]">
      <div className="flex items-center gap-1 text-sm text-gray-600">
        {title}
        <Info className="w-4 h-4 text-gray-400" />
      </div>

      <h3 className="font-semibold mt-1 flex items-baseline gap-1 text-sm">
        {value}
        {sub && <span className="text-gray-500 ">{sub}</span>}
      </h3>
    </div>
  );

  return (
    <div className="flex gap-4 my-3 bg-white text-[#3A3A47] flex-wrap">
      {card("Total units sold", totalUnits)}
      {card("Total Amount", `₹${totalAmount}`, `(${salesCount} SRs)`)}
      {card("Total Discount", `₹${totalDiscount}`, `(${discountCount} SRs)`)}
    </div>
  );
}
