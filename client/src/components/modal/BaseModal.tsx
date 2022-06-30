import { Fragment, PropsWithChildren } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import Button from '../layout/Button';

type BaseModalProps = PropsWithChildren<{
  closeModal: () => void;
  isOpen: boolean;
  title: string;
}>;

const BaseModal = ({
  children,
  closeModal,
  isOpen,
  title,
}: BaseModalProps) => {
  return (
    <Transition appear={true} show={isOpen} as={Fragment}>
      <Dialog className="relative z-10" onClose={closeModal} as="div">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          leave="ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-x-hidden overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-6xl overflow-hidden text-left transition-all border shadow-xl bg-slate-900 rounded-xl border-slate-700">
                <div className="relative flex items-center justify-between p-5 border-b border-b-slate-700">
                  <Dialog.Title className="text-base font-semibold tracking-tight text-white lg:text-lg">
                    {title}
                  </Dialog.Title>
                  <Button
                    className="absolute inset-y-auto justify-center w-8 h-8 rounded-md right-5 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Zatvoriť</span>
                    <XIcon className="w-4 h-4" aria-hidden={true} />
                  </Button>
                </div>
                <div className="p-5">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BaseModal;
