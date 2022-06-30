import { ComponentPropsWithoutRef, forwardRef } from 'react';
import classNames from 'classnames';

const TextField = forwardRef<
  HTMLInputElement,
  Omit<ComponentPropsWithoutRef<'input'>, 'type'>
>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      type="text"
      className={classNames(
        className,
        'block w-full p-4 text-base text-white border border-slate-500 rounded-xl shadow-lg bg-slate-600 placeholder-slate-300 focus:outline-none active:bg-slate-600 font-medium appearance-none'
      )}
    />
  );
});

export default TextField;
