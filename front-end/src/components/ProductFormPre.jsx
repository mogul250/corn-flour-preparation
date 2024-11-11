/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const ProductFormPre = () => {
  const [formData, setFormData] = useState({
    itariki: '',
    ibigoriKugosorwa: '',
    imyandaYavuyemo: '',
    gukoborwa: '',
    utanzeRaporo: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData({
      itariki: '',
      ibigoriKugosorwa: '',
      imyandaYavuyemo: '',
      gukoborwa: '',
      utanzeRaporo: '',
      comment: ''
    });
  };

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">IBIGORI BIGIYE GUTUNGANYWA</h2>
      <form onSubmit={handleSubmit} className="bg-indigo-50 p-6 rounded-lg shadow-lg">
        
    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Itariki</label>
            <input
              type="date"
              name="itariki"
              value={formData.itariki}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded py-2 px-3"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Ibigori bigiye Kugosorwa</label>
            <input
              type="text"
              name="ibigoriKugosorwa"
              value={formData.ibigoriKugosorwa}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Ibigori Kugosorwa"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Imyanda Yavuyemo</label>
            <input
              type="text"
              name="imyandaYavuyemo"
              value={formData.imyandaYavuyemo}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Imyanda Yavuyemo"
              required
            />
          </div>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Gukoborwa</label>
            <input
              type="text"
              name="gukoborwa"
              value={formData.gukoborwa}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Gukoborwa"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Utanze Raporo</label>
            <input
              type="text"
              name="utanzeRaporo"
              value={formData.utanzeRaporo}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded py-2 px-3"
              placeholder="Enter Utanze Raporo"
              required
            />
          </div>
        </div>

    
        <div className="mb-4">
          <label className="block text-gray-700">Comment</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded py-2 px-3"
            placeholder="Enter any comments"
            rows="3"
          />
        </div>

        
        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFormPre;
