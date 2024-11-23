import React, { useState, useMemo, useRef, useEffect } from 'react'
import { adcm, f, pS } from '../../../public/functions'

const initialFormData = {
  exampleData: [
    {
      date: '2024-11-12',
      utanzeRaporo: 'PABLOSCH',
      umufuka:'BB02',
      icyongeweho: 'ibyatunganyijwe byose byagenze neza',
    },
  ],
  newFood: {
    nf25: { ibiro: '25', shya: '1', imifukaIhari:'50', imifukaYose:'75' },
    nf10: { ibiro: '25', shya: '1', imifukaIhari:'50', imifukaYose:'75' },
    nf5: { ibiro: '25', shya: '1', imifukaIhari:'50', imifukaYose:'75' }
  },
  isezerano: {
    is25: { ibiro: '60', shya: '2', imifukaIhari:'350', imifukaYose:'700' },
    is10: { ibiro: '40', shya: '4', imifukaIhari:'350', imifukaYose:'1400' },
    is5: { ibiro: '25', shya: '5', imifukaIhari:'350', imifukaYose:'1750' }
  },
  ifunguro: {
    if25: { ibiro: '55', shya: '2', imifukaIhari:'350', imifukaYose:'700' },
    if10: { ibiro: '35', shaya: '3', imifukaIhari:'350', imifukaYose:'1050' },
    if5: { ibiro: '22', shya: '4', imifukaIhari:'350', imifukaYose:'1400' }
  },
  magaju: {
    mg25: { ibiro: '45', shya: '1', imifukaIhari:'350', imifukaYose:'350' },
    mg10: { ibiro: '30', shya: '3', imifukaIhari:'350', imifukaYose:'1050' },
    mg5: { ibiro: '18', shya: '3', imifukaIhari:'350', imifukaYose:'1050' }
  },
  envelope: {
    ibiro: '10',
    shya: '1',
    imifukaIhari:'250',
    imifukaYose: '10'
  }
}

const calculateTotals = (data) => ({
  newFoodTotal: Object.values(data.newFood).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  isezeranoTotal: Object.values(data.isezerano).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  ifunguroTotal: Object.values(data.ifunguro).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  magajuTotal: Object.values(data.magaju).reduce((acc, curr) => acc + Number(curr.ibiro), 0),
  envelopeTotal: Number(data.envelope.ibiro)
})

const IbyinjiyePage = () => {
  const [formData] = useState(initialFormData)
  const totals = useMemo(() => calculateTotals(formData), [formData]),
  [records,setRecords] = useState([]),
    hasFetched = useRef(false)
    useEffect(()=>{
      if (!hasFetched.current) {
        const fetchRecs = async ()=>{
          let schema = pS
          schema.body = JSON.stringify({date: {}})
          let recs = await f('packaging-track-report',pS)
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
                return(<tbody key={index}>
                  <tr key={index} className="hover:bg-indigo-50">
                    <td className="border border-indigo-200 p-2">{item.date}</td>
                    <td className="border border-indigo-200 p-2">{item.reporter}</td>
                    <td className="border border-indigo-200 p-2">{item.umufuka}</td>
                    <td className="border border-indigo-200 p-2">{item.comment}</td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <div className="w-full overflow-x-auto">
                        <table className="w-full bg-white border border-indigo-200 text-sm md:text-base">
                          <thead>
                            <tr className="bg-indigo-50">
                              {['NEW FOOD', 'ISEZERANO', 'IFUNGURO', 'MAGAJU', 'ENVELOPE'].map((section) => (
                                <React.Fragment key={section}>
                                  <th colSpan="4" className="border border-indigo-200 p-2 text-center">{section}</th>
                                </React.Fragment>
                              ))}
                            </tr>
                            <tr className="bg-indigo-50">
                              {['NEW FOOD', 'ISEZERANO', 'IFUNGURO', 'MAGAJU', 'ENVELOPE'].map((section) => (
                                <React.Fragment key={section}>
                                  <th className="border border-indigo-200 p-2">IBIRO BYAKOZWE</th>
                                  <th className="border border-indigo-200 p-2">STOCK SHYA</th>
                                  <th className="border border-indigo-200 p-2">STOCK YARI IHARI</th>
                                  <th className="border border-indigo-200 p-2">IMIFUKA YOSE</th>
                                </React.Fragment>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {['25', '10', '5'].map((weight) => (
                              <tr key={weight} className="hover:bg-indigo-50">
                                <td className="border border-indigo-200 p-2">{adcm(item.ls.NF[weight]* Number(weight))}</td>
                                <td className="border border-indigo-200 p-2">{item.ls.NF[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.r_weights.NF[weight] - item.ls.NF[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.r_weights.NF[weight]}</td>

                                <td className="border border-indigo-200 p-2">{adcm(item.ls.IS[weight]* Number(weight))}</td>
                                <td className="border border-indigo-200 p-2">{item.ls.IS[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.r_weights.IS[weight] - item.ls.IS[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.r_weights.IS[weight]}</td>

                                <td className="border border-indigo-200 p-2">{adcm(item.ls.IF[weight]* Number(weight))}</td>
                                <td className="border border-indigo-200 p-2">{item.ls.IF[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.r_weights.IF[weight] - item.ls.IF[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.r_weights.IF[weight]}</td>

                                <td className="border border-indigo-200 p-2">{adcm(item.ls.MA[weight]* Number(weight))}</td>
                                <td className="border border-indigo-200 p-2">{item.ls.MA[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.r_weights.MA[weight] - item.ls.MA[weight]}</td>
                                <td className="border border-indigo-200 p-2">{item.r_weights.MA[weight]}</td>

                                {weight === '25' && (
                                  <>
                                    <td rowSpan="3" className="border border-indigo-200 p-2">{adcm(item.ls.envelope['5']* Number('5'))}</td>
                                    <td rowSpan="3" className="border border-indigo-200 p-2">{item.ls.envelope['5']}</td>
                                    <td rowSpan="3" className="border border-indigo-200 p-2">{item.r_weights.envelope['5'] - item.ls.envelope['5']}</td>
                                    <td rowSpan="3" className="border border-indigo-200 p-2">{item.r_weights.envelope['5']}</td>
                                  </>
                                )}
                              </tr>
                            ))}
                            <tr className="font-bold bg-indigo-50">
                              <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.ls.NF).reduce((sum,[key,index])=>(sum+ (key*index)),0))}</td>
                              <td className="border border-indigo-200 p-2">{adcm(Object.values(item.ls.NF).reduce((sum,index)=>(sum+ (index)),0))}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                              
                              <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.ls.IS).reduce((sum,[key,index])=>(sum+ (key*index)),0))}</td>
                              <td className="border border-indigo-200 p-2">{adcm(Object.values(item.ls.IS).reduce((sum,index)=>(sum+ (index)),0))}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                              
                              <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.ls.IF).reduce((sum,[key,index])=>(sum+ (key*index)),0))}</td>
                              <td className="border border-indigo-200 p-2">{adcm(Object.values(item.ls.IF).reduce((sum,index)=>(sum+ (index)),0))}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                              
                              <td className="border border-indigo-200 p-2">{adcm(Object.entries(item.ls.MA).reduce((sum,[key,index])=>(sum+ (key*index)),0))}</td>
                              <td className="border border-indigo-200 p-2">{adcm(Object.values(item.ls.MA).reduce((sum,index)=>(sum+ (index)),0))}</td>
                              <td className="border border-indigo-200 p-2" colSpan="2">Total</td>
                              
                              <td className="border border-indigo-200 p-2">{adcm(item.ls.envelope['5']* Number('5'))}</td>
                              <td className="border border-indigo-200 p-2">{item.ls.envelope['5']}</td>
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