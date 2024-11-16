import React, { useState, useEffect } from 'react';

const ProductGrid = ({ title, isEnvelope, titleColor }) => {
  const [rows, setRows] = useState([
    { ibiro: '', imifuka: '', price: '', total: '' },
    { ibiro: '', imifuka: '', price: '', total: '' },
    { ibiro: '', imifuka: '', price: '', total: '' }
  ]);

  const ibiroProportion = isEnvelope
  ?{ 0: 5} 
  :{
    0: 25, 
    1: 10, 
    2: 5   
  };

  const calculateImifuka = (ibiro, rowIndex) => {
    const proportion = ibiroProportion[rowIndex];
    if (!proportion || !ibiro) return '';
    
    return Math.round(parseFloat(ibiro) / proportion);
  };

  const calculateTotal = (imifuka, price) => {
    if (!imifuka || !price) return '';
    return (parseFloat(imifuka) * parseFloat(price)).toFixed(2);
  };

  const handleInputChange = (rowIndex, field, value) => {
    const newRows = [...rows];
    newRows[rowIndex] = { ...newRows[rowIndex], [field]: value };


    if (field === 'ibiro') {
      newRows[rowIndex].imifuka = calculateImifuka(value, rowIndex);
      
      if (newRows[rowIndex].price) {
        newRows[rowIndex].total = calculateTotal(
          newRows[rowIndex].imifuka,
          newRows[rowIndex].price
        );
      }
    }

  
    if (field === 'price') {
      newRows[rowIndex].total = calculateTotal(
        newRows[rowIndex].imifuka,
        value
      );
    }

    setRows(newRows);
  };

  const calculateGrandTotal = () => {
    return rows
      .reduce((sum, row) => {
        const total = parseFloat(row.total) || 0;
        return sum + total;
      }, 0)
      .toFixed(2);
  };


  useEffect(() => {
    if (isEnvelope) {
      setRows([rows[0]]);
    }
  }, [isEnvelope]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <h3 className={`${titleColor} text-center py-2 text-base font-semibold`}>
        {title}
      </h3>
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-4 gap-2 sm:gap-6 mb-4">
          <div className="text-center">
            <span className="text-xs sm:text-sm font-medium text-indigo-600">Ibiro</span>
          </div>
          <div className="text-center">
            <span className="text-xs sm:text-sm font-medium text-indigo-600">Imifuka</span>
          </div>
          <div className="text-center">
            <span className="text-xs sm:text-sm font-medium whitespace-pre-wrap text-indigo-600">
              Price/u{'\n'}mufuka
            </span>
          </div>
          <div className="text-center">
            <span className="text-xs sm:text-sm font-medium whitespace-pre-wrap text-indigo-600">
              Total/im{'\n'}ifuka
            </span>
          </div>
        </div>

        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 sm:gap-6 mb-4">
            <input
              type="number"
              value={row.ibiro}
              onChange={(e) => handleInputChange(index, 'ibiro', e.target.value)}
              placeholder={`${title.slice(0, 2)}:${ibiroProportion[index] || ''}`}
              className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
            />
            <input
              type="text"
              value={row.imifuka}
              readOnly
              className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded bg-gray-50"
            />
            <input
              type="number"
              value={row.price}
              onChange={(e) => handleInputChange(index, 'price', e.target.value)}
              className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
            />
            <input
              type="text"
              value={row.total}
              readOnly
              className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded bg-gray-50"
            />
          </div>
        ))}

        <div className="text-right font-bold mt-4 sm:mt-6 text-sm sm:text-base text-indigo-600">
          Total: {calculateGrandTotal()} KG
        </div>
      </div>
    </div>
  );
};

const ProductFormSel = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your report has been submitted");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl font-bold text-indigo-500 text-center mb-6 sm:mb-8">
          Amakuru Y'ifu Zagiye Kw'isoko
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-indigo-600">
                Date
              </label>
              <input
                type="date"
                className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-indigo-600">
                Utanze Raporo
              </label>
              <input
                type="number"
                className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-indigo-600">
                Ugemuye Kw'isoko
              </label>
              <input
                type="number"
                className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-indigo-600">
                Umucuruzi
              </label>
              <input
                type="text"
                className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-indigo-600">
                Amafranga Araya Kw'isoko
              </label>
              <input
                type="text"
                className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2 text-indigo-600">
                Amafranga Asigaye
              </label>
              <input
                type="text"
                className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-2 text-indigo-600">
              Nimero Y'umufuka
            </label>
            <input
              type="text"
              className="w-full max-w-md px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
              required
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-8">
            <ProductGrid title="NEW FOOD" titleColor="text-indigo-600" />
            <ProductGrid title="IFUNGURO" titleColor="text-indigo-600" />
            <ProductGrid title="ISEZERANO" titleColor="text-indigo-600" />
            <ProductGrid title="MAGAJU" titleColor="text-indigo-600" />
          </div>

          <div className="max-w-4xl text-indigo-600">
            <ProductGrid
              title="ISEZERANO ENVELOPE/5KG"
              titleColor="text-indigo-600"
              isEnvelope={true}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-2 text-indigo-600">
              Comment
            </label>
            <textarea
              rows="3"
              className="w-full px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-1"
            />
          </div>

          <div className="flex justify-center gap-4 text-indigo-600">
            <button
              type="submit"
              className="w-48 sm:w-64 px-6 sm:px-8 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition-colors text-sm sm:text-base"
            >
              Kubika
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormSel;