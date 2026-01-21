import React, { useRef, useState } from 'react'

const UncontrolledWithRef = ( ) => {

    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");
    const messageRef =  useRef("");
    
      const handlechange = (e) => {
        e.preventDefault();
        
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        if(!name) {
          nameRef.current.focus();
          return
        }

        if(!email.includes("@")){
          emailRef.current.focus();
          return;
        }

        if(!/^\d{10}$/.test(phone)){
          phoneRef.current.focus();
          return;
        }

        if(!message){
          messageRef.current.focus();
          return;
        }
       

        console.log("Form Submitted :", {name,email,phone,message})
      }
  return (
     <div className="container">
          <div className="flex flex-wrap justify-center mt-5">
            <div className="w-full px-4">
              <div className="rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <h1 className="text-center text-red-500 font-bold mb-4">UnControlled Component with Ref</h1>
                <form
                className="flex flex-col gap-3" 
                onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    ref={nameRef}
                    placeholder="Your Name"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    placeholder="Your Email"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <input
                    ref={phoneRef}
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full rounded border border-stroke px-3.5 py-3 text-base outline-none focus:border-2 focus:border-blue-500"
                  />
                  <div className="mb-6">
                    <textarea
                      ref={messageRef}
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

export default UncontrolledWithRef