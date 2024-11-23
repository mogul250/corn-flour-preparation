// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const initialFormData = {
  firstTable: [
    {
      date: "2024-11-12",
      utanzeRaporo: "NYAMASWANTE",
      mazutu: "100",
      abakarani: "300",
      tandBoy: "400",
      shoferi: "300",
      shambre: "5000",
      
    },
  ],
  secondTable: [
    {
      kurya: "3000",
      urugendo: "7000",
      amafarangaAsabwa: "10000",
      amafarangaAverishije: "80000",
      amafarangaYose: "180000",
      icyongeweho: "Ibyatunganyijwe byose byagenze neza",
    },
  ],
};

function DepansePage () {
  const [formData] = useState(initialFormData);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          RAPORO YAMAFARANGA YASOHOTSE
        </h2>

        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3  text-left text-sm font-semibold text-gray-700">
                  ITARIKI
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  UTANZE RAPORO
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  MAZUTU
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  ABAKARANI
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  TAND BOY
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Shoferi
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Shambre
                </th>
                
              </tr>
            </thead>
            <tbody>
              {formData.firstTable.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border bg-gray-400 p-3 text-sm text-gray-600">{item.date}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.utanzeRaporo}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.mazutu}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.abakarani}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.tandBoy}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.shoferi}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.shambre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Kurya
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Urugendo
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Amafaranga Asabwa
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Amafaranga Averishije
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Amafaranga Yose
                </th>
                <th className="border p-3 text-left text-sm font-semibold text-gray-700">
                  Icyongeweho
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.secondTable.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border p-3 text-sm text-gray-600">{item.kurya}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.urugendo}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.amafarangaAsabwa}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.amafarangaAverishije}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.amafarangaYose}</td>
                  <td className="border p-3 text-sm text-gray-600">{item.icyongeweho}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DepansePage ;
