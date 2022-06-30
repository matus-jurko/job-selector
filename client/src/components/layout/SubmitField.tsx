import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
} from 'react';

import classNames from 'classnames';
import TextField from './TextField';
import Button from './Button';

interface SubmitFieldProps extends ComponentPropsWithoutRef<'input'> {
  buttonIcon?: ElementType<ComponentProps<'svg'>>;
  buttonTitle?: string;
  buttonText?: string;
  placeholder: string;
  id: string;
}

const SubmitField = forwardRef<HTMLInputElement, SubmitFieldProps>(
  (
    {
      id,
      className,
      placeholder,
      buttonIcon: ButtonIcon,
      buttonTitle = 'Odoslať',
      buttonText = 'Odoslať',
      autoComplete = 'off',
      autoCorrect = 'off',
      autoFocus = true,
      required = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className={classNames('w-full relative', className)}>
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
        <TextField
          {...props}
          placeholder={placeholder}
          ref={ref}
          id={id}
        />
        <Button
          className="absolute transform -translate-y-1/2 right-2.5 top-1/2"
          variant="primary-solid"
          title={buttonTitle}
          type="submit"
        >
          {ButtonIcon && (
            <ButtonIcon
              className="w-6 h-6 mr-2 -ml-2"
              aria-hidden={true}
            />
          )}{' '}
          {buttonText}
        </Button>
      </div>
    );
  }
);

export default SubmitField;
