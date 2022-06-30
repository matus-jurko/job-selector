import { useState } from 'react';
import { Switch } from '@headlessui/react';
import classNames from 'classnames';

interface ToggleProps {
  onChange: (value: boolean) => void;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
}

const Toggle = ({
  checked = false,
  disabled = false,
  onChange,
  className,
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (value: boolean) => {
    setIsChecked(value);
    onChange(value);
  };

  return (
    <Switch
      checked={isChecked}
      disabled={disabled}
      onChange={handleChange}
      className={classNames(
        className,
        isChecked
          ? 'bg-gradient-to-r from-teal-500 to-green-500 disabled:from-teal-800 disabled:to-green-800'
          : 'bg-slate-500',
        'relative inline-flex h-[16px] w-[28px] shrink-0 cursor-pointer rounded-full border-2 border-transparent ring-1 transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring-[3px] focus-visible:ring-black focus-visible:ring-opacity-25 animate-gradient ring-slate-700 disabled:cursor-not-allowed'
      )}
    >
      <span
        className={classNames(
          isChecked ? 'translate-x-3' : 'translate-x-0',
          'pointer-events-none inline-block h-[12px] w-[12px] transform rounded-full shadow-lg ring-0 transition duration-150 ease-in-out bg-white'
        )}
      />
    </Switch>
  );
};

export default Toggle;
