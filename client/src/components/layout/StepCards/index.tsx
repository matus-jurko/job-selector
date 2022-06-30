import { ComponentProps } from 'react';
import { Step } from '../../../types';
import classNames from 'classnames';
import StepCard from './StepCard';

interface StepCardsProps extends ComponentProps<'div'> {
  currentStepIndex?: number;
  steps: Step[];
}

const StepCards = ({
  currentStepIndex = -1,
  className,
  steps,
  ...props
}: StepCardsProps) => {
  return (
    <div {...props} className={classNames(className, 'relative')}>
      <span
        className="absolute left-1/2 top-0 w-0.5 h-full bg-white/50 lg:top-1/2 lg:left-0 lg:w-full lg:h-0.5 transform -translate-x-1/2 lg:translate-x-0 lg:translate-y-1/2"
        aria-hidden={true}
      />
      <ol className="relative z-10 grid gap-5 lg:grid-cols-3">
        {steps.map((step, index) => (
          <StepCard
            {...step}
            key={index}
            active={index === currentStepIndex}
            disabled={index < currentStepIndex}
            step={index + 1}
          />
        ))}
      </ol>
    </div>
  );
};

export default StepCards;
