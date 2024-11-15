import React, { useEffect, useRef, useState } from 'react';
import { adcm, f, pS } from '../../../public/functions';

const IbisanzwePage = () => {
  
  const [formData, setFormData] = useState({
    
    exampleData: [
      {
        date: '2024-11-12',
        utanzeRaporo: 'PABLOSCH',
        ingano: '10',
        ubwokoBwamafu: { NF: true, IF: false, IS: true, MG: false },
        buranda: '300KG',
        icyongeweho: 'ibyatunganyijwe byose byagenze neza',
        yavuyemo: '350KG'
      }
    ],

    newFood: {
      nf25: { ibiro: '', imifuka: '' },
      nf10: { ibiro: '', imifuka: '' },
      nf5: { ibiro: '', imifuka: '' }
    },
    envelope: {
      ibiroStore: { ibiro: '', imifuka: '' },
      imifukaStore: { ibiro: '', imifuka: '' }
    },
    rimafu: {
      row1: { nf: '', if: '', is: '1000', mg: '100' },
    }
  }),[records,setRecords] = useState([]),
  [totalsn,setTotalsn] = useState(
    {
      added: 0,
      initamount: 0,
      mtotal : 0
    }
  ), hasFetched = useRef(false)

  useEffect(()=>{
    if (!hasFetched.current) {
      const fetchRecs = async ()=>{
        let schema = pS
        schema.body = JSON.stringify({date: {}})
        let recs = await f('packaging-report',pS)
        setRecords(recs.metadata.report)
        setTotalsn(
          recs.metadata.mainTotals
        )
      }
      fetchRecs()
      hasFetched.current = true
    }
  },[])
  const getSelectedAmafu = (amafu) => {
    const selected = [];
    if (amafu.NF) selected.push('NF');
    if (amafu.IF) selected.push('IF');
    if (amafu.IS) selected.push('IS');
    if (amafu.MG) selected.push('MG');
    return selected.join(', ');
  };

  const calculateTotals = () => ({
    newFoodImifuka: 
      Number(formData.newFood.nf25.imifuka || 0) +
      Number(formData.newFood.nf10.imifuka || 0) +
      Number(formData.newFood.nf5.imifuka || 0),
    envelopeImifuka:
      Number(formData.envelope.ibiroStore.imifuka || 0) +
      Number(formData.envelope.imifukaStore.imifuka || 0),
    rimafuImifuka: 
      Number(formData.rimafu.row1.nf || 0) +
      Number(formData.rimafu.row1.if || 0) +
      Number(formData.rimafu.row1.is || 0) +
      Number(formData.rimafu.row1.mg || 0)
  });

  const totals = calculateTotals();

  return (
    <div className="w-full p-4 space-y-8">
      
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4 text-center">RAPORO ZIBYATUNGANYIJWE  </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border">
            <thead>
              <tr>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Date</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Utanze Raporo</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Ingano Y'ibyatunganyijwa</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Ubwoko bwamafu yatunganyijwe</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Buranda Yateganyaga kuvamo</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Buranda Yavuyemo</th>
                <th className="border bg-indigo-100 p-2 text-left text-indigo-500">Icyongeweho</th>
              </tr>
            </thead>
            <tbody>
              {
              records.map((element,index) => {

                let isNFAvai = Object.values(element.new_food).find(el=> el),
                isIFAvai = Object.values(element.ifunguro).find(el=> el),
                isISAvai = Object.values(element.isezerano).find(el=> el),
                isMAAvai = Object.values(element.magaju).find(el=> el),
                avai_f = []
                isNFAvai? avai_f.push('NF'): null
                isIFAvai? avai_f.push('IF'): null
                isISAvai? avai_f.push('IS'): null
                isMAAvai? avai_f.push('MA'): null
               return (
                <tr key={index}>
                    <td className="border p-2">{element.date}</td>
                    <td className="border p-2">{element.reporter}</td>
                    <td className="border p-2">{adcm(element.incoming_c)} KG</td>
                    <td className="border p-2">{avai_f.toString()}</td>
                    <td className="border p-2">{adcm(element.waste_e)} KG</td>
                    <td className="border p-2">{adcm(element.waste_f)} KG</td>
                    <td className="border p-2">{element.comment}</td>
                </tr>)
              })
            }
              <tr>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold text-indigo-800 mb-4 text-center ">RAPORO ZIBIRO NIMIFUKA KURI BURI IFU YAKOZWE</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border">
            <thead>
              <tr>
                <th colSpan="2" className="border bg-gray-100 p-2 text-left text-indigo-500">NEW FOOD</th>
                <th colSpan="2" className="border bg-gray-100 p-2 text-left text-indigo-500">ISEZERANO</th>
                <th colSpan="2" className="border bg-gray-100 p-2 text-left text-indigo-500">IFUNGURO RYIZA</th>
                <th colSpan="2" className="border bg-gray-100 p-2 text-left text-indigo-500">MAGAJU</th>
                <th colSpan="2" className="border bg-gray-100 p-2 text-left text-indigo-500">INGANO Y'ENVELOPE</th>
                <th colSpan="4" className="border bg-gray-100 p-2 text-left text-indigo-500">IFU YATEGANYWAGA KUVAMO</th>
              </tr>
              <tr className="bg-gray-50">
                <th className="border p-2 text-indigo-500" >IBIRO</th>
                <th className="border p-2 text-indigo-500">IMIFUKA</th>
                <th className="border p-2 text-indigo-500">IBIRO</th>
                <th className="border p-2 text-indigo-500">IMIFUKA</th>
                <th className="border p-2 text-indigo-500">IBIRO</th>
                <th className="border p-2 text-indigo-500">IMIFUKA</th>
                <th className="border p-2 text-indigo-500">IBIRO</th>
                <th className="border p-2 text-indigo-500">IMIFUKA</th>
                <th className="border p-2 text-indigo-500">IBIRO</th>
                <th className="border p-2 text-indigo-500">ENVELOPE</th>
                <th className="border p-2 text-indigo-500">NF</th>
                <th className="border p-2 text-indigo-500">IF</th>
                <th className="border p-2 text-indigo-500">IS</th>
                <th className="border p-2 text-indigo-500">MG</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">{formData.newFood.nf25.ibiro}</td>
                <td className="border p-2">{formData.newFood.nf25.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf25.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf25.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf25.ibiro}</td>
                <td className="border p-2">{formData.newFood.nf25.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf25.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf25.imifuka}</td>
                <td className="border p-2" rowSpan="3">{formData.envelope.ibiroStore.ibiro}</td>
                <td className="border p-2" rowSpan="3">{formData.envelope.ibiroStore.imifuka}</td>
                 
                <td className="border p-2">{formData.rimafu.row1.nf}</td>
                <td className="border p-2">{formData.rimafu.row1.if}</td>
                <td className="border p-2">{formData.rimafu.row1.is}</td>
                <td className="border p-2">{formData.rimafu.row1.mg}</td>
              </tr>
              <tr>
                <td className="border p-2">{formData.newFood.nf10.ibiro}</td>
                <td className="border p-2">{formData.newFood.nf10.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf10.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf10.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf10.ibiro}</td>
                <td className="border p-2">{formData.newFood.nf10.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf10.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf10.imifuka}</td>
              </tr>
              <tr>
                <td className="border p-2">{formData.newFood.nf5.ibiro}</td>
                <td className="border p-2">{formData.newFood.nf5.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf5.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf5.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf5.ibiro}</td>
                <td className="border p-2">{formData.newFood.nf5.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf5.imifuka}</td>
                <td className="border p-2">{formData.newFood.nf5.imifuka}</td>
              </tr>
              <tr className="font-bold bg-gray-50">
                <td className="border p-2"></td>
                <td className="border p-2">{totals.newFoodImifuka}</td>
                <td className="border p-2"></td>
                <td className="border p-2">{totals.newFoodImifuka}</td>
                <td className="border p-2"></td>
                <td className="border p-2">{totals.newFoodImifuka}</td>
                <td className="border p-2"></td>
                <td className="border p-2">{totals.newFoodImifuka}</td>
                <td className="border p-2"></td>
                <td className="border p-2">{totals.envelopeImifuka}</td>
                <td className="border p-2">TOTAL</td>
                <td className="border p-2" colSpan="4">{totals.rimafuImifuka}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IbisanzwePage;