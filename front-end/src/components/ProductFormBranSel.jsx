// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function ProductFormBranSel() {
  const [formData, setFormData] = useState({
    itariki: "",
    utanzeRaporo: "",
    umukiliya: "",
    ibiroYatwaye: "",
    igiciro: "",
    amafarangaYose: "",
    amafarangaAsigaye: "",
    comment: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

     
      if (name === "ibiroYatwaye" || name === "igiciro") {
        const ibiroYatwaye = parseFloat(updatedData.ibiroYatwaye) || 0;
        const igiciro = parseFloat(updatedData.igiciro) || 0;
        updatedData.amafarangaYose = (ibiroYatwaye * igiciro).toFixed(2); 
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const requiredFields = [
      'itariki', 'utanzeRaporo', 'umukiliya', 
      'ibiroYatwaye', 'igiciro', 'amafarangaAsigaye'
    ];
    
    const isFormValid = requiredFields.every(field => 
      formData[field] !== null && formData[field] !== ""
    );

    if (!isFormValid) {
      alert("Please fill in all required fields.");
      return;
    }

    
    setIsSubmitted(true);

    
    const resetForm = {
      itariki: "",
      utanzeRaporo: "",
      umukiliya: "",
      ibiroYatwaye: "",
      igiciro: "",
      amafarangaYose: "",
      amafarangaAsigaye: "",
      comment: "",
    };
    setFormData(resetForm);
  };

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }

    
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isSubmitted]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-indigo-700">
              BURANDA YACURUJWE
            </h1>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "itariki", label: "ITARIKI", type: "date" },
                { name: "utanzeRaporo", label: "UTANZE RAPORO", type: "text" },
                { name: "umukiliya", label: "IZINA RY'UMUKIRIYA", type: "text" },
                { name: "ibiroYatwaye", label: "IBIRO YATWAYE", type: "number" },
                { name: "igiciro", label: "IGICIRO", type: "number" },
                { name: "amafarangaYose", label: "AMAFARANGA YOSE", type: "number", readOnly: true },
                { name: "amafarangaAsigaye", label: "AMAFARANGA ASIGAYE", type: "number" }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs sm:text-sm font-medium text-indigo-600 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    readOnly={field.readOnly}
                    className={`w-full px-2 py-1 sm:px-3 sm:py-2 border rounded border-indigo-300 
                      focus:ring focus:ring-indigo-200 
                      ${field.readOnly ? 'bg-gray-100' : ''}`}
                    required={!field.readOnly}
                  />
                </div>
              ))}
            </div>

           
            <div>
              <label className="block text-xs sm:text-sm font-medium text-indigo-600 mb-1">
                ICYONGERWAHO
              </label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="w-full px-2 py-1 sm:px-3 sm:py-2 border rounded border-indigo-300 focus:ring focus:ring-indigo-200"
                rows="3"
              ></textarea>
            </div>

            
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded hover:bg-indigo-700 transition-colors"
              >
                KUBIKA
              </button>
            </div>

            
            {isSubmitted && (
              <div 
                className="text-center text-green-600 font-medium mt-4 
                  animate-fade-in-down animate-duration-300 
                  bg-green-50 p-3 rounded-md border border-green-200"
              >
                Successfully submitted!!!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductFormBranSel;