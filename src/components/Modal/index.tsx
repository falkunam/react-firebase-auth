// Modal.js
import React, { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-50 bg-slate-200 w-full max-w-md p-6 rounded-lg">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-gray-700"
            >
              <IoMdClose />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;