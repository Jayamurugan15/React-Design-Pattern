import { useState } from "react";
import Modal from "./Components/Modal";

function App() {
  const [showModal,setShowModal ] = useState(false)

  return (
    <>
      <p className="text-blue-400">Compound Component</p>
      <button onClick={()=>setShowModal(true)}>Open Modal</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>Confirm Deletion</Modal.Header>
        <Modal.Body>
          <p className="text-gray-600 ">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={()=>alert("Deleted")}
            className="px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg"
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
