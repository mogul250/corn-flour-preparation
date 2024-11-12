 
import React, { useState } from 'react';

const IbisanzwePage = () => {
  
  const [date, setDate] = useState('');
  const [utanzeRaporo, setUtanzeRaporo] = useState('');
  const [ingano, setIngano] = useState('');
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

  const handleInganoChange = (e) => {
    const input = e.target.value;
    setInganoYaEnvelope(input);

    // Calculate IS envelope 5kg only if the input is a number
    if (input && !isNaN(input)) {
      const inganoValue = parseInt(input, 10);
      setIsEnvelope5kg(Math.floor(inganoValue / 5));
    } else {
      setIsEnvelope5kg(''); // Reset IS envelope 5kg if input is cleared
    }
  };

  
  
  const [newFoodIbiro, setNewFoodIbiro] = useState({ a: 0, b: 0, c: 0 });
  const [ifunguroIbiro, setIfunguroIbiro] = useState({ a: 0, b: 0, c: 0 });
  const [isezeranoIbiro, setIsezeranoIbiro] = useState({ a: 0, b: 0, c: 0 });
  const [magajuIbiro, setMagajuIbiro] = useState({ a: 0, b: 0, c: 0 });
  const [envelope, setEnvelope] = useState({ ingano: 0, isEnvelope: 0, buranda: 0 });
  const [comments, setComments] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleCheckboxChange = (item) => {
    setSelectedAmafu((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const calculateTotal = (ibiro) => Object.values(ibiro).reduce((sum, value) => sum + Number(value), 0);
  const calculateImifuka = (ibiroValue) => Math.floor(ibiroValue / 25);
  const icumiImifuka = (ibiroValue) => Math.floor(ibiroValue / 10);
  const bitanuImifuka = (ibiroValue) => Math.floor(ibiroValue / 5);



  const handleNewFoodChange = (key, value) => setNewFoodIbiro(prev => ({ ...prev, [key]: value }));
  const handleIfunguroChange = (key, value) => setIfunguroIbiro(prev => ({ ...prev, [key]: value }));
  const handleIsezeranoChange = (key, value) => setIsezeranoIbiro(prev => ({ ...prev, [key]: value }));
  const handleMagajuChange = (key, value) => setMagajuIbiro(prev => ({ ...prev, [key]: value }));
  const handleEnvelopeChange = (key, value) => setEnvelope(prev => ({ ...prev, [key]: value }));

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const [successMessage, setSuccessMessage] = useState('');
    

    
    const formData = {
      firstForm: {
        utanzeRaporo,
        date,
        ingano,
        selectedAmafu,
        newFood,
        ifunguro,
        isezerano,
        magaju,
        buranda,
      },
      secondForm: {
        newFoodIbiro,
        ifunguroIbiro,
        isezeranoIbiro,
        magajuIbiro,
        envelope,
        comments,
      },
    };

   
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          AMAKURU YIBIGORI BIGIYE GUTUNGANYWA
        </h2>
        
        <form onSubmit={handleSubmit} className="bg-indigo-50 p-4 md:p-6 rounded-lg shadow-lg">
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
                value={ingano}
                onChange={(e) => setIngano(e.target.value)}
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
                onChange={(e) => setNewFood(e.target.value)}
              />
              <label className="block text-indigo-700 font-medium mb-2">Ifunguro</label>
              <input 
                type="text" 
                placeholder="Enter value" 
                className="w-full p-2 border rounded-md mb-4" 
                value={ifunguro}
                onChange={(e) => setIfunguro(e.target.value)}
              />
              <label className="block text-indigo-700 font-medium mb-2">Isezerano</label>
              <input 
                type="text" 
                placeholder="Enter value" 
                className="w-full p-2 border rounded-md mb-4" 
                value={isezerano}
                onChange={(e) => setIsezerano(e.target.value)}
              />
              <label className="block text-indigo-700 font-medium mb-2">Magaju</label>
              <input 
                type="text" 
                placeholder="Enter value" 
                className="w-full p-2 border rounded-md" 
                value={magaju}
                onChange={(e) => setMagaju(e.target.value)}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-indigo-700 mb-4">BURANDA</h3>
              <label className="block text-indigo-700 font-medium mb-2">
                Buranda Kuvamo
              </label>
              <input 
                type="text" 
                placeholder="Enter value" 
                className="w-full p-2 border rounded-md" 
                value={buranda}
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
                {['a', 'b', 'c'].map((key, index) => (
                  <React.Fragment key={key}>
                    <input
                      type="number"
                      placeholder={`NF: ${[25, 10, 5][index]}KG`}
                      className="bg-gray-200 p-2 rounded"
                      onChange={(e) => handleNewFoodChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={[calculateImifuka, icumiImifuka, bitanuImifuka][index](newFoodIbiro[key])}
                      className="bg-gray-200 p-2 rounded"
                      readOnly
                    />
                  </React.Fragment>
                ))}
                <p className="col-span-2 text-left font-bold text-indigo-600">
                  Total: {calculateTotal(newFoodIbiro)} KG
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-center text-white bg-indigo-500 py-2 font-semibold">IFUNGURO</h2>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-center text-indigo-600 font-medium">Ibiro</p>
                <p className="text-center text-indigo-600 font-medium">Imifuka</p>
                {['a', 'b', 'c'].map((key, index) => (
                  <React.Fragment key={key}>
                    <input
                      type="number"
                      placeholder={`IF: ${[25, 10, 5][index]}KG`}
                      className="bg-gray-200 p-2 rounded"
                      onChange={(e) => handleIfunguroChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={[calculateImifuka, icumiImifuka, bitanuImifuka][index](ifunguroIbiro[key])}
                      className="bg-gray-200 p-2 rounded"
                      readOnly
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
                {['a', 'b', 'c'].map((key, index) => (
                  <React.Fragment key={key}>
                    <input
                      type="number"
                      placeholder={`IS: ${[25, 10, 5][index]}KG`}
                      className="bg-gray-200 p-2 rounded"
                      onChange={(e) => handleIsezeranoChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={[calculateImifuka, icumiImifuka, bitanuImifuka][index](isezeranoIbiro[key])}
                      className="bg-gray-200 p-2 rounded"
                      readOnly
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
                {['a', 'b', 'c'].map((key, index) => (
                  <React.Fragment key={key}>
                    <input
                      type="number"
                      placeholder={`MG: ${[25, 10, 5][index]}KG`}
                      className="bg-gray-200 p-2 rounded"
                      onChange={(e) => handleMagajuChange(key, e.target.value)}
                    />
                    <input
                      type="text"
                      value={[calculateImifuka, icumiImifuka, bitanuImifuka][index](magajuIbiro[key])}
                      className="bg-gray-200 p-2 rounded"
                      readOnly
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
              <label className="block text-indigo-600 font-semibold mb-2                                           ">ingano ya Envelope</label>


<input 
type="number"
value={inganoYaEnvelope}
placeholder="Enter Value"
className="bg-gray-200 p-2 rounded"
onChange={handleInganoChange}
/>
<label className="block text-indigo-600 font-semibold mb-2">I.S Envelope 5KG</label>
<input
type="number"
placeholder="calculated value"
className="bg-gray-200 p-2 rounded"
value={isEnvelope5kg}
readOnly
/>
</div>
<div>
<label className="block text-center text-indigo-600 font-medium">Buranda Yavuyemo</label>
<input
type="number"
placeholder="Buranda Yavuyemo"
className="bg-gray-200 p-2 rounded"
/>
</div>
</div>


<textarea
className="mt-4 w-full p-2 rounded bg-gray-200"
rows="4"
placeholder="Enter comments here"
/>


<div className="mt-4 text-center">
<button
onClick={() => alert('Form submitted successfully!')}
className="bg-indigo-600 text-white p-2 rounded w-1/2"
>
Kubika
</button>
</div>
</form>
</div>
</div>

  );
                };
export default IbisanzwePage;
