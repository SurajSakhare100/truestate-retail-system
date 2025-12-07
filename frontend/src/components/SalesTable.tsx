import { Copy } from "lucide-react";

interface Transaction {
  transactionId: string;
  date: string;
  customerId: string;
  customerName: string;
  phoneNumber: string;
  gender: string;
  age: number;
  productCategory: string;
  quantity: number;
}

interface SalesTableProps {
  transactions: Transaction[];
}

const SalesTable = ({ transactions }: SalesTableProps) => {
  return (
    <div className="bg-white  border border-gray-200">
      <div className="overflow-x-auto overflow-y-auto max-h-[600px]">
        <table className="min-w-max w-full">
          <TableHeader />
          <TableBody transactions={transactions} />
        </table>
      </div>
    </div>
  );
};

const TableHeader = () => {
  const headers = [
    "Transaction ID",
    "Date",
    "Customer ID",
    "Customer name",
    "Phone Number",
    "Gender",
    "Age",
    "Product Category",
    "Quantity",
  ];

  return (
    <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-20">
      <tr>
        {headers.map((header, idx) => (
          <th
            key={idx}
            className="px-5 py-3 text-left text-[13px] font-medium text-gray-700 tracking-wide"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <tbody className="divide-y divide-gray-200">
      {transactions.map((row, idx) => (
        <TableRow key={idx} row={row} />
      ))}
    </tbody>
  );
};

const TableRow = ({ row }: { row: Transaction }) => {
  return (
    <tr className="hover:bg-gray-50 text-sm">
      <td className="px-5 py-4 text-gray-900">{row.transactionId}</td>
      <td className="px-5 py-4 text-gray-700">{formatDate(row.date)}</td>
      <td className="px-5 py-4 text-gray-700">{row.customerId}</td>
      <td className="px-5 py-4 font-medium text-gray-900">{row.customerName}</td>

      <td className="px-5 py-4 text-gray-700">
        <PhoneCell phone={row.phoneNumber} />
      </td>

      <td className="px-5 py-4 text-gray-700">{row.gender}</td>
      <td className="px-5 py-4 text-gray-700">{row.age}</td>
      <td className="px-5 py-4 text-gray-700">{row.productCategory}</td>

      <td className="px-5 py-4 text-gray-900 font-semibold tabular-nums">
        {row.quantity.toString().padStart(2, "0")}
      </td>
    </tr>
  );
};

const PhoneCell = ({ phone }: { phone: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-700">{phone}</span>
      <Copy className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
    </div>
  );
};

const formatDate = (str: string) => {
  const d = new Date(str);
  return d.toISOString().split("T")[0];
};

export default SalesTable;
