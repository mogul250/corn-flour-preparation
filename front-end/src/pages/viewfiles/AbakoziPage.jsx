// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const initialFormData = {
  exampleData: [
    {
      
      names: "MUVUNYI Bruce",
      phone: "0791785898",
      jobTitle: "CEO",
      salary: "750,000Frw",
      saving: "550,000Frw",
      social:"married",
      salaryAdvance:"850,000Frw",
      remainSalary:"350,000Frw",

    },
  ],
};

 function AbakoziPage() {
  const [formData] = useState(initialFormData);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
        IMISHAHARA YABAKOZI
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Names
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                 Phone
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                 Job Title
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Salary
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Saving
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Social
                </th>
                 <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Salary Advance
                </th>
                 <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Remain Salary
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.exampleData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3 text-sm text-gray-600">
                    {item.names}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.phone}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.jobTitle}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.salary}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.saving}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.social}
                  </td>
                   <td className="border p-3 text-sm text-gray-600">
                    {item.salaryAdvance}
                  </td>
                   <td className="border p-3 text-sm text-gray-600">
                    {item.remainSalary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export  default AbakoziPage;

