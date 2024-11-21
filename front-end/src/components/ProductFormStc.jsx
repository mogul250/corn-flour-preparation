import React, { useState } from 'react';

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
      calculatedImifuka = value ? Math.floor(parseFloat(value) / 25).toString() : '';
    } else if (size === '10') {
      calculatedImifuka = value ? Math.floor(parseFloat(value) / 10).toString() : '';
    } else if (size === '5') {
      calculatedImifuka = value ? Math.floor(parseFloat(value) / 5).toString() : '';
    }

    setImifukaValue(calculatedImifuka);

    if (igiciroValue && calculatedImifuka) {
      const calculatedFrwAsabwa = Math.floor(parseFloat(igiciroValue) + parseFloat(calculatedImifuka)).toString();
      setFrwAsabwaValue(calculatedFrwAsabwa);
    }

    onValueChange && onValueChange(value, calculatedImifuka);
  };

  const handleIgiciroChange = (e) => {
    const value = e.target.value;
    setIgiciroValue(value);
    
    if (imifukaValue && value) {
      const calculatedFrwAsabwa = Math.floor(parseFloat(value) + parseFloat(imifukaValue)).toString();
      setFrwAsabwaValue(calculatedFrwAsabwa);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-2">
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

const DetailedProductSection = ({ title, prefix }) => (
  <div className="bg-white rounded shadow-sm p-4">
    <h3 className="font-medium mb-3">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-2">
      <span className="text-sm font-medium">Ibiro By'akozwe</span>
      <span className="text-sm font-medium">Stock Shya</span>
      <span className="text-sm font-medium">Stock Yari Ihari </span>
      <span className="text-sm font-medium">Stock Yose Hamwe </span>
    </div>
    <ProductRowDetailed prefix={prefix} size="25" />
    <ProductRowDetailed prefix={prefix} size="10" />
    <ProductRowDetailed prefix={prefix} size="5" />
  </div>
);

const DetailedEnvelopeSection = () => {
  const [ibiruValue, setIbiruValue] = useState('');
  const [imifukaValue, setImifukaValue] = useState('');
  const [igiciroValue, setIgiciroValue] = useState('');
  const [frwAsabwaValue, setFrwAsabwaValue] = useState('');

  const handleIbiruChange = (e) => {
    const value = e.target.value;
    setIbiruValue(value);
    
    if (value) {
      const calculatedImifuka = Math.floor(parseFloat(value) / 5).toString();
      setImifukaValue(calculatedImifuka);
    } else {
      setImifukaValue('');
    }

    if (igiciroValue && value) {
      const calculatedFrwAsabwa = Math.floor(parseFloat(igiciroValue) + (parseFloat(value) / 5)).toString();
      setFrwAsabwaValue(calculatedFrwAsabwa);
    }
  };

  const handleIgiciroChange = (e) => {
    const value = e.target.value;
    setIgiciroValue(value);
    
    if (imifukaValue && value) {
      const calculatedFrwAsabwa = Math.floor(parseFloat(value) + parseFloat(imifukaValue)).toString();
      setFrwAsabwaValue(calculatedFrwAsabwa);
    }
  };

  return (
    <div className="bg-white rounded shadow-sm p-4">
      <h3 className="font-medium mb-3">IS YA ENVELOPE</h3>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-2">
        <span className="text-sm font-medium">Ibiro By'akozwe</span>
        <span className="text-sm font-medium">Stock Shya</span>
        <span className="text-sm font-medium">Stock Yari Ihari </span>
        <span className="text-sm font-medium">Stock Yose Hamwe </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
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

const ProductFormStc = () => {
  const [formData, setFormData] = useState({
    date: '',
    utanzeRaporo: '',
    ugemuye: '',
    comment: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    
    setShowSuccessMessage(true);
    
   
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    
    e.target.reset();
    setFormData({
      date: '',
      utanzeRaporo: '',
      ugemuye: '',
      comment: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {showSuccessMessage && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
            form submitted successfully!!!
          </div>
        )}

        <h1 className="text-lg sm:text-xl font-bold mb-6 text-center text-indigo-600">
          AMAKURU Y'IFU ZINJIYE MURI STOCK
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-indigo-600">
            <div>
              <label htmlFor="date" className="block text-sm font-medium mb-1 text-indigo-600">Itariki</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
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
                value={formData.utanzeRaporo}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="ugemuye" className="block text-sm font-medium mb-1 text-indigo-600">Numero Y'umukiliya</label>
              <input
                type="text"
                id="ugemuye"
                name="ugemuye"
                value={formData.ugemuye}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </div>
          
          <div>
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
              <label htmlFor="comment" className="mb-1 text-indigo-800">
                Icyongerwaho
              </label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded resize-none"
                rows="4"
                placeholder="Add your comment here..."
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-10 sm:px-16 py-2 sm:py-3 bg-indigo-500 text-white rounded hover:bg-indigo-800"
            >
              Kubika
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductFormStc;