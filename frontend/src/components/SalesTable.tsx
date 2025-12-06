export default function SalesTable({ data }:any) {
  return (
    <table className="w-full border rounded-xl overflow-hidden bg-white shadow">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Transaction ID</th>
          <th className="p-2 border">Date</th>
          <th className="p-2 border">Customer</th>
          <th className="p-2 border">Phone</th>
          <th className="p-2 border">Gender</th>
          <th className="p-2 border">Age</th>
          <th className="p-2 border">Product</th>
          <th className="p-2 border">Qty</th>
        </tr>
      </thead>

      <tbody>
        {data.map((row:any) => (
          <tr key={row.transactionId}>
            <td className="p-2 border">{row.transactionId}</td>
            <td className="p-2 border">{row.date}</td>
            <td className="p-2 border">{row.customerName}</td>
            <td className="p-2 border">{row.phone}</td>
            <td className="p-2 border">{row.gender}</td>
            <td className="p-2 border">{row.age}</td>
            <td className="p-2 border">{row.productCategory}</td>
            <td className="p-2 border">{row.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
