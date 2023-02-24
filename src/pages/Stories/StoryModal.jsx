import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const StoryModal = ({ children, open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-center rounded-sm justify-center h-screen px-4 py-2">
          <div
            class="fixed inset-0 transition-opacity bg-gray-900 opacity-100"
            id="headlessui-dialog-overlay-20"
            aria-hidden="true"
          ></div>

          <Transition.Child
            as={Fragment}
            enter="ease out duration-300"
            enterFrom="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-900 opacity-100" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {children ? children : <div>Modal Content</div>}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default StoryModal;
