// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const ProductRowSimple = ({ prefix, size, onValueChange }) => {
  const [ibiruValue, setIbiruValue] = useState('');
  const [imifukaValue, setImifukaValue] = useState('');

  const handleIbiruChange = (e) => {
    const value = e.target.value;
    setIbiruValue(value);
    
    let calculatedImifuka = '';
    if (size === '25') {
      calculatedImifuka = value ? (parseFloat(value) / 25).toString() : '';
    } else if (size === '10') {
      calculatedImifuka = value ? (parseFloat(value) / 10).toString() : '';
    } else if (size === '5') {
      calculatedImifuka = value ? (parseFloat(value) / 5).toString() : '';
    }

    setImifukaValue(calculatedImifuka);
    onValueChange && onValueChange(value, calculatedImifuka);
  };
        
  return (
    <div className="grid grid-cols-2 gap-4 mb-2">
      <input
        type="number"
        placeholder={`${prefix}:${size}KG`}
        value={ibiruValue}
        onChange={handleIbiruChange}
        className="w-full px-3 py-2 text-sm border rounded"
      />
      <input  
        type="text"
        value={imifukaValue}
        readOnly
        className="w-full px-3 py-2 text-sm border rounded bg-gray-100"
      />
    </div>
  );
};

const ProductRowDetailed = ({ prefix, size, onValueChange }) => {
  const [ibiruValue, setIbiruValue] = useState('');
  const [imifukaValue, setImifukaValue] = useState('');
  const [igiciroValue, setIgiciroValue] = useState('');
  const [frwAsabwaValue, setFrwAsabwaValue] = useState('');

  const handleIbiruChange = (e) => {
    const value = e.target.value;
    setIbiruValue(value);
    
    let calculatedImifuka = '';
    if (size === '25') {
      calculatedImifuka = value ? (parseFloat(value) / 25).toString() : '';
    } else if (size === '10') {
      calculatedImifuka = value ? (parseFloat(value) / 10).toString() : '';
    } else if (size === '5') {
      calculatedImifuka = value ? (parseFloat(value) / 5).toString() : '';
    }

    setImifukaValue(calculatedImifuka);

    
    if (igiciroValue && calculatedImifuka) {
      const calculatedFrwAsabwa = (parseFloat(igiciroValue) * parseFloat(calculatedImifuka)).toFixed(2);
      setFrwAsabwaValue(calculatedFrwAsabwa);
    }

    onValueChange && onValueChange(value, calculatedImifuka);
  };

  const handleIgiciroChange = (e) => {
    const value = e.target.value;
    setIgiciroValue(value);
    
    // Calculate Frw Asabwa when Igiciro changes
    if (imifukaValue && value) {
      const calculatedFrwAsabwa = (parseFloat(value) * parseFloat(imifukaValue)).toFixed(2);
      setFrwAsabwaValue(calculatedFrwAsabwa);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 mb-2">
      <input
        type="number"
        placeholder={`${prefix}:${size}KG`}
        value={ibiruValue}
        onChange={handleIbiruChange}
        className="w-full px-3 py-2 text-sm border rounded"
      />
      <input
        type="text"
        value={imifukaValue}
        readOnly
        className="w-full px-3 py-2 text-sm border rounded bg-gray-100"
      />
      <input
        type="text"
        value={igiciroValue}
        onChange={handleIgiciroChange}
        className="w-full px-3 py-2 text-sm border rounded"
      />
      <input
        type="text"
        value={frwAsabwaValue}
        readOnly
        className="w-full px-3 py-2 text-sm border rounded bg-gray-100"
      />
    </div>
  );
};

const SimpleProductSection = ({ title, prefix }) => (
  <div className="bg-white rounded shadow-sm p-4">
    <h3 className="font-medium mb-3">{title}</h3>
    <div className="grid grid-cols-2 gap-4 mb-2">
      <span className="text-sm font-medium">Ibiro</span>
      <span className="text-sm font-medium">Imifuka</span>
    </div>
    <ProductRowSimple prefix={prefix} size="25" />
    <ProductRowSimple prefix={prefix} size="10" />
    <ProductRowSimple prefix={prefix} size="5" />
  </div>
);

const DetailedProductSection = ({ title, prefix }) => (
  <div className="bg-white rounded shadow-sm p-4">
    <h3 className="font-medium mb-3">{title}</h3>
    <div className="grid grid-cols-4 gap-4 mb-2">
      <span className="text-sm font-medium">Ibiro</span>
      <span className="text-sm font-medium">Imifuka</span>
      <span className="text-sm font-medium">Igiciro</span>
      <span className="text-sm font-medium">Frw Asabwa</span>
    </div>
    <ProductRowDetailed prefix={prefix} size="25" />
    <ProductRowDetailed prefix={prefix} size="10" />
    <ProductRowDetailed prefix={prefix} size="5" />
  </div>
);

const SimpleEnvelopeSection = () => {
  const [ibiruValue, setIbiruValue] = useState('');
  const [imifukaValue, setImifukaValue] = useState('');

  const handleIbiruChange = (e) => {
    const value = e.target.value;
    setIbiruValue(value);
    
    if (value) {
      const calculatedImifuka = Math.Floor(parseFloat(value) / 5).toString();
      setImifukaValue(calculatedImifuka);
    } else {
      setImifukaValue('');
    }
  };

  return (
    <div className="bg-white rounded shadow-sm p-4">
      <h3 className="font-medium mb-3">IS YA ENVELOPE</h3>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <span className="text-sm font-medium">Ibiro</span>
        <span className="text-sm font-medium">Imifuka</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="IS:5KG"
          value={ibiruValue}
          onChange={handleIbiruChange}
          className="w-full px-3 py-2 text-sm border rounded"
        />
        <input
          type="text"
          value={imifukaValue}
          readOnly
          className="w-full px-3 py-2 text-sm border rounded bg-gray-100"
        />
      </div>
    </div>
  );
};

const DetailedEnvelopeSection = () => {
  const [ibiruValue, setIbiruValue] = useState('');
  const [imifukaValue, setImifukaValue] = useState('');
  const [igiciroValue, setIgiciroValue] = useState('');
  const [frwAsabwaValue, setFrwAsabwaValue] = useState('');

  const handleIbiruChange = (e) => {
    const value = e.target.value;
    setIbiruValue(value);
    
    if (value) {
      const calculatedImifuka = (parseFloat(value) / 5).toFixed(2);
      setImifukaValue(calculatedImifuka);
    } else {
      setImifukaValue('');
    }

    
    if (igiciroValue && value) {
      const calculatedFrwAsabwa = (parseFloat(igiciroValue) * (parseFloat(value) / 5)).toFixed(2);
      setFrwAsabwaValue(calculatedFrwAsabwa);
    }
  };

  const handleIgiciroChange = (e) => {
    const value = e.target.value;
    setIgiciroValue(value);
    
    
    if (imifukaValue && value) {
      const calculatedFrwAsabwa = (parseFloat(value) * parseFloat(imifukaValue)).toFixed(2);
      setFrwAsabwaValue(calculatedFrwAsabwa);
    }
  };

  return (
    <div className="bg-white rounded shadow-sm p-4">
      <h3 className="font-medium mb-3">IS YA ENVELOPE</h3>
      <div className="grid grid-cols-4 gap-4 mb-2">
        <span className="text-sm font-medium">Ibiro</span>
        <span className="text-sm font-medium">Imifuka</span>
        <span className="text-sm font-medium">Igiciro</span>
        <span className="text-sm font-medium">Frw Asabwa</span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <input
          type="number"
          placeholder="IS:5KG"
          value={ibiruValue}
          onChange={handleIbiruChange}
          className="w-full px-3 py-2 text-sm border rounded"
        />
        <input
          type="text"
          value={imifukaValue}
          readOnly
          className="w-full px-3 py-2 text-sm border rounded bg-gray-100"
        />
        <input
          type="text"
          value={igiciroValue}
          onChange={handleIgiciroChange}
          className="w-full px-3 py-2 text-sm border rounded"
        />
        <input
          type="text"
          value={frwAsabwaValue}
          readOnly
          className="w-full px-3 py-2 text-sm border rounded bg-gray-100"
        />
      </div>
    </div>
  );
};
const ProductFormOut = () => {
 const handleSubmit = (e) => {
   e.preventDefault();
   alert("Your report has been submitted");
   e.target.reset();
 };

 return (
   <div className="min-h-screen bg-gray-50 p-6">
     <div className="max-w-7xl mx-auto">
       <h1 className="text-xl font-bold mb-6 text-center text-indigo-600">
         IBYABEREYE KWISOKO
       </h1>
       
       <form onSubmit={handleSubmit} className="space-y-8">
       
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-indigo-600">
           <div>
             <label htmlFor="date" className="block text-sm font-medium mb-1 text-indigo-600">Itariki</label>
             <input
               type="date"
               id="date"
               name="date"
               className="w-full px-3 py-2 border rounded"
               required
             />
           </div>
           <div>
             <label htmlFor="utanzeRaporo" className="block text-sm font-medium mb-1 text-indigo-600">Utanze Raporo</label>
             <input
               type="text"
               id="utanzeRaporo"
               name="utanzeRaporo"
               className="w-full px-3 py-2 border rounded"
               required
             />
           </div>
           <div>
             <label htmlFor="ugemuye" className="block text-sm font-medium mb-1 text-indigo-600">Ugemuye</label>
             <input
               type="text"
               id="ugemuye"
               name="ugemuye"
               className="w-full px-3 py-2 border rounded"
               required
             />
           </div>
           <div>
             <label htmlFor="umucuruzi" className="block text-sm font-medium mb-1 text-indigo-600">Umukiliya</label>
             <input
               type="text"
               id="umucuruzi"
               name="umucuruzi"
               className="w-full px-3 py-2 border rounded"
               required
             />
           </div>
         </div>

         
         <div>
           <h2 className="text-lg font-bold mb-4 text-center text-indigo-600">IBYO YATWAYE</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 text-indigo-600">
             <SimpleProductSection title="NEW FOOD" prefix="NF" />
             <SimpleProductSection title="IFUNGURO" prefix="IF" />
             <SimpleProductSection title="ISEZERANO" prefix="IS" />
             <SimpleProductSection title="MAGAJU" prefix="MA" />
             <SimpleEnvelopeSection />
           </div>
         </div>

         
         <div>
           <h2 className="text-lg font-bold mb-4 text-indigo-600 text-center">IBYACURUJWE</h2>
           <div className="flex flex-col gap-6">
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-indigo-600">
               <DetailedProductSection title="NEW FOOD" prefix="NF" />
               <DetailedProductSection title="IFUNGURO" prefix="IF" />
             </div>
             
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-indigo-600">
               <DetailedProductSection title="ISEZERANO" prefix="IS" />
               <DetailedProductSection title="MAGAJU" prefix="MA" />
             </div>
             
             
             <div className="md:w-1/2 mx-auto text-indigo-600">
               <DetailedEnvelopeSection />
             </div>
           </div>
         </div>

        
         <div className="flex justify-start">
           <div className="flex flex-col w-full">
             <label htmlFor="comment" className="mb-1 text-indigo-600">
               comments
             </label>
             <textarea
               id="comment"
               className="w-full border border-gray-300 rounded resize-none"
               rows="4"
               placeholder="Add your comment here..."
             ></textarea>
           </div>
         </div>

        
         <div className="flex justify-center">
           <button
             type="submit"
             className="px-16 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-800"
           >
             Kubika
           </button>
         </div>
       </form>
     </div>
   </div>
 );
};

export default ProductFormOut;


