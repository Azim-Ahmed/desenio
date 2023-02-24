// import { IoSaveSharp, IoCloseSharp } from 'react-icons/io5';

const Modal = ({ children, modalIsOpen, setModalIsOpen, onSave }) => {
  return (
    <div
      className={`fixed z-[6000] inset-0 w-full min-h-screen items-center justify-center transition-opacity duration-300
    ${modalIsOpen ? 'flex' : 'hidden'}
    `}
    >
      <div
        className="absolute inset-0 z-0 w-full h-full bg-black/25"
        onClick={() => setModalIsOpen((prev) => !prev)}
      />
      <div className="relative z-10 w-full max-w-lg p-5 bg-white rounded-md">
        <div className="flex items-center justify-between mb-3 md:mb-0">
          <h3 className="text-xl font-medium text-gray-800 md:mb-5">
            Crop your image
          </h3>

          <div className="block md:hidden ">
            <div className="flex items-center space-x-3">
              <button
                className="px-5 py-2 text-sm border-2 border-black rounded-md"
                onClick={() => setModalIsOpen(false)}
              >
                {/* <IoCloseSharp /> */}
                Azim
              </button>
              <button
                className="px-5 py-2 text-sm text-white transition bg-black border-2 border-black rounded-md hover:opacity-80"
                onClick={onSave}
              >
                {/* <IoSaveSharp />
                 */}
                Azim
              </button>
            </div>
          </div>
        </div>

        {children}
        <div className="hidden mt-5 md:block">
          <div className="flex items-center space-x-5">
            <button
              className="px-5 py-2 text-sm border-2 border-black rounded-md"
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-5 py-2 text-sm text-white transition bg-black border-2 border-black rounded-md hover:opacity-80"
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
