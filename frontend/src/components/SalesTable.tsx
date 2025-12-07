import { Copy } from "lucide-react";

interface Transaction {
  transactionId: string;
  date: string;
  customerId: string;
  customerName: string;
  phoneNumber: string;
  gender: string;
  age: number;
  customerRegion: string;
  customerType: string;
  productId: string;
  productName: string;
  brand: string;
  productCategory: string;
  tags: string[];
  quantity: number;
  pricePerUnit: number;
  discountPercentage: number;
  totalAmount: number;
  finalAmount: number;
  paymentMethod: string;
  orderStatus: string;
  deliveryType: string;
  storeId: string;
  storeLocation: string;
  salespersonId: string;
  employeeName: string;
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
  "Customer Name",
  "Phone Number",
  "Gender",
  "Age",
  "Region",
  "Customer Type",
  "Product ID",
  "Product Name",
  "Brand",
  "Category",
  "Tags",
  "Quantity",
  "Price Per Unit",
  "Discount %",
  "Total Amount",
  "Final Amount",
  "Payment Method",
  "Order Status",
  "Delivery Type",
  "Store ID",
  "Store Location",
  "Salesperson ID",
  "Employee Name",
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
  const rowData = [
    row.transactionId,
    formatDate(row.date),
    row.customerId,
    row.customerName,
    row.phoneNumber,
    row.gender,
    row.age,
    row.customerRegion,
    row.customerType,
    row.productId,
    row.productName,
    row.brand,
    row.productCategory,
    row.tags?.join(", "),
    row.quantity,
    row.pricePerUnit,
    row.discountPercentage,
    row.totalAmount,
    row.finalAmount,
    row.paymentMethod,
    row.orderStatus,
    row.deliveryType,
    row.storeId,
    row.storeLocation,
    row.salespersonId,
    row.employeeName
  ];

  return (
    <tr className="hover:bg-gray-50 text-sm">
      {rowData.map((item, idx) => (
        <td key={idx} className="px-5 py-3 text-gray-700 whitespace-nowrap">
          {item ?? "-"}
        </td>
      ))}
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
