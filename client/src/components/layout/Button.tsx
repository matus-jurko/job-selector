import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  forwardRef,
} from 'react';

import classNames from 'classnames';

interface ButtonProps
  extends PropsWithChildren<ComponentPropsWithoutRef<'button'>> {
  variant?: 'primary-solid' | 'primary-outline';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', className, children, variant, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={classNames(
          className,
          'focus:outline-none font-medium text-sm inline-flex items-center text-center',
          {
            'px-4 text-white transition-colors duration-200 ease-in-out bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-black focus:ring-white focus:ring-4 focus:ring-opacity-30 h-10':
              variant === 'primary-outline',
            'h-10 px-4 text-black transition-colors duration-200 ease-in-out rounded-lg shadow-lg bg-gray-50 hover:bg-black hover:text-white focus:ring-black focus:ring-4 focus:ring-opacity-30':
              variant === 'primary-solid',
          }
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
