import React, { useState, useEffect, useRef } from 'react';
import { f, pS } from '../../../public/functions';

const IbyagurishijwePage = () => {
  const [marketData, setMarketData] = useState([]),
  [records,setRecords] = useState([])
  const [productData, setProductData] = useState({
    'NEW FOOD': [
      { ibiro: 1111, imifuka: 0, igiciro: 0 },
      { ibiro: 2, imifuka: 0, igiciro: 0 },
      { ibiro: 3, imifuka: 0, igiciro: 0 }
    ],
    'IFUNGURO': [
      { ibiro: 0, imifuka: 0, igiciro: 0 },
      { ibiro: 0, imifuka: 0, igiciro: 0 },
      { ibiro: 0, imifuka: 0, igiciro: 0 }
    ],
    'ISEZERANO': [
      { ibiro: 0, imifuka: 0, igiciro: 0 },
      { ibiro: 0, imifuka: 0, igiciro: 0 },
      { ibiro: 0, imifuka: 0, igiciro: 0 }
    ],
    'MAGAJU': [
      { ibiro: 0, imifuka: 0, igiciro: 0 },
      { ibiro: 0, imifuka: 0, igiciro: 0 },
      { ibiro: 0, imifuka: 0, igiciro: 0 }
    ],
    'IS ENVELOPE/5KG': [
      { ibiro: 0, envelope: 0, igiciro: 0 }
    ],
  }),hasFetched = useRef(false)

  // useEffect(() => {
  //   const fetchData = () => {
  //     setMarketData([
  //       { date: '2023-05-01', reporter: 'John Doe', visitor: 'Jane Smith', trader: 'ABC Corp', marketFees: 5000, remainingFees: 1000, bagNumber: 'B001', additions: 'None' },
  //     ]);
  //   };

  //   fetchData();
  // }, []);
  useEffect(()=>{
    if (!hasFetched.current) {
      const fetchRecs = async ()=>{
        let schema = pS
        schema.body = JSON.stringify({date: {}})
        let recs = await f('sales-report',pS)
        setRecords(recs.metadata.report)
        setTotals(
          recs.metadata.mainTotals
        )
      }
      fetchRecs()
      hasFetched.current = true
    }
  },[])

  const calculateTotal = (data) => {
    const { imifuka, igiciro } = data;
    return (imifuka * igiciro).toFixed(2);
  };

  return (
    <div className="w-full p-4 space-y-8">
      {/* Market Data Table */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4 text-center">Amakuru Yibyagiye Kw'isoko</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border">
            <thead>
              <tr>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Date</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Utanze Raporo</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Ugemuye Kw'isoko</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Umukiriya</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Amafaranga Arava Kw'isoko</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Amafaranga Asigaye</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Nimero Y'umufuka</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Icyongerwaho</th>
              </tr>
            </thead>
            <tbody>
              {records.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.date}</td>
                  <td className="border p-2">{item.reporter}</td>
                  <td className="border p-2">{item.distributor}</td>
                  <td className="border p-2">{item.client}</td>
                  <td className="border p-2">{item.g_amount}</td>
                  <td className="border p-2">{item.r_amount}</td>
                  <td className="border p-2">{item.sack_no}</td>
                  <td className="border p-2">{item.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border">
          <thead>
            <tr>
              <th colSpan="4" className="border bg-gray-100 p-2 text-left text-indigo-500">NEW FOOD</th>
              <th colSpan="4" className="border bg-gray-100 p-2 text-left text-indigo-500">IFUNGURO</th>
              <th colSpan="4" className="border bg-gray-100 p-2 text-left text-indigo-500">ISEZERANO</th>
              <th colSpan="4" className="border bg-gray-100 p-2 text-left text-indigo-500">MAGAJU</th>
              <th colSpan="4" className="border bg-gray-100 p-2 text-left text-indigo-500">IS ENVELOPE/5KG</th>
            </tr>
            <tr className="bg-gray-50">
              {['NEW FOOD', 'IFUNGURO', 'ISEZERANO', 'MAGAJU'].map(product => (
                <React.Fragment key={product}>
                  <th className="border p-2">ibiro</th>
                  <th className="border p-2">imifuka</th>
                  <th className="border p-2">Igiciro</th>
                  <th className="border p-2">total</th>
                </React.Fragment>
              ))}
              <th className="border p-2">ibiro</th>
              <th className="border p-2">envelope</th>
              <th className="border p-2">Igiciro</th>
              <th className="border p-2">total</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2].map((rowIndex) => (
              <tr key={rowIndex}>
                {Object.entries(productData).map(([product, data]) => {
                  if (product === 'IS ENVELOPE/5KG' && rowIndex > 0) {
                    return null;
                  }

                  const currentRow = data[rowIndex] || data[0];

                  return (
                    <React.Fragment key={`${product}-${rowIndex}`}>
                      <td className="border p-2">
                        <input
                          value={currentRow.ibiro}
                          className="w-full bg-gray-50"
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          value={product === 'IS ENVELOPE/5KG' ? currentRow.envelope : currentRow.imifuka}
                          className="w-full bg-gray-50"
                        />
                      </td>
                      <td className="border p-2">
                        <input

                          value={currentRow.igiciro}
                          className="w-full bg-gray-50"
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          value={calculateTotal(currentRow)}
                          className="w-full bg-gray-50"
                        />
                      </td>
                    </React.Fragment>
                  );
                })}
              </tr>
            ))}
            {/* Total Row with Labels */}
            <tr className="bg-gray-200 font-bold">
              {Object.entries(productData).map(([product, data]) => {
                const totalOfTotals = data.reduce((sum, row) => sum + (row.imifuka || row.envelope || 0) * row.igiciro, 0);

                return (
                  <td key={`${product}-total`} colSpan="4" className="border p-2">
                    <div className="flex justify-between items-center">
                      <span className="text-indigo-600">Total:</span>
                      <span>{totalOfTotals.toFixed(2)}</span>
                    </div>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IbyagurishijwePage;