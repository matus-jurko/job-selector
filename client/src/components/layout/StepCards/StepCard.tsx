import { ComponentProps } from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import { BaseStep } from '../../../types';
import StepBadge from './StepBadge';
import classNames from 'classnames';

type StepCardProps = BaseStep &
  ComponentProps<'li'> & {
    active?: boolean;
    disabled?: boolean;
    step: number;
  };

const StepCard = ({
  title,
  description,
  active = false,
  disabled = false,
  step,
  className,
  ...props
}: StepCardProps) => {
  return (
    <li
      {...props}
      title={title}
      className={classNames(
        className,
        'p-5 rounded-xl bg-slate-900 border-2 shadow-md relative',
        active ? 'border-teal-500' : 'border-slate-600',
        { 'border-dashed': !active && !disabled }
      )}
    >
      {disabled && (
        <StepBadge
          className="absolute -top-2.5 -right-2.5"
          disabled={true}
        >
          <span className="sr-only">Dokončený krok {step}</span>
          <CheckIcon className="w-6 h-6 p-1" aria-hidden={true} />
        </StepBadge>
      )}
      <div className="flex items-center mb-2">
        <StepBadge className="mr-3" disabled={disabled}>
          {step}
        </StepBadge>
        <h2 className="text-base font-semibold tracking-tight text-left text-white lg:text-lg">
          {title}
        </h2>
      </div>
      <p className="text-sm font-medium text-left text-slate-300 lg:text-base">
        {description}
      </p>
    </li>
  );
};

export default StepCard;
