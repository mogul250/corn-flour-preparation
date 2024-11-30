import React, { useState, useMemo, useRef, useEffect } from 'react'
import { adcm, f, pS } from '../../../public/functions'


const IbyinjiyePage = () => {
  const  [records,setRecords] = useState([]),
    hasFetched = useRef(false)
    useEffect(()=>{
      if (!hasFetched.current) {
        const fetchRecs = async ()=>{
          let schema = pS
          schema.body = JSON.stringify({date: {}})
          let recs = await f('stockReport',pS)
          setRecords(recs.metadata.report)
        }
        fetchRecs()
        hasFetched.current = true
      }
    },[])

  return (
    <div className="container mx-auto p-4 max-w-full">
      <div className="bg-white rounded-lg shadow-md p-4 w-full overflow-x-auto">
        <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">
          RAPORO Y'IFU YINJIYE MURI STOCK
        </h2>
       
        <div className="w-full overflow-x-auto mb-6">
          <table className="w-full bg-white border border-indigo-200 text-sm md:text-base">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border border-indigo-200 p-2 text-left">Date</th>
                <th className="border border-indigo-200 p-2 text-left">Utanze Raporo</th>
                <th className="border border-indigo-200 p-2 text-left">Numero Y'umufuka</th>
                <th className="border border-indigo-200 p-2 text-left">Icyongeweho</th>
              </tr>
            </thead>
              {records.map((item, index) => {
                console.log(item.sack_no)
                return(<tbody key={index}>
                  <tr key={index} className="hover:bg-indigo-50">
                    <td className="border bg-gray-400 border-indigo-200 p-2">{item.date}</td>
                    <td className="border border-indigo-200 p-2">{item.reporter}</td>
                    <td className="border border-indigo-200 p-2">{item.sack_no}</td>
                    <td className="border border-indigo-200 p-2">{item.comment}</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <div className="w-full overflow-x-auto">
                        <table className="w-full bg-white border border-indigo-200 text-sm md:text-base">
                          <thead>
                            <tr className="bg-indigo-50">
                              {['NEW FOOD', 'ISEZERANO', 'IFUNGURO', 'ISEZERANO ENVELOPE', 'ENVELOPE'].map((section) => (
                                <React.Fragment key={section}>
                                  <th colSpan="4" className="border border-indigo-200 p-2 text-center">{section}</th>
                                </React.Fragment>
                              ))}
                            </tr>
                            <tr className="bg-indigo-50">
                              {['NEW FOOD', 'ISEZERANO', 'IFUNGURO', 'MAGAJU', 'ENVELOPE'].map((section) => (
                                <React.Fragment key={section}>
                                  <th className="border border-indigo-200 p-2">Ibiro byakozwe</th>
                                  <th className="border border-indigo-200 p-2">Imifuka yakozwe</th>
                                  <th className="border border-indigo-200 p-2">Imifuka yari hari</th>
                                  <th className="border border-indigo-200 p-2">Imifuka yose muri stoke</th>
                                </React.Fragment>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {['25', '10', '5'].map((weight) => (
                              <tr key={weight} className="hover:bg-indigo-50">
                                <td className="border border-indigo-200 p-2">{adcm(item.new_food.incoming[weight]* Number(weight))}kg</td>
                                <td className="border border-indigo-200 p-2">{item.new_food.incoming[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.new_food.current[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.new_food.totals[weight]}</td>

                                <td className="border border-indigo-200 p-2">{adcm(item.isezerano.incoming[weight]* Number(weight))}kg</td>
                                <td className="border border-indigo-200 p-2">{item.isezerano.incoming[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.isezerano.current[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.isezerano.totals[weight]}</td>

                                <td className="border border-indigo-200 p-2">{adcm(item.ifunguro.incoming[weight]* Number(weight))}kg</td>
                                <td className="border border-indigo-200 p-2">{item.ifunguro.incoming[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.ifunguro.current[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.ifunguro.totals[weight]}</td>

                                <td className="border border-indigo-200 p-2">{adcm(item.magaju.incoming[weight]* Number(weight))}kg</td>
                                <td className="border border-indigo-200 p-2">{item.magaju.incoming[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.magaju.current[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.magaju.totals[weight]}</td>

                                {weight === '25' && (
                                  <>
                                    <td rowSpan="3" className="border border-indigo-200 p-2">{adcm(item.envelope.incoming['5']* Number('5'))}kg</td>
                                    <td rowSpan="3" className="border border-indigo-200 p-2">{item.envelope.incoming['5']}</td>
                                    <td rowSpan="3" className="border border-indigo-200 p-2">{item.envelope.current['5']}</td>
                                    <td rowSpan="3" className="border border-indigo-200 p-2">{item.envelope.totals['5']}</td>
                                  </>
                                )}
                              </tr>
                            ))}
                            <tr className="font-bold bg-indigo-50">
                              <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.new_food.incoming).reduce((sum,[key,index])=>(sum+ (key*index)),0))}kg</td>
                              <td className="border border-indigo-200 p-2">{adcm(Object.values(item.new_food.incoming).reduce((sum,index)=>(sum+ (index)),0))}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                              
                              <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.isezerano.incoming).reduce((sum,[key,index])=>(sum+ (key*index)),0))}kg</td>
                              <td className="border border-indigo-200 p-2">{adcm(Object.values(item.isezerano.incoming).reduce((sum,index)=>(sum+ (index)),0))}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                              
                              <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.ifunguro.incoming).reduce((sum,[key,index])=>(sum+ (key*index)),0))}kg</td>
                              <td className="border border-indigo-200 p-2">{adcm(Object.values(item.ifunguro.incoming).reduce((sum,index)=>(sum+ (index)),0))}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                              
                              <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.magaju.incoming).reduce((sum,[key,index])=>(sum+ (key*index)),0))}kg</td>
                              <td className="border border-indigo-200 p-2">{adcm(Object.values(item.magaju.incoming).reduce((sum,index)=>(sum+ (index)),0))}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                              
                              <td className="border border-indigo-200 p-2">{adcm(item.envelope.incoming['5']* Number('5'))}kg</td>
                              <td className="border border-indigo-200 p-2">{item.envelope.incoming['5']}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                </tbody>)
              })}
          </table>
        </div>

      </div>
    </div>
  )
}

export default IbyinjiyePage;