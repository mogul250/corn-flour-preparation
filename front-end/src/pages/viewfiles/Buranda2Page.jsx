// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const initialFormData = {
  exampleData: [
    {
      date: "2024-11-12",
      utanzeRaporo: "NYAMASWANTE",
      umukiliya:"PABLOSCH",
     ibiroYatwaye: "100",
      igiciro: "300",
      amafarangaYose: "400",
      amafarangaAsigaye: "3500",
      icyongeweho: "Ibyatunganyijwe byose byagenze neza",
    },
  ],
};

 function Buranda2Page() {
  const [formData] = useState(initialFormData);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          RAPORO YA BURANDA YASOHOTSE KUMUNSI
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  ITARIKI
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  UTANZE RAPORO
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  IZINA RY'UMUKIRIYA
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  IBIRO YATWAYE
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  IGICIRO
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  AMAFARANGA YOSE
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  AMAFARANGA ASIGAYE
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  ICYONGEWEHO
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.exampleData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border bg-gray-400 p-3 text-sm text-gray-600">
                    {item.date}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.utanzeRaporo}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.umukiliya}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.ibiroYatwaye}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.igiciro}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.amafarangaYose}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.amafarangaAsigaye}
                  </td>
                  <td className="border p-3 text-sm text-gray-600">
                    {item.icyongeweho}
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
export  default Buranda2Page;
