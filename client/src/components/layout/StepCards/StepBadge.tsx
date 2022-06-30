import { ComponentProps, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface StepCardBadgeProps
  extends PropsWithChildren<ComponentProps<'span'>> {
  disabled?: boolean;
}

const StepCardBadge = ({
  disabled = false,
  className,
  children,
  ...props
}: StepCardBadgeProps) => {
  return (
    <span
      {...props}
      className={classNames(
        className,
        'flex items-center justify-center w-6 h-6 rounded-full text-white font-semibold text-base shrink-0 animate-gradient bg-gradient-to-r',
        disabled
          ? 'from-gray-600 to-slate-500'
          : 'from-teal-500 to-green-500'
      )}
    >
      {children}
    </span>
  );
};

export default StepCardBadge;
