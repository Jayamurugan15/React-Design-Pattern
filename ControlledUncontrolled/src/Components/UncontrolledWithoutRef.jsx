import React from 'react'

const UncontrolledWithoutRef = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log("Form Data from Without ref : >>>>",data)
    }

  return (
    <div className="container">
          <div className="flex flex-wrap justify-center mt-5">
            <div className="w-full px-4 ">
              <div className="rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <h1 className="text-center text-green-500 font-bold mb-4">UnControlled Component Without Ref</h1>
                <form
                className="flex flex-col gap-3" 
                onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <input
                    
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <div className="mb-6">
                    <textarea
                
                      rows={2}
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
  )
}

export default UncontrolledWithoutRef