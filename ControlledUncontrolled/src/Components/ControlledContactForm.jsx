import React, { useState } from "react";

const ControlledContactForm = () => {

  const [formData , setFormData] = useState({fname: "",lname:"", email:"",phone:"",message:"",});

  const handlechange = (e) => {
    const {name,value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = () => {
    console.log(formData);
    setFormData({fname:"",lname:"",email:"",phone:"",message:""})
  }

  return (
    <>
      
        <div className="container">
          <div className="flex flex-wrap justify-center mt-5">
            <div className="w-full px-4">
              <div className="rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <h1 className="text-center text-blue-500 font-bold mb-2">Controlled Component</h1>
                <form
                className="flex flex-col gap-3" 
                onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handlechange}
                    placeholder="Your First Name"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handlechange}
                    placeholder="Your Last Name"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <input
                    value={formData.email}
                    type="email"
                    name="email"
                    onChange={handlechange}
                    placeholder="Your Email"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <input
                    value={formData.phone}
                    type="tel"
                    name="phone"
                    onChange={handlechange}
                    placeholder="Your Phone"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <div className="mb-6">
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={handlechange}
                      placeholder="Your Message"
                      name="message"
                      className="w-full resize-none rounded border border-stroke px-3.5  py-3 text-base text-body-color outline-none focus:border-2 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-blue-500 p-3 text-white transition cursor-pointer hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default ControlledContactForm;
