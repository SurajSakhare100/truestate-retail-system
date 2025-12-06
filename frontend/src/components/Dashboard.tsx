// Dashboard.jsx
import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState<null | number>(null);

  const menuItems = [
    { name: 'Dashboard' },
    { name: 'Nexus' },
    { name: 'Intake' },
    {
      name: 'Services',
      sub: ['Pre-active', 'Active', 'Blocked', 'Closed']
    },
    {
      name: 'Invoices',
      sub: ['Proforma Invoices', 'Final Invoices']
    },
  ];

  const data = Array(10).fill({
    id: '1234567',
    date: '2023-09-26',
    customerId: 'CUST12016',
    name: 'Neha Yadav',
    phone: '+91 9123456789',
    gender: 'Female',
    age: 25,
    category: 'Clothing',
    quantity: 1,
  });

  return (
    <div className="flex h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 font-bold text-lg border-b">Vault</div>
        <ul className="mt-4">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <div
                className="p-3 cursor-pointer flex justify-between items-center hover:bg-gray-100"
                onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}
              >
                {item.name}
                {item.sub && (activeMenu === idx ? <FiChevronUp /> : <FiChevronDown />)}
              </div>
              {item.sub && activeMenu === idx && (
                <ul className="pl-4 bg-gray-50">
                  {item.sub.map((subItem, subIdx) => (
                    <li key={subIdx} className="p-2 hover:bg-gray-100">{subItem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Name, Phone no."
            className="border rounded p-2 w-1/3"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-4">
          {['Customer Region', 'Gender', 'Age Range', 'Product Category', 'Tags', 'Payment Method', 'Date'].map((f, i) => (
            <button key={i} className="border rounded px-3 py-1 bg-white shadow-sm">{f}</button>
          ))}
        </div>

        {/* Summary Cards */}
        <div className="flex gap-4 mb-4">
          <div className="bg-white shadow p-4 rounded w-1/4 text-center">
            <p className="text-gray-500">Total Units Sold</p>
            <p className="text-xl font-bold">10</p>
          </div>
          <div className="bg-white shadow p-4 rounded w-1/4 text-center">
            <p className="text-gray-500">Total Amount</p>
            <p className="text-xl font-bold">₹89,000</p>
          </div>
          <div className="bg-white shadow p-4 rounded w-1/4 text-center">
            <p className="text-gray-500">Total Discount</p>
            <p className="text-xl font-bold">₹15,000</p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow rounded overflow-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Transaction ID','Date','Customer ID','Customer Name','Phone','Gender','Age','Product Category','Quantity'].map((col, i) => (
                  <th key={i} className="px-4 py-2 text-left text-sm font-medium text-gray-500">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-2">{row.id}</td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2">{row.customerId}</td>
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.phone}</td>
                  <td className="px-4 py-2">{row.gender}</td>
                  <td className="px-4 py-2">{row.age}</td>
                  <td className="px-4 py-2">{row.category}</td>
                  <td className="px-4 py-2">{row.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 gap-2">
          {[1,2,3,4,5,6].map((p) => (
            <button key={p} className="px-3 py-1 border rounded">{p}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

