import { Info } from "lucide-react";

export default function SummaryCards({ meta }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-3 bg-white">
      <div className="bg-white rounded-lg border p-3 shadow-sm">
        <div className="flex items-center gap-1 text-[15px] text-gray-600">
          Total units sold <Info className="w-4 h-4 text-gray-400" />
        </div>

        <h3 className="text-[18px] font-semibold mt-1">
          {meta?.totalUnits ?? 0}
        </h3>
      </div>

      <div className="bg-white rounded-lg border p-3 shadow-sm">
        <div className="flex items-center gap-1 text-[15px] text-gray-600">
          Total Amount <Info className="w-4 h-4 text-gray-400" />
        </div>

        <h3 className="text-[18px] font-semibold mt-1">
          ₹{meta?.totalAmount ?? 0}
          <span className="text-gray-500 text-sm ml-1">
            ({meta?.salesCount ?? 0} SRs)
          </span>
        </h3>
      </div>

      <div className="bg-white rounded-lg border p-3 shadow-sm">
        <div className="flex items-center gap-1 text-[15px] text-gray-600">
          Total Discount <Info className="w-4 h-4 text-gray-400" />
        </div>

        <h3 className="text-[18px] font-semibold mt-1">
          ₹{meta?.totalDiscount ?? 0}
          <span className="text-gray-500 text-sm ml-1">
            ({meta?.discountCount ?? 0} SRs)
          </span>
        </h3>
      </div>

    </div>
  );
}
