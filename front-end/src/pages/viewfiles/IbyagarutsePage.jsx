import React, { useState, useMemo, useEffect, useRef } from 'react'
import { adcm, f, pS } from '../../../public/functions'

const IbyagarutsePage= () => {
  const [records,setRecords] = useState([]),
  hasFetched = useRef(false)
  useEffect(()=>{
    if (!hasFetched.current) {
      const fetchRecs = async ()=>{
        let schema = pS
        schema.body = JSON.stringify({date: {}})
        let recs = await f('sales-nr-track',pS)
        setRecords(recs.metadata.report)
      }
      fetchRecs()
      hasFetched.current = true
    }
  },[])

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
              {records.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr key={index} className="hover:bg-indigo-50">
                      <td className="border border-indigo-200 p-2">{item.date}</td>
                      <td className="border border-indigo-200 p-2">{item.reporter}</td>
                      <td className="border border-indigo-200 p-2">{item.comment}</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>
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
                      </td>
                    </tr>
                  </tbody>
                )
              })}
          </table>
          </div>
      </div>
    
  )
}

export default IbyagarutsePage;