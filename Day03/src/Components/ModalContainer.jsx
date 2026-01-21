import React,{useState} from 'react'
import Modal from './Modal'

const ModalContainer = ( ) => {
    const [showModal,setShowModal ] = useState(false)
  return (
    <div className='flex item-center justify-center h-screen'>
      <div className='flex flex-col gap-3 w-100 text-center mt-10 '>
      <p className="text-blue-400">Compound Component</p>
      <button onClick={()=>setShowModal(true)} className='bg-blue-500 px-4 py-2 rounded-lg  text-white cursor-pointer'>Open Modal</button>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Confirm Deletion</Modal.Header>
        <Modal.Body>
          <p className="text-gray-900 ">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-300 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={()=>alert("Deleted")}
            className="px-4 py-2 text-white bg-red-500 hover:bg-red-700 rounded-lg cursor-pointer"
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalContainer