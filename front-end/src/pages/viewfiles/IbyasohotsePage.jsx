import React, { useState, useMemo, useEffect, useRef } from 'react'
import { adcm, f, pS } from '../../../public/functions'

const initialFormData = {
  exampleData: [
    {
      date: '2024-11-12',
      utanzeRaporo: 'PABLOSCH',
      uwagemuye: 'NYAmaNSWA',
      umukiliya: 'MEDIAtrice',
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
  newFood: {
    nf25: { ibiro: '25', imifuka: '2',igiciro:'350',frw:'700' },
    nf10: { ibiro: '30', imifuka: '3',igiciro:'350',frw:'1050' },
    nf5: { ibiro: '20', imifuka: '4',igiciro:'350',frw:'1400' }
  },
  isezerano: {
    is25: { ibiro: '60', imifuka: '2',igiciro:'350',frw:'700' },
    is10: { ibiro: '40', imifuka: '4',igiciro:'350',frw:'1400' },
    is5: { ibiro: '25', imifuka: '5',igiciro:'350',frw:'1750' }
  },
  ifunguro: {
    if25: { ibiro: '55', imifuka: '2',igiciro:'350',frw:'700' },
    if10: { ibiro: '35', imifuka: '3',igiciro:'350',frw:'1050' },
    if5: { ibiro: '22', imifuka: '4',igiciro:'350',frw:'1400' }
  },
  magaju: {
    mg25: { ibiro: '45', imifuka: '1',igiciro:'350',frw:'350' },
    mg10: { ibiro: '30', imifuka: '3',igiciro:'350',frw:'1050' },
    mg5: { ibiro: '18', imifuka: '3',igiciro:'350',frw:'1050' }
  },
  envelope: {
    ibiro: '10',
    imifuka: '1',
    igiciro:'250',
    frw: '10'
  },
  
}

const calculateTotals = (data) => ({
  newFoodTotal: Object.values(data.newFood).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  isezeranoTotal: Object.values(data.isezerano).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  ifunguroTotal: Object.values(data.ifunguro).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  magajuTotal: Object.values(data.magaju).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  envelopeTotal: Number(data.envelope.ibiro)
})

const IbyasohotsePage = () => {
  const [formData, setFormData] = useState(initialFormData)
  const totals = useMemo(() => calculateTotals(formData), [formData]),
  [records,setRecords] = useState([]),
  hasFetched = useRef(false)
  useEffect(()=>{
    if (!hasFetched.current) {
      const fetchRecs = async ()=>{
        let schema = pS
        schema.body = JSON.stringify({date: {}})
        let recs = await f('sales-nr-report',pS)
        setRecords(recs.metadata.report)
        // setTotals(
        //   recs.metadata.mainTotals
        // )
      }
      fetchRecs()
      hasFetched.current = true
    }
  },[])

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-4">
          RAPORO YUWAGEMUYE IFU KWISOKO
        </h2>
       
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-indigo-200">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-indigo-200 p-2 text-left">Date</th>
                <th className="border border-indigo-200 p-2 text-left">Utanze Raporo</th>
                <th className="border border-indigo-200 p-2 text-left">Uwagemuye</th>
                <th className="border border-indigo-200 p-2 text-left">Umukiliya</th>
                <th className="border border-indigo-200 p-2 text-left">Icyongeweho</th>
                
              </tr>
            </thead>
              {records.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr className="hover:bg-indigo-50">
                      <td className="border border-indigo-200 p-2">{item.date}</td>
                      <td className="border border-indigo-200 p-2">{item.reporter}</td>
                      <td className="border border-indigo-200 p-2">{item.distributor}</td>
                      <td className="border border-indigo-200 p-2">{item.client}</td>
                      <td className="border border-indigo-200 p-2">{item.comment}</td>
                    </tr>
                    <tr>
                      <td colSpan={5}>
                          <div className="overflow-x-auto">
                            <h2 className="text-2xl font-bold text-center text-indigo-800 mb-4">
                              IBYO YATWAYE
                            </h2>
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
                                      <td className="border border-indigo-200 p-2">{weight}</td>
                                      <td className="border border-indigo-200 p-2">{item.p_delivered['NF'][weight]}</td>
                                      <td className="border border-indigo-200 p-2">{weight}</td>
                                      <td className="border border-indigo-200 p-2">{item.p_delivered['IS'][weight]}</td>
                                      <td className="border border-indigo-200 p-2">{weight}</td>
                                      <td className="border border-indigo-200 p-2">{item.p_delivered['IF'][weight]}</td>
                                      <td className="border border-indigo-200 p-2">{weight}</td>
                                      <td className="border border-indigo-200 p-2">{item.p_delivered['MA'][weight]}</td>
                                      {weight === '25' && (
                                        <>
                                          <td rowSpan="3" className="border border-indigo-200 p-2">{5}</td>
                                          <td rowSpan="3" className="border border-indigo-200 p-2">{item.p_delivered['envelope'][5]}</td>
                                        </>
                                      )}
                                    </tr>
                                  ))}
                                  <tr className="font-bold bg-indigo-50">
                                    <td className="border border-indigo-200 p-2">Total:</td>
                                    <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_delivered.NF).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                    <td className="border border-indigo-200 p-2">Total:</td>
                                    <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_delivered.IS).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                    <td className="border border-indigo-200 p-2">Total:</td>
                                    <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_delivered.IF).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                    <td className="border border-indigo-200 p-2">Total:</td>
                                    <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_delivered.MA).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                    <td className="border border-indigo-200 p-2">Total:</td>
                                    <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_delivered.envelope).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                  </tr>
                                </tbody>
                              </table>
                          </div>
                          <div className="overflow-x-auto">
                            <h2 className="text-2xl font-bold text-center text-indigo-800 mb-4">
                              IBYO YACURUJE
                            </h2>
                          <table className="min-w-full bg-white border border-indigo-200">
                          
                            <thead>
                              <tr className="bg-indigo-50">
                                <th colSpan="4" className="border border-indigo-200 p-2 text-center">NEW FOOD</th>
                                <th colSpan="4" className="border border-indigo-200 p-2 text-center">ISEZERANO</th>
                                <th colSpan="4" className="border border-indigo-200 p-2 text-center">IFUNGURO</th>
                                <th colSpan="4" className="border border-indigo-200 p-2 text-center">MAGAJU</th>
                                <th colSpan="4" className="border border-indigo-200 p-2 text-center">ENVELOPE</th>
                              </tr>
                              <tr className="bg-indigo-50">
                                {['NEW FOOD', 'ISEZERANO', 'IFUNGURO', 'MAGAJU', 'ENVELOPE'].map((section) => (
                                  <React.Fragment key={section}>
                                    <th className="border border-indigo-200 p-2">IBIRO</th>
                                    <th className="border border-indigo-200 p-2">IMIFUKA</th>
                                    <th className="border border-indigo-200 p-2">IGICIRO (RWF)</th>
                                    <th className="border border-indigo-200 p-2">FRW</th>
                                  </React.Fragment>
                                ))}
                              </tr>       
                            </thead>
                            <tbody>
                              {['25', '10', '5'].map((weight) => (
                                <tr key={weight} className="hover:bg-indigo-50">
                                  <td className="border border-indigo-200 p-2">{weight}</td>
                                  <td className="border border-indigo-200 p-2">{item.p_sold.NF.weights[weight]}</td>
                                  <td className="border border-indigo-200 p-2">{adcm(item.p_sold.NF.pricings[weight])}</td>
                                  <td className="border border-indigo-200 p-2">{adcm(item.p_sold.NF.totals[weight])} FRW</td>


                                  <td className="border border-indigo-200 p-2">{weight}</td>
                                  <td className="border border-indigo-200 p-2">{item.p_sold.IS.weights[weight]}</td>
                                  <td className="border border-indigo-200 p-2">{adcm(item.p_sold.IS.pricings[weight])}</td>
                                  <td className="border border-indigo-200 p-2">{adcm(item.p_sold.IS.totals[weight])} FRW</td>


                                  <td className="border border-indigo-200 p-2">{weight}</td>
                                  <td className="border border-indigo-200 p-2">{item.p_sold.IS.weights[weight]}</td>
                                  <td className="border border-indigo-200 p-2">{adcm(item.p_sold.IS.pricings[weight])}</td>
                                  <td className="border border-indigo-200 p-2">{adcm(item.p_sold.IS.totals[weight])} FRW</td>

                                  <td className="border border-indigo-200 p-2">{weight}</td>
                                  <td className="border border-indigo-200 p-2">{item.p_sold.MA.weights[weight]}</td>
                                  <td className="border border-indigo-200 p-2">{adcm(item.p_sold.MA.pricings[weight])}</td>
                                  <td className="border border-indigo-200 p-2">{adcm(item.p_sold.MA.totals[weight])} FRW</td>
                                  {weight === '25' && (
                                    <>
                                      <td rowSpan="3" className="border border-indigo-200 p-2">{5}</td>
                                      <td rowSpan="3" className="border border-indigo-200 p-2">{item.p_sold.envelope.weights[5]}</td>
                                      <td rowSpan="3" className="border border-indigo-200 p-2">{item.p_sold.envelope.pricings[5]}</td>
                                      <td rowSpan="3" className="border border-indigo-200 p-2">{adcm(item.p_sold.envelope.totals[5])} FRW</td>
                                    </>
                                  )}
                                </tr>
                              ))}
                              <tr className="font-bold bg-indigo-50">
                                <td className="border border-indigo-200 p-2">Weight:</td>
                                <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_sold.NF.weights).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                <td className="border border-indigo-200 p-2" colSpan="2">Total&nbsp;{adcm(Object.values(item.p_sold.NF.totals).reduce((sum,index)=>(sum+ (index)),0))} RWF</td>
                                <td className="border border-indigo-200 p-2">Weight:</td>
                                <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_sold.IS.weights).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                <td className="border border-indigo-200 p-2" colSpan="2">Total&nbsp;{adcm(Object.values(item.p_sold.IS.totals).reduce((sum,index)=>(sum+ (index)),0))} RWF</td>
                                <td className="border border-indigo-200 p-2">Weight:</td>
                                <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_sold.IF.weights).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                <td className="border border-indigo-200 p-2" colSpan="2">Total&nbsp;{adcm(Object.values(item.p_sold.IF.totals).reduce((sum,index)=>(sum+ (index)),0))} RWF</td>
                                <td className="border border-indigo-200 p-2">Weight:</td>
                                <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_sold.MA.weights).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                <td className="border border-indigo-200 p-2" colSpan="2">Total&nbsp;{adcm(Object.values(item.p_sold.MA.totals).reduce((sum,index)=>(sum+ (index)),0))} RWF</td>
                                <td className="border border-indigo-200 p-2">Weight:</td>
                                <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.p_sold.envelope.weights).reduce((sum,[key,index])=>(sum+ (key*index)),0))} KG</td>
                                <td className="border border-indigo-200 p-2" colSpan="2">Total&nbsp;{adcm(Object.values(item.p_sold.envelope.totals).reduce((sum,index)=>(sum+ (index)),0))} RWF</td>
                              </tr>
                              
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
              )})}
          </table>
        </div>
      </div>
    </div>
  )
}

export default IbyasohotsePage