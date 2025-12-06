export default function SummaryCards({ meta }:any) {
  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      <div className="p-4 border rounded-xl bg-white shadow"> 
        <p>Total units sold</p>
        <h2 className="text-xl font-bold">{meta.totalUnits}</h2>
      </div>

      <div className="p-4 border rounded-xl bg-white shadow"> 
        <p>Total Amount</p>
        <h2 className="text-xl font-bold">₹{meta.totalAmount}</h2>
      </div>

      <div className="p-4 border rounded-xl bg-white shadow"> 
        <p>Total Discount</p>
        <h2 className="text-xl font-bold">₹{meta.totalDiscount}</h2>
      </div>
    </div>
  );
}
