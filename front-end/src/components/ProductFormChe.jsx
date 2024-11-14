import React, { useState } from 'react';
import { f, pS } from '../../public/functions';

const ProductFormChe = () => {
  
  const [date, setDate] = useState('');
  const [utanzeRaporo, setUtanzeRaporo] = useState('');
  const [incoming_c, setincoming_c] = useState('');
  const [newFood, setNewFood] = useState('');
  const [ifunguro, setIfunguro] = useState('');
  const [isezerano, setIsezerano] = useState('');
  const [magaju, setMagaju] = useState('');
  const [buranda, setBuranda] = useState('');
  const [selectedAmafu, setSelectedAmafu] = useState({
    newFood: false,
    ifunguro: false,
    isezerano: false,
    magaju: false,
  });

  const [inganoYaEnvelope, setInganoYaEnvelope] = useState('');
  const [isEnvelope5kg, setIsEnvelope5kg] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  const handleInganoChange = (e) => {
    const input = e.target.value;
    setInganoYaEnvelope(input);

    
    if (input && !isNaN(input)) {
      const inganoValue = parseInt(input, 10);
      setIsEnvelope5kg(Math.floor(inganoValue / 5));
    } else {
      setIsEnvelope5kg(''); // Reset IS envelope 5kg if input is cleared
    }
  };

  const [newFoodIbiro, setNewFoodIbiro] = useState({ '25': 0, '10': 0, '5': 0 });
  const [ifunguroIbiro, setIfunguroIbiro] = useState({ '25': 0, '10': 0, '5': 0 });
  const [isezeranoIbiro, setIsezeranoIbiro] = useState({ '25': 0, '10': 0, '5': 0 });
  const [magajuIbiro, setMagajuIbiro] = useState({ '25': 0, '10': 0, '5': 0 });
  const [envelope, setEnvelope] = useState({ ingano: 0, isEnvelope: 0, buranda: 0 });
  const [waste_f, setwaste_f] = useState('');
  const [comments, setComments] = useState('');

  const handleCheckboxChange = (item) => {
    setSelectedAmafu((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const calculateTotal = (ibiro) => Object.entries(ibiro).reduce((acc, [key, value]) => { return acc + (Number(key) * value); }, 0);
  const calculateImifuka = (ibiroValue) => Math.floor(ibiroValue / 25);
  const icumiImifuka = (ibiroValue) => Math.floor(ibiroValue / 10);
  const bitanuImifuka = (ibiroValue) => Math.floor(ibiroValue / 5);

  const handleNewFoodChange = (key, value) => setNewFoodIbiro(prev => ({ ...prev, [key]: Math.round(Number(value)/Number(key)) }));
  const handleIfunguroChange = (key, value) => setIfunguroIbiro(prev => ({ ...prev, [key]: Math.round(Number(value)/Number(key)) }));
  const handleIsezeranoChange = (key, value) => setIsezeranoIbiro(prev => ({ ...prev, [key]: Math.round(Number(value)/Number(key)) }));
  const handleMagajuChange = (key, value) => setMagajuIbiro(prev => ({ ...prev, [key]: Math.round(Number(value)/Number(key)) }));
  const handleEnvelopeChange = (key, value) => setEnvelope(prev => ({ ...prev, [key]: Math.round(Number(value)/Number(key)) }));
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
        reporter: utanzeRaporo,
        date,
        incoming_c: Number(incoming_c),
        selectedAmafu,
        NF: Number(newFood),
        IF: Number(ifunguro),
        IS: Number(isezerano),
        MA: Number(magaju),
        waste_e:  Number(buranda),
        new_food: newFoodIbiro,
        ifunguro: ifunguroIbiro,
        isezerano: isezeranoIbiro,
        magaju: magajuIbiro,
        envelope:  Number(isEnvelope5kg),
        comment: comments,
        waste_f: Number(waste_f),
    };

    
    setSuccessMessage('Form submitted successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); 
    console.log(formData)
    const scheme = pS
    scheme.body = JSON.stringify(formData)
    let res = await f('packaging',scheme)
    // Reset form fields
    // setDate('');
    // setUtanzeRaporo('');
    // setIngano('');
    // setNewFood('');
    // setIfunguro('');
    // setIsezerano('');
    // setMagaju('');
    // setBuranda('');
    // setSelectedAmafu({
    //   newFood: false,
    //   ifunguro: false,
    //   isezerano: false,
    //   magaju: false,
    // });
    // setInganoYaEnvelope('');
    // setIsEnvelope5kg('');
    // setNewFoodIbiro({ a: 0, b: 0, c: 0 });
    // setIfunguroIbiro({ a: 0, b: 0, c: 0 });
    // setIsezeranoIbiro({ a: 0, b: 0, c: 0 });
    // setMagajuIbiro({ a: 0, b: 0, c: 0 });
    // setEnvelope({ ingano: 0, isEnvelope: 0, buranda: 0 });
    // setComments('');
    // setwaste_f('')
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          AMAKURU YIBIGORI BIGIYE GUTUNGANYWA
        </h2>


        <form onSubmit={handleSubmit} className="bg-indigo-50 p-4 md:p-6 rounded-lg shadow-lg">
          {/* (Your form fields and structure here) */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
            <div>
              <label className="block text-indigo-700 font-medium mb-2">
              Itariki
              </label>
              <input 
                type="date" 
                placeholder="Enter name" 
                className="w-full p-2 border rounded-md" 
                value={date}
                name='date'
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-indigo-700 font-medium mb-2">
                Utanze Raporo
              </label>
              <input 
                type="" 
                className="w-full p-2 border rounded-md" 
                value={utanzeRaporo}
                name='reporter'
                onChange={(e) => setUtanzeRaporo(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-indigo-700 font-medium mb-2">
                Ingano y'Ibigori
              </label>
              <input 
                type="text" 
                placeholder="Enter amount" 
                className="w-full p-2 border rounded-md" 
                value={incoming_c}
                name='incoming_c'
                onChange={(e) => setincoming_c(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-indigo-700 mb-4">UBWOKO BW'AMAFU</h3>
              {['newFood', 'ifunguro', 'isezerano', 'magaju'].map((item) => (
                <div key={item} className="mb-2">
                  <label className="inline-flex items-center">
                    <input 
                      type="checkbox" 
                      className="form-checkbox text-indigo-600" 
                      checked={selectedAmafu[item]}
                      name='type'
                      onChange={() => handleCheckboxChange(item)}
                      
                    />
                    <span className="ml-2 text-indigo-700">{item}</span>
                  </label>
                </div>
              ))}
            </div>
            
            <div>
              <label className="block text-indigo-700 font-medium mb-2">New Food</label>
              <input 
                type="text" 
                placeholder="Enter value" 
                className="w-full p-2 border rounded-md mb-4" 
                value={newFood}
                name='nFWeight'
                onChange={(e) => setNewFood(e.target.value)}
                required
              />
              <label className="block text-indigo-700 font-medium mb-2">Ifunguro ryiza</label>
              <input 
                type="text" 
                placeholder="Enter value" 
                className="w-full p-2 border rounded-md mb-4" 
                value={ifunguro}
                name='ifWeight'
                onChange={(e) => setIfunguro(e.target.value)}
                required
              />
              <label className="block text-indigo-700 font-medium mb-2">Isezerano</label>
              <input 
                type="text" 
                placeholder="Enter value" 
                className="w-full p-2 border rounded-md mb-4" 
                value={isezerano}
                name='isWeight'
                onChange={(e) => setIsezerano(e.target.value)}
                required
              />
              <label className="block text-indigo-700 font-medium mb-2">Magaju</label>
              <input 
                type="text" 
                placeholder="Enter value" 
                name='maWeight'
                className="w-full p-2 border rounded-md" 
                value={magaju}
                onChange={(e) => setMagaju(e.target.value)}
                required
              />
            </div>

            <div>
              
              <label className="block text-indigo-700 font-medium mb-2">
                Buranda iteganywa Kuvamo
              </label>
              <input 
                type="text" 
                placeholder="Enter value" 
                className="w-full p-2 border rounded-md" 
                value={buranda}
                name='waste_e'
                onChange={(e) => setBuranda(e.target.value)}
                required
              />
            </div>
          </div>

      
          <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
            IFU ZAVUYE MUBYATUNGANYIJWE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      
            <div>
              <h2 className="text-center text-white bg-indigo-500 py-2 font-semibold">NEW FOOD</h2>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-center text-indigo-600 font-medium">Ibiro</p>
                <p className="text-center text-indigo-600 font-medium">Imifuka</p>
                {['25', '10', '5'].map((key, index) => (
                  <React.Fragment key={key}>
                    <input
                      type="number"
                    
                      placeholder={`NF: ${[25, 10, 5][index]}KG`}
                      className="bg-gray-200 p-2 rounded"
                      name='nf'
                      onChange={(e) => handleNewFoodChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={[calculateImifuka, icumiImifuka, bitanuImifuka][index](newFoodIbiro[key]* Number(key))}
                      className="bg-gray-200 p-2 rounded"
                      
                    />
                  </React.Fragment>
                ))}
                <p className="col-span-2 text-left font-bold text-indigo-600">
                  Total: {calculateTotal(newFoodIbiro)} KG
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-center text-white bg-indigo-500 py-2 font-semibold">IFUNGURO RYIZA</h2>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-center text-indigo-600 font-medium">Ibiro</p>
                <p className="text-center text-indigo-600 font-medium">Imifuka</p>
                {['25', '10', '5'].map((key, index) => (
                  <React.Fragment key={key}>
                    <input
                      type="number"
                      name='if'
                      placeholder={`IF: ${[25, 10, 5][index]}KG`}
                      className="bg-gray-200 p-2 rounded"
                      onChange={(e) => handleIfunguroChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={[calculateImifuka, icumiImifuka, bitanuImifuka][index](ifunguroIbiro[key]* Number(key))}
                      className="bg-gray-200 p-2 rounded"
                      
                    />
                  </React.Fragment>
                ))}
                <p className="col-span-2 text-left font-bold text-indigo-600">
                  Total: {calculateTotal(ifunguroIbiro)} KG
                </p>
              </div>
            </div>

      
            <div>
              <h2 className="text-center text-white bg-indigo-500 py-2 font-semibold">ISEZERANO</h2>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-center text-indigo-600 font-medium">Ibiro</p>
                <p className="text-center text-indigo-600 font-medium">Imifuka</p>
                {['25', '10', '5'].map((key, index) => (
                  <React.Fragment key={key}>
                    <input
                      type="number"
                      name='is'
                      placeholder={`IS: ${[25, 10, 5][index]}KG`}
                      className="bg-gray-200 p-2 rounded"
                      onChange={(e) => handleIsezeranoChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={[calculateImifuka, icumiImifuka, bitanuImifuka][index](isezeranoIbiro[key]* Number(key))}
                      className="bg-gray-200 p-2 rounded"
                      
                    />
                  </React.Fragment>
                ))}
                <p className="col-span-2 text-left font-bold text-indigo-600">
                  Total: {calculateTotal(isezeranoIbiro)} KG
                </p>
              </div>
            </div>

          
            <div>
              <h2 className="text-center text-white bg-indigo-500 py-2 font-semibold">MAGAJU</h2>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-center text-indigo-600 font-medium">Ibiro</p>
                <p className="text-center text-indigo-600 font-medium">Imifuka</p>
                {['25', '10', '5'].map((key, index) => (
                  <React.Fragment key={key}>
                    <input
                      type="number"
                    name='mag'
                      placeholder={`MG: ${[25, 10, 5][index]}KG`}
                      className="bg-gray-200 p-2 rounded"
                      onChange={(e) => handleMagajuChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={[calculateImifuka, icumiImifuka, bitanuImifuka][index](magajuIbiro[key]* Number(key))}
                      className="bg-gray-200 p-2 rounded"
                      
                    />
                  </React.Fragment>
                ))}
                <p className="col-span-2 text-left font-bold text-indigo-600">
                  Total: {calculateTotal(magajuIbiro)} KG
                </p>
              </div>
            </div>
          </div>

      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-indigo-600 font-semibold mb-2 ">ingano ya Envelope</label>

           <input 
             type="number"
             value={inganoYaEnvelope}
             placeholder="IS:5KG"
             name='envelope'
             className="bg-gray-200 p-2 rounded"
             onChange={handleInganoChange}
          />
          <label className="block text-indigo-600 font-semibold mb-2">I.S Envelope 5KG</label>
         <input
             type="number"
             placeholder="0"
             className="bg-gray-200 p-2 rounded"
             value={isEnvelope5kg}
             onChange={handleEnvelopeChange}
             readonly

          />
      </div>
         <div>
            <label className="block text-center text-indigo-600 font-medium">Buranda Yavuyemo</label>
            <input
            type="number"
            value={waste_f}
            name='waste_f'
            placeholder="Buranda Yavuyemo"
            className="bg-gray-200 p-2 rounded"
            onChange={(e) => setwaste_f(e.target.value)}
            required


            />
        </div>
          </div>
 
         <textarea
         className="mt-4 w-full p-2 rounded bg-gray-200"
         rows="4"
         placeholder="Enter comments here"
         value={comments}
         name='comment'
         onChange={ (e) => setComments(e.target.value)}
        />

          {/* Submit button */}
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white p-2 rounded w-1/2"
            >
              Kubika
            </button>
          </div>
          {/* Display success message */}
        {successMessage && (
          <div className="text-center mb-4 p-2 bg-green-200 text-green-800 font-semibold rounded">
            {successMessage}
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default ProductFormChe;
