import React, { useState, useMemo } from 'react'

const initialFormData = {
  exampleData: [
    {
      date: '2024-11-12',
      utanzeRaporo: 'PABLOSCH',
      icyongeweho: 'ibyatunganyijwe byose byagenze neza',
    },
  ],
  newFood: {
    nf25: { ibiro: '25', imifuka: '2' },
    nf10: { ibiro: '30', imifuka: '3' },
    nf5: { ibiro: '20', imifuka: '4' }
  },
  isezerano: {
    is25: { ibiro: '25', imifuka: '1' },
    is10: { ibiro: '15', imifuka: '3' },
    is5: { ibiro: '20', imifuka: '4' }
  },
  ifunguro: {
    if25: { ibiro: '55', imifuka: '2' },
    if10: { ibiro: '35', imifuka: '3' },
    if5: { ibiro: '22', imifuka: '4' }
  },
  magaju: {
    mg25: { ibiro: '50', imifuka: '2' },
    mg10: { ibiro: '40', imifuka: '4' },
    mg5: { ibiro: '30', imifuka: '6' }
  },
  envelope: {
    ibiro: '150',
    imifuka: '15'
  },
}

const calculateTotals = (data) => ({
  newFoodTotal: Object.values(data.newFood).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  isezeranoTotal: Object.values(data.isezerano).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  ifunguroTotal: Object.values(data.ifunguro).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  magajuTotal: Object.values(data.magaju).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  envelopeTotal: Number(data.envelope.ibiro)
})

const IbyagarutsePage= () => {
  const [formData, setFormData] = useState(initialFormData)
  const totals = useMemo(() => calculateTotals(formData), [formData])

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-4">
          RAPORO YIBYAGARUTSE
        </h2>
       
        
          <table className="min-w-full bg-white border border-indigo-200">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-indigo-200 p-2 text-left">Date</th>
                <th className="border border-indigo-200 p-2 text-left">Utanze Raporo</th>
                <th className="border border-indigo-200 p-2 text-left">Icyongerwaho</th>
 
              </tr>
            </thead>
            <tbody>
              {formData.exampleData.map((item, index) => (
                <tr key={index} className="hover:bg-indigo-50">
                  <td className="border border-indigo-200 p-2">{item.date}</td>
                  <td className="border border-indigo-200 p-2">{item.utanzeRaporo}</td>
                  <td className="border border-indigo-200 p-2">{item.icyongeweho}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
      
          <table className="min-w-full bg-white border border-indigo-200">
            <thead>
              <tr className="bg-indigo-50">
                <th colSpan="2" className="border border-indigo-200 p-2 text-left">NEW FOOD</th>
                <th colSpan="2" className="border border-indigo-200 p-2 text-left">ISEZERANO</th>
                <th colSpan="2" className="border border-indigo-200 p-2 text-left">IFUNGURO</th>
                <th colSpan="2" className="border border-indigo-200 p-2 text-left">MAGAJU</th>
                <th colSpan="2" className="border border-indigo-200 p-2 text-left">ENVELOPE</th>
              </tr>
              <tr className="bg-indigo-50">
                <th className="border border-indigo-200 p-2">IBIRO</th>
                <th className="border border-indigo-200 p-2">IMIFUKA</th>
                <th className="border border-indigo-200 p-2">IBIRO</th>
                <th className="border border-indigo-200 p-2">IMIFUKA</th>
                <th className="border border-indigo-200 p-2">IBIRO</th>
                <th className="border border-indigo-200 p-2">IMIFUKA</th>
                <th className="border border-indigo-200 p-2">IBIRO</th>
                <th className="border border-indigo-200 p-2">IMIFUKA</th>
                <th className="border border-indigo-200 p-2">IBIRO</th>
                <th className="border border-indigo-200 p-2">IMIFUKA</th>
              </tr>
            </thead>
            <tbody>
              {['25', '10', '5'].map((weight) => (
                <tr key={weight} className="hover:bg-indigo-50">
                  <td className="border border-indigo-200 p-2">{formData.newFood[`nf${weight}`].ibiro}</td>
                  <td className="border border-indigo-200 p-2">{formData.newFood[`nf${weight}`].imifuka}</td>
                  <td className="border border-indigo-200 p-2">{formData.isezerano[`is${weight}`].ibiro}</td>
                  <td className="border border-indigo-200 p-2">{formData.isezerano[`is${weight}`].imifuka}</td>
                  <td className="border border-indigo-200 p-2">{formData.ifunguro[`if${weight}`].ibiro}</td>
                  <td className="border border-indigo-200 p-2">{formData.ifunguro[`if${weight}`].imifuka}</td>
                  <td className="border border-indigo-200 p-2">{formData.magaju[`mg${weight}`].ibiro}</td>
                  <td className="border border-indigo-200 p-2">{formData.magaju[`mg${weight}`].imifuka}</td>
                  {weight === '25' && (
                    <>
                      <td rowSpan="3" className="border border-indigo-200 p-2">{formData.envelope.ibiro}</td>
                      <td rowSpan="3" className="border border-indigo-200 p-2">{formData.envelope.imifuka}</td>
                    </>
                  )}
                </tr>
              ))}
              <tr className="font-bold bg-indigo-50">
                <td className="border border-indigo-200 p-2">{totals.newFoodTotal}</td>
                <td className="border border-indigo-200 p-2">{Math.round(totals.newFoodTotal / 25)}</td>
                <td className="border border-indigo-200 p-2">{totals.isezeranoTotal}</td>
                <td className="border border-indigo-200 p-2">{Math.round(totals.isezeranoTotal / 25)}</td>
                <td className="border border-indigo-200 p-2">{totals.ifunguroTotal}</td>
                <td className="border border-indigo-200 p-2">{Math.round(totals.ifunguroTotal / 25)}</td>
                <td className="border border-indigo-200 p-2">{totals.magajuTotal}</td>
                <td className="border border-indigo-200 p-2">{Math.round(totals.magajuTotal / 25)}</td>
                <td className="border border-indigo-200 p-2">{totals.envelopeTotal}</td>
                <td className="border border-indigo-200 p-2">{formData.envelope.imifuka}</td>
              </tr>
            </tbody>
          </table>
          </div>
      </div>
    
  )
}

export default IbyagarutsePage;