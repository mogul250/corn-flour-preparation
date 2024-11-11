/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Ibigiyegutunganywa = () => {
  const [additionalInfo, setAdditionalInfo] = useState('THIS COMMENTS FOR REPORT');
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
       
        <h2 className="text-xl mt-2 text-center">RAPORO Y'IBIGORI BIGIYE GUTUNGANYWA</h2>
      </div>


      <div className="overflow-x-auto mb-8">
        <table className="min-w-full border-collapse border border-indigo-500">
          <thead className="bg-indigo-100">
            <tr>
              <th className="border border-indigo-500 px-4 py-2">Itariki</th>
              <th className="border border-indigo-500 px-4 py-2">UTANZE RAPORO</th>
              <th className="border border-indigo-500 px-4 py-2">INGANO YIBIGIYE GUKOBORWA</th>
              <th className="border border-indigo-500 px-4 py-2">INGANO YIMYANDA YAVUYEMO</th>
              <th className="border border-indigo-500 px-4 py-2">IBIGORI BIGIYE GUKOBORWA</th>
              <th className="border border-indigo-500 px-4 py-2">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td className="border border-indigo-500 px-4 py-2">11/11/2024</td>
              <td className="border border-indigo-500 px-4 py-2">PABLOSCH</td>
              <td className="border border-indigo-500 px-4 py-2">400KG</td>
              <td className="border border-indigo-500 px-4 py-2">15KG</td>
              <td className="border border-indigo-500 px-4 py-2">350KG</td>
              <td className="border border-indigo-500 px-4 py-2">byakozwe neza</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
            <td className="border border-indigo-500 px-4 py-2">10/11/2024</td>
              <td className="border border-indigo-500 px-4 py-2">NyamaNSWA</td>
              <td className="border border-indigo-500 px-4 py-2">800KG</td>
              <td className="border border-indigo-500 px-4 py-2">25kg</td>
              <td className="border border-indigo-500 px-4 py-2">750KG</td>
            </tr>
          </tbody>
        </table>
      </div>
    

    </div>
  );
};

export default Ibigiyegutunganywa;
