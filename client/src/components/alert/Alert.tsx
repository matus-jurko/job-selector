import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { AlertContext } from '../../context/alert/alertContext';
import { Transition } from '@headlessui/react';
import useContext from '../../hooks/useContext';

const Alert = () => {
  const { message, isOpen } = useContext(AlertContext);

  return (
    <Transition
      show={isOpen}
      className="fixed inset-x-0 bottom-4 lg:bottom-6 left-0 z-[99] lg:max-w-lg mx-auto lg:px-0 px-4 select-none"
      enter="transition-opacity ease-in duration-100"
      leave="transition-opacity ease-out duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      role="alert"
    >
      <div className="bg-red-500 border-2 border-red-300 shadow-lg rounded-xl">
        <div className="flex items-center p-4 text-white">
          <ExclamationCircleIcon
            className="inline-block w-5 h-5 mr-2.5 shrink-0"
            aria-hidden={true}
          />
          <span className="text-sm font-medium truncate">{message}</span>
        </div>
      </div>
    </Transition>
  );
};

export default Alert;
